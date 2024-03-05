import { createBoard } from '@wixc3/react-board';
import { CuratedPlaylist } from '../../../components/curated-playlist/curated-playlist';

export default createBoard({
    name: 'CuratedPlaylist',
    Board: () => <CuratedPlaylist />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 545,
        canvasHeight: 941,
        windowHeight: 1222,
        windowWidth: 1298,
    },
});
