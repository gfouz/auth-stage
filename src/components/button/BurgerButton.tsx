import s from './button.module.scss';

interface IButton {
  st: boolean;
  reverse: () => boolean;
}

const BurgerButton = ({ st, reverse }: IButton) => {
  return (
    <button className={st ? s.opened : s.closed} onClick={() => reverse()}>
      <i className={s.bar}></i>
      <i className={s.bar}></i>
      <i className={s.bar}></i>
    </button>
  );
};
export default BurgerButton;
