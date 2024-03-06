import { createBoard } from '@wixc3/react-board';
import { NewReleases } from '../../../components/new-releases/new-releases';

export default createBoard({
    name: 'NewReleases',
    Board: () => <NewReleases />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#0d4350',
        windowWidth: 1166,
        canvasWidth: 954,
        canvasHeight: 572,
    },
});
