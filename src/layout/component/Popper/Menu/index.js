import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
import { Wrapper as WrapperPopper } from '~/layout/component/Popper';
import Tippy from '@tippyjs/react/headless';
import Button from '~/component/Button';
import MenuItem from './MenuItems';

const cx = classnames.bind(styles);
function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <div className={cx('menu')}>
            <Tippy
                interactive
                delay={[0, 700]}
                offset={[12, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('customWrapper')}>
                            <div
                                className={cx('memuItems')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                {renderItems()}
                            </div>
                        </WrapperPopper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
