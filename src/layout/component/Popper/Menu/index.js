import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
import { Wrapper as WrapperPopper } from '~/layout/component/Popper';
import Tippy from '@tippyjs/react/headless';
import Button from '~/component/Button';
import MenuItem from './MenuItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classnames.bind(styles);
function Menu({ children, items, onChange }) {
    const [history, sethistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParrrent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrrent) {
                            console.log(history);

                            sethistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
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
                                {history.length > 1 && (
                                    <HeaderMenu
                                        title="Language"
                                        onBack={() => {
                                            sethistory(
                                                history.slice(
                                                    0,
                                                    history.length - 1,
                                                ),
                                            );
                                        }}
                                    />
                                )}
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
