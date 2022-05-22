import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2>sidebar</h2>
            
            </div>
        </aside>
    );
}

export default SideBar;
