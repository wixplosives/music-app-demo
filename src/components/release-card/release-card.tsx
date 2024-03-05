import '../../index.css';
import classNames from 'classnames';
import styles from './release-card.module.scss';

export interface ReleaseCardProps {
    className?: string;
    imageUrl: string;
    artist: string;
    song: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ReleaseCard = ({ className, imageUrl, artist, song }: ReleaseCardProps) => {
    return (
        <div className={classNames(className, styles.card)}>
            <img src={imageUrl} alt={song} />
            <div className={styles['song-details']}>
                <p className={styles['song']}>{song}</p>
                <p className={styles['artist']}>{artist}</p>
            </div>
        </div>
    );
};
