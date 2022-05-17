import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts() {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  );
}

export default FeaturedPosts;
