import { createBoard } from '@wixc3/react-board';
import { SideBar } from '../../components/side-bar/side-bar';
import NewBoard_board_module from './new-board.board.module.scss';
import { NewReleases } from '../../components/new-releases/new-releases';
import { Player } from '../../components/player/player';
import { CuratedPlaylist } from '../../components/curated-playlist/curated-playlist';

export default createBoard({
    name: 'M App',
    Board: () => (
        <div className={NewBoard_board_module['app-wrapper']}>
            <SideBar />
            <div className={NewBoard_board_module.content}>
                <CuratedPlaylist />
                <div className={NewBoard_board_module.right}>
                    <NewReleases />
                    <Player />
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowHeight: 907,
        windowWidth: 1228,
        canvasHeight: 904,
        windowBackgroundColor: '#ffffff',
        canvasWidth: 1570,
    },
});
