import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import OnlyHeader from '~/layout/OnlyHeader';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
const pullicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    {
        path: '/upload',
        component: Upload,
        layout: OnlyHeader,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/profile',
        component: Profile,
    },
];
const privateRouter = [];
export { pullicRouter, privateRouter };
