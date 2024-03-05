import { createBoard } from '@wixc3/react-board';
import { Player } from '../../../components/player/player';

export default createBoard({
    name: 'Player',
    Board: () => <Player />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#0d4350',
        canvasWidth: 493,
        canvasHeight: 160,
    },
});
