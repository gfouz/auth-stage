import Link from 'next/link';
import s from './PostList.module.scss';

type t_meta = {
  title?: string;
  src?: string;
  alt?: string;
};

type t_post = {
  meta: t_meta;
  slug: string;
};

type IPostList = {
  posts: t_post[];
};
function Posts({ posts }: IPostList) {
  return (
    <ul className={s.postList}>
      {posts.map((post: t_post, index) => (
        <li className={s.postItem} key={index}>
          <div className={s.postTitleSection}>
            <p>{post.title}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Posts;
