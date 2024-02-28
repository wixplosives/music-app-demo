import classNames from 'classnames';
import styles from './songs-card.module.scss';

export interface SongsCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SongsCard = ({ className }: SongsCardProps) => {
    return <div className={classNames(styles.root, className)}>SongsCard</div>;
};
