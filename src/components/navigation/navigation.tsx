import classNames from 'classnames';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navigation = ({ className }: NavigationProps) => {
    return <div className={classNames(styles.root, className)}>Navigation</div>;
};
