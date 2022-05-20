import Button from '~/component/Button';
import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function MenuItem({ data }) {
    return (
        <div>
            <Button
                className={cx('menu-item')}
                leftIcon={data.icon}
                to={data.to}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
