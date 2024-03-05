import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { NavItem } from '../../../components/nav-item/nav-item';

export default createBoard({
    name: 'App',
    Board: () => null,
    environmentProps: {
        canvasWidth: 233,
        windowBackgroundColor: '#572323',
    },
});
