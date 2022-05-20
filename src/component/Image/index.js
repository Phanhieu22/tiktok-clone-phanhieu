import classnames from 'classnames/bind';
import styles from './Image.module.scss';
const cx = classnames.bind(styles);
function Image() {
    const img =
        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653148800&x-signature=N%2BfLVM2orrPmERR0Y278WdqHNGo%3D';

    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={img} alt="avatar" />
        </div>
    );
}

export default Image;
