import s from './sidebar.module.scss';
import Navbar from './Navbar';
import { useSnapshot } from 'valtio';
import { IRouteArray } from './constants';
import { switcher } from 'store/store';

export default function Sidebar(props: IRouteArray) {
  const snap = useSnapshot(switcher);
  const { st, setFalse } = snap;

  return (
    <nav>
      <div className={st ? s.opened : s.closed} onClick={setFalse}>
        <Navbar options={props.options} />
      </div>
    </nav>
  );
}
