import { createBoard } from '@wixc3/react-board';
import { ButtonPrimary } from '../../../components/button-primary/button-primary';

export default createBoard({
    name: 'Button',
    Board: () => <ButtonPrimary />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 121,
    },
});
