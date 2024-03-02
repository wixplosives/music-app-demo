import { createBoard } from '@wixc3/react-board';
import { PlayBtn } from '../../../components/play-btn/play-btn';

export default createBoard({
    name: 'PlayBtn',
    Board: () => <PlayBtn variant="primary" />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#a1a1a1',
    },
});
