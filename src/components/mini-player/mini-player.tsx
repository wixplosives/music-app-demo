import classNames from 'classnames';
import styles from './mini-player.module.scss';

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
                    src="https://i.ibb.co/2ZNTBTK/1.png"
                    alt=""
                    className={styles['song-img-big']}
                />
                <div className={styles['right-part']}>
                    <h2 className={styles.medium}>Chill Hits </h2>
                    <p className={styles.p}>
                        Let this playlist transport you to a state of serenity
                    </p>
                </div>
            </div>
            <h2 className={classNames(styles.title, styles.small)}>230 SONGS | 20h 10m</h2>
            <div className={styles['song-small-card']}>
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
            <div className={styles['song-small-card']}>
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
            <div className={styles['song-small-card']}>
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
        </div>
    );
};
