import Tippy from '@tippyjs/react';
import className from 'classnames/bind';
import styles from './ActiveLogin.module.scss';
const { UploadIcon, MessageIcon, InboxIcon } = require('~/component/icons');

function ActiveLogin() {
    const cx = className.bind(styles);
    return (
        <div>
             <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                     <UploadIcon height="32px" width="32px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                               <MessageIcon height="32px" width="26px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                               <InboxIcon height="32px" width="32px" />

                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
         
         
        </div>
    );
}

export default ActiveLogin;
