import { createBoard } from '@wixc3/react-board';
import { Delete1 } from '../../../components/delete-1/delete-1';

export default createBoard({
    name: 'Delete1',
    Board: () => <Delete1 />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#b42626',
        canvasWidth: 423,
    },
});
