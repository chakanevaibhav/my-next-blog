import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
};

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  return postFiles.map((postFile) => {
    return getPostData(postFile);
  });
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
