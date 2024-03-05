import { createBoard } from '@wixc3/react-board';
import { SideBar } from '../../../components/side-bar/side-bar';

export default createBoard({
    name: 'SideBar',
    Board: () => <SideBar />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 898,
        canvasWidth: 289,
        windowWidth: 1024,
    },
});
