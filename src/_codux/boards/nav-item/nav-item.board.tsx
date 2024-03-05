import { createBoard } from '@wixc3/react-board';
import { NavItem } from '../../../components/nav-item/nav-item';

export default createBoard({
    name: 'NavItem',
    Board: () => (
        <NavItem
            text="home"
            imageUrl="https://static.wixstatic.com/shapes/27eba2_1472978891f5457d9ed90a571c301a95.svg"
            showIcon={true}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#a76060',
        canvasWidth: 219,
    },
});
