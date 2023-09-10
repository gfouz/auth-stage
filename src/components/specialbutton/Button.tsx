import s from './Button.module.scss';

interface buttonProps {
  loading: boolean;
}

const Button = ({ loading }: buttonProps) => {
  return (
    <>
      {loading ? (
        <div className={s.infinite_loading_bar}>
          <ul className={s.bar_item_list}>
            <li className={s.bar_item}> </li>
            <li className={s.bar_item}> </li>
            <li className={s.bar_item}> </li>
            <li className={s.bar_item}> </li>
            <li className={s.bar_item}> </li>
            <li className={s.bar_item}> </li>
          </ul>
        </div>
      ) : (
        <button className={s.submit_button}>Send</button>
      )}
    </>
  );
};
export default Button;
