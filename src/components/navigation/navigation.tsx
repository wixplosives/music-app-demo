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
            <div className={styles['logo-welcome']}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="none"
                    viewBox="0 0 16 25"
                    className={styles.logo}
                >
                    <path
                        fill="#E4FF88"
                        d="M5.375 4.444c0-.194-.018-.388-.053-.582a1.364 1.364 0 0 0-.159-.556.899.899 0 0 0-.343-.423c-.141-.105-.344-.158-.609-.158-.335 0-.617.105-.846.317a2.208 2.208 0 0 1-.159-.767c0-.282.045-.555.133-.82.105-.282.264-.528.476-.74.211-.212.476-.38.793-.502C4.943.07 5.348 0 5.824 0c1.058 0 1.878.317 2.46.952.581.635.872 1.507.872 2.618v15.655c-.476 0-.943-.035-1.401-.106a3.563 3.563 0 0 1-1.217-.423c-.352-.23-.634-.564-.846-1.005-.211-.44-.317-1.031-.317-1.772V4.444ZM3.81 24.072h-.265c-.458 0-.899-.044-1.322-.132a3.115 3.115 0 0 1-1.137-.476 2.669 2.669 0 0 1-.793-.952c-.194-.405-.291-.934-.291-1.587V4.874h.423c.423 0 .837.053 1.243.159.405.088.767.255 1.084.502.317.23.573.546.767.952.194.405.29.925.29 1.56v16.025ZM11.72 7.79c0-.194-.017-.388-.053-.582a1.364 1.364 0 0 0-.158-.555.899.899 0 0 0-.344-.423c-.14-.106-.344-.159-.608-.159-.335 0-.617.106-.846.317a2.208 2.208 0 0 1-.159-.767c0-.282.044-.555.132-.82.106-.281.265-.528.476-.74.212-.211.476-.379.793-.502.335-.141.741-.212 1.217-.212 1.058 0 1.878.318 2.46.952.581.635.872 1.508.872 2.618v12.309c-.476 0-.943-.035-1.402-.106a3.562 3.562 0 0 1-1.216-.423c-.353-.23-.635-.564-.846-1.005-.212-.44-.318-1.031-.318-1.772V7.79Z"
                    />
                </svg>
                <p className={styles['welcome-txt']}>Welcome,</p>
            </div>
            <div className={styles['top-nav']}>
                <NavItem
                    text="Home "
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_1472978891f5457d9ed90a571c301a95.svg"
                    showIcon={true}
                />
                <NavItem
                    text="Search"
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_1eb0281ae5aa4ce5a1288e630e8044ff.svg"
                    showIcon={true}
                />
                <NavItem
                    text="Liked Songs"
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg "
                    showIcon={true}
                />
            </div>
            <p className={styles['nav-title']}>LIBRARY</p>
            <div className={styles['lower-nav']}>
                <NavItem
                    text="My Playlists"
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg "
                    showIcon={false}
                />
                <NavItem
                    text="Recently Played"
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg "
                    showIcon={false}
                />
                <NavItem
                    text="Charts"
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg "
                    showIcon={false}
                />
                <NavItem
                    text="Podcasts "
                    imageUrl="https://static.wixstatic.com/shapes/27eba2_2fe280a1d8574bd5bc593352579c72d7.svg "
                    showIcon={false}
                />
            </div>
            <div className={styles['add-playlist']}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="28"
                    fill="none"
                    viewBox="0 0 27 28"
                    className={styles.logo}
                >
                    <rect
                        width="25.788"
                        height="26.002"
                        x=".252"
                        y=".771"
                        stroke="#E4FF88"
                        stroke-width=".5"
                        rx="12.894"
                    />
                    <path
                        fill="#E4FF88"
                        d="M9.046 15.506v-1.912h3.004V10.59h1.926v3.003h3.003v1.912h-3.003v3.017h-1.927v-3.017H9.046Z"
                    />
                </svg>
                <p className={NavItem_module['nav-text']}>Add Playlist</p>
            </div>
        </div>
    );
};
