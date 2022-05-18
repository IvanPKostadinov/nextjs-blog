import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POST = {
  slug: 'getting-startet-with-nextjs',
  title: 'Getting Started with Next.js',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  // This is Markdown:
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
