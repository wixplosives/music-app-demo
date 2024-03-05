import { createBoard } from '@wixc3/react-board';
import { NewReleases } from '../../../components/new-releases/new-releases';

export default createBoard({
    name: 'NewReleases',
    Board: () => <NewReleases />,
    isSnippet: true,
});