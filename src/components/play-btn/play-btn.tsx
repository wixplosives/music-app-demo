import classNames from 'classnames';
import styles from './play-btn.module.scss';

export interface PlayBtnProps {
    className?: string;
    variant?: 'primary' | 'secondary';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PlayBtn = ({ className, variant = 'secondary' }: PlayBtnProps) => {
    return (
        <div className={classNames(styles.root, styles[variant], className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                fill="none"
                viewBox="0 0 7 7"
                className={styles['play-icon']}
            >
                <path fill="currentColor" d="M6.105 3.553.776 6.63V.476l5.33 3.077Z" />
            </svg>
        </div>
    );
};
