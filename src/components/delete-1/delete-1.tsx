import classNames from 'classnames';
import styles from './delete-1.module.scss';
import { NavItem } from '../nav-item/nav-item';

export interface Delete1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Delete1 = ({ className }: Delete1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <NavItem
                text="home"
                imageUrl="https://static.wixstatic.com/shapes/27eba2_1472978891f5457d9ed90a571c301a95.svg"
                showIcon={false}
            />
            <NavItem
                text="home"
                imageUrl="https://static.wixstatic.com/shapes/27eba2_1472978891f5457d9ed90a571c301a95.svg"
                showIcon={true}
            />
            Delete1
        </div>
    );
};
