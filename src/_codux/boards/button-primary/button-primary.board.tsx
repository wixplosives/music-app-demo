import { createBoard } from '@wixc3/react-board';
import { ButtonPrimary } from '../../../components/button-primary/button-primary';
import ButtonPrimary_module from '../../../components/button-primary/button-primary.module.scss';

export default createBoard({
    name: 'Button',
    Board: () => <ButtonPrimary text="Upgrade" className={ButtonPrimary_module['btn-primary']} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 121,
    },
});
