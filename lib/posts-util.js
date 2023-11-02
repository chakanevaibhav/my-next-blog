import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map((postFile) => {
    return getPostData(postFile);
  });
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
