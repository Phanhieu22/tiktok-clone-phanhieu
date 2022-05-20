import styles from './ActiveNotLogin.module.scss';
import className from 'classnames/bind';
import { MoreIcon, UploadIcon } from '~/component/icons';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/layout/component/Popper';
import Tippy from '@tippyjs/react/headless';

import AccountItem from '../AccoutItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
function ActiveNotLogin() {
    const cx = className.bind(styles);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    return (
        // class login upload
        <div className={cx('ActiveNotLogin')}>
            <Button text>Upload</Button>

            <Button primary>Log in</Button>
            <Tippy
                placement="bottom-end"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <div
                                className={cx('memuItems')}
                                tabIndex="-1"
                                {...attrs}
                            ></div>
                        </WrapperPopper>
                    </div>
                )}
            >
                <button>
                    <MoreIcon classNamePr={cx('moreIcon')} />
                </button>
            </Tippy>
        </div>
    );
}

export default ActiveNotLogin;
