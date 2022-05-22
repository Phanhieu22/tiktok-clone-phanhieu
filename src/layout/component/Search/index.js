import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { SearchIcon } from '~/component/icons';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as WrapperPopper } from '~/layout/component/Popper';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/layout/component/AccoutItem';
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const cx = className.bind(styles);
    const [resultSearch, setResultSearch] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(true);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setResultSearch([1, 2, 4]);
        }, 3000);
    }, []);
    const handelChangeInput = (e) => {
        setSearchValue(e.target.value);
    };
    const clearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResultSearch(false);
    };
    return (
        <HeadlessTippy
            visible={showResultSearch && resultSearch.length > 0}
            interactive
            render={(attrs) => (
                <WrapperPopper>
                    <div
                        className={cx('searchResult')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <h4 className={cx('accountSearch')}>Accoutns</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </div>
                </WrapperPopper>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    className={cx('searchInput')}
                    onChange={handelChangeInput}
                    value={searchValue}
                    ref={inputRef}
                    onFocus={() => {
                        setShowResultSearch(true);
                    }}
                />
                <span className={cx('spanSpliter')}></span>
                {!!searchValue && (
                    <div onClick={clearInput} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                )}
                {/* <div className={cx('loading')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </div> */}
                <button className={cx('btnIconSearch')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
