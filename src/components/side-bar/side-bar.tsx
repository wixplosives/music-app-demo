import classNames from 'classnames';
import styles from './side-bar.module.scss';
import { Navigation } from '../navigation/navigation';
import { ButtonPrimary } from '../button-primary/button-primary';

export interface SideBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={classNames(styles.root, className, styles['side-bar'])}>
            <Navigation />
            <ButtonPrimary text="Turn it up!" />
        </div>
    );
};
