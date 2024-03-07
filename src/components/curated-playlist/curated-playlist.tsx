import '../../index.css';
import classNames from 'classnames';
import styles from './curated-playlist.module.scss';
import { PlayBtn } from '../play-btn/play-btn';
import PlayBtn_module from '../play-btn/play-btn.module.scss';

export interface CuratedPlaylistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const CuratedPlaylist = ({ className }: CuratedPlaylistProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['curated-playlist']}>
                <div className={styles['playllist-txt']}>
                    <p className="nav-text">CURATED PLAYLIST</p>
                    <p className={styles['playlist-name']}>Fresh Waves</p>
                    <p className={styles['playlist-description']}>
                        Where synergy meets productivity and every beat collaborates to create a
                        seamless workday soundtrack.
                    </p>
                    <div className={styles['playlist-icons']}>
                        <PlayBtn variant="primary" />
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg"
                            alt=""
                            className={styles['heart-icon']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
