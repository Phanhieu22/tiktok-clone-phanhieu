import styles from './AccountItem.module.scss';

import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    const linkimg =
    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653292800&x-signature=njKssr7HCcQs5Shy7UK%2B9x2hwvI%3D'
    const cx = className.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={linkimg} alt="avatar" />
            <div className={cx('info')}>
                <h4>
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('userName')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
