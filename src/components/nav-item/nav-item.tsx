import classNames from 'classnames';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    className?: string;
    text: string;
    imageUrl: string;
    showIcon: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavItem = ({ className, text, imageUrl, showIcon }: NavItemProps) => {
    return (
        <div className={classNames(styles.root, className, styles['nav-item'])}>
            {showIcon && <img alt={text} src={imageUrl} className={styles.icon} />}
            <p className={styles['nav-text']}>{text}</p>
        </div>
    );
};
