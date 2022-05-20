import Header from '~/layout/component/Header';
import SideBar from './SideBar';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);
function Defaultpage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Defaultpage;
