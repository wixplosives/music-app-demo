import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { NavItem } from '../../../components/nav-item/nav-item';
import { Navigation } from '../../../components/navigation/navigation';
import { SideBar } from '../../../components/side-bar/side-bar';

export default createBoard({
    name: 'App',
    Board: () => <SideBar />,
    environmentProps: {
        canvasWidth: 297,
        windowBackgroundColor: '#0d4350',
        windowHeight: 1034,
        canvasHeight: 872,
        windowWidth: 1202,
    },
});
