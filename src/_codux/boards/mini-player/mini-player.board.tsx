import { createBoard } from '@wixc3/react-board';
import { MiniPlayer } from '../../../components/mini-player/mini-player';

export default createBoard({
    name: 'MiniPlayer',
    Board: () => <MiniPlayer />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 351,
        windowHeight: 618,
        windowWidth: 484,
    },
});
