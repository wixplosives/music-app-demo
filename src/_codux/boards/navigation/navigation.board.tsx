import { createBoard } from '@wixc3/react-board';
import { Navigation } from '../../../components/navigation/navigation';

export default createBoard({
    name: 'Navigation',
    Board: () => <Navigation />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#1e505c',
        canvasWidth: 252,
        canvasHeight: 694,
        windowHeight: 873,
    },
});
