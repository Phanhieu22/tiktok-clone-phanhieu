import { Children } from 'react';
import Header from '../component/Header';

function OnlyHeader({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}

export default OnlyHeader;
