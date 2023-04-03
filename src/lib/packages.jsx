import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";

const postsDirectory = path.join(process.cwd(), "src/_library/packages");

export function getSortedPackagesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

async function getReadme(id) {
  const res = await fetch(
    `https://raw.githubusercontent.com/dream-faster/${id}/main/README.md`
  ).then((response) => response.text());

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFormat)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(res);

  return file;
}
export async function getPostData(id) {
  const readme = await getReadme(id);
  const localMDPath = path.join(postsDirectory, `${id}.md`);
  const localFileContents = fs.readFileSync(localMDPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(localFileContents);

  // Use remark to convert markdown into HTML string
  const processedLocalContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedLocalContent.toString() + readme.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
