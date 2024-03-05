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
            {showIcon && <img src={imageUrl} alt={text} className={styles.icon} />}
            <p>{text}</p>
        </div>
    );
};
