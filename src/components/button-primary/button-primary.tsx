import classNames from 'classnames';
import styles from './button-primary.module.scss';

export interface ButtonPrimaryProps {
    className?: string;
    text: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ButtonPrimary = ({ className, text }: ButtonPrimaryProps) => {
    return (
        <div className={styles.root}>
            <p className={styles['btn-primary']}>{text}</p>
        </div>
    );
};

//export const NavItem = ({ className, text, imageUrl, showIcon }: NavItemProps) => {
// return (
//   <div className={classNames(styles.root, className, styles['nav-item'])}>
//     {showIcon && <img alt={text} src={imageUrl} className={styles.icon} />}
//   <p className={styles['nav-text']}>{text}</p>
//</div>
// );
//};
