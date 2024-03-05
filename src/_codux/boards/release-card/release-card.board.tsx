import { createBoard } from '@wixc3/react-board';
import { ReleaseCard } from '../../../components/release-card/release-card';

export default createBoard({
    name: 'ReleaseCard',
    Board: () => (
        <ReleaseCard
            imageUrl="https://static.wixstatic.com/media/27eba2_122ab2fd167449e9b1baae05db3b9bc1~mv2.png"
            artist="test"
            song="test"
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 210,
        windowBackgroundColor: '#122810',
    },
});
