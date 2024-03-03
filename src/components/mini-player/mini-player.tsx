import classNames from 'classnames';
import styles from './mini-player.module.scss';
import { PlayBtn } from '../play-btn/play-btn';



export interface MiniPlayerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MiniPlayer = ({ className }: MiniPlayerProps) => {
    return (
        <div className={classNames(styles.root, styles.MiniPlayer)}>
            <h2 className={classNames(styles.title, styles.small)}>NEW RELEASE</h2>
            <div className={styles['top-song']}>
                <img
                    src="https://i.ibb.co/NNL9GB0/4.png "
                    alt=""
                    className={styles['song-img-big']}
                />
                <div className={styles['right-part']}>
                    <div className={styles['right-part-txt']}>
                        <div className={styles.medium}>Chill Hits</div>
                        <div className={styles.p}>
                            Let this playlist transport you to a state of serenity
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <PlayBtn variant="primary" />
                        <img
                            src="https://i.ibb.co/fvMWN0Q/Heart.png "
                            alt=""
                            className={styles['small-icon']}
                        />
                        <img
                            src="https://i.ibb.co/Kx2YDt0/Polygon-4.png"
                            alt=""
                            className={styles['small-icon']}
                        />
                    </div>
                </div>
            </div>
            <h2 className={classNames(styles.title, styles.small)}>230 SONGS | 20h 10m</h2>
            <div className={styles['song-list']}>
                <div className={styles['song-small-card']}>
                    <div className={styles['img-txt']}>
                        <img
                            src="https://i.ibb.co/2ZNTBTK/1.png"
                            alt=""
                            className={styles['song-img-small']}
                        />
                        <div className={styles['song-details']}>
                            <div className={styles['track-name']}>Sunset Vibes </div>
                            <div className={styles['artist-name']}>Luna Serenade </div>
                        </div>
                    </div>
                    <img
                        src="https://i.ibb.co/17MfB8Z/Frame-1000002129.png"
                        alt=""
                        className={classNames(styles.icons, styles['song-list-icons'])}
                    />
                </div>
                <div className={styles['song-small-card']}>
                    <div className={styles['img-txt']}>
                        <img
                            src="https://i.ibb.co/T2Jc4Tn/2.png"
                            alt=""
                            className={styles['song-img-small']}
                        />
                        <div className={styles['song-details']}>
                            <div className={styles['track-name']}>Mellow Groove</div>
                            <div className={styles['artist-name']}>Ember Whisper </div>
                        </div>
                    </div>
                </div>
                <div className={styles['song-small-card']}>
                    <div className={styles['img-txt']}>
                        <img
                            src="https://i.ibb.co/HhC1XNT/3.png"
                            alt=""
                            className={styles['song-img-small']}
                        />
                        <div className={styles['song-details']}>
                            <div className={styles['track-name']}>Relexation Station </div>
                            <div className={styles['artist-name']}>Kai Harmony </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
