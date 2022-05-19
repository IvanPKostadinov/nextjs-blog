import fs from 'fs';
import path from 'path';
// import matter from 'grey-matter';
import matter from 'gray-matter';

// allows us to construct an absolute path with join()
// csw -> Current Working Directory
// process.cwd() -> points to the root directory
const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8'); // 'utf-8' -> the file encoding
  const { data, content } = matter(fileContent); // matter(string) -> returns { data -> Metadata, content -> contentAsString }

  const postSlug = fileName.replace(/\.md$/, ''); // here we replace '.md' (with RegEx) part of the file name with ''

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // fs -> File System
  // will read all the content synchronously (in a blocking way)
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
