import classNames from 'classnames';
import styles from './navigation.module.scss';
import { NavItem } from '../nav-item/nav-item';
import NavItem_module from '../nav-item/nav-item.module.scss';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <NavItem />
            <NavItem />
            <NavItem className={NavItem_module['no-icon']} />
        </div>
    );
};
