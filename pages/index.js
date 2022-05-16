import { Fragment } from 'react';

function HomePage() {
  // Typically Page Components are focused on getting Data, not on
  // styling or HTML. We use React Components for these.
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero Section -> Present ourselves
// 2) Featured Posts Section
