import s from './Iterator.module.scss';

type t_item = {
  title?: string;
  author?: string;
};

type IList = {
  list: t_item[];
};
function Iterator({ list }: IList) {
  return (
    <ul className={s.postList}>
      {list ? (
        list.map((item: t_item, index) => (
          <li className={s.list_item} key={index}>
            <div className={s.list_data}>
              <p>Title:{item.title}</p>
              <p>Author:{item.author}</p>
            </div>
          </li>
        ))
      ) : (
        <h1>Not available data!</h1>
      )}
    </ul>
  );
}
export default Iterator;
