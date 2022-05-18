import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

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

function HomePage() {
  // Typically Page Components are focused on getting Data, not on
  // styling or HTML. We use React Components for these.
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero Section -> Present ourselves
// 2) Featured Posts Section
