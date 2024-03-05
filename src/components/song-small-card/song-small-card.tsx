import classNames from 'classnames';
import styles from './song-small-card.module.scss';

export interface SongSmallCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SongSmallCard = ({ className }: SongSmallCardProps) => {
    return <div className={styles.root}>SongSmallCard</div>;
};
<div className={styles['song-small-card']}>
    <div className={styles['img-txt']}>
        <img src="https://i.ibb.co/2ZNTBTK/1.png" alt="" className={styles['song-img-small']} />
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
</div>;
