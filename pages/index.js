import { Fragment } from 'react';

import Hero from '../components/home-page/hero';

function HomePage() {
  // Typically Page Components are focused on getting Data, not on
  // styling or HTML. We use React Components for these.
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero Section -> Present ourselves
// 2) Featured Posts Section
