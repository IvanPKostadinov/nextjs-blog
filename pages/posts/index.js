import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-startet-with-nextjs',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React Framework for Production - it helps build fullstack applications.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-startet-with-nextjs2',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React Framework for Production - it helps build fullstack applications.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-startet-with-nextjs3',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React Framework for Production - it helps build fullstack applications.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-startet-with-nextjs4',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React Framework for Production - it helps build fullstack applications.',
    date: '2022-02-10',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
