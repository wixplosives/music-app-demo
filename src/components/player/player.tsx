import '../../index.css';
import classNames from 'classnames';
import styles from './player.module.scss';

export interface PlayerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Player = ({ className }: PlayerProps) => {
    return (
        <div className={classNames(styles.root, className, styles.player)}>
            <div className={styles.left}>
                <div className={styles['player-txt']}>
                    <div className="nav-text">I Think This Could Work</div>
                    <div className="artist">Jolene RV</div>
                </div>
                <div className={styles.icons}>
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_eb9dab580bfe4bd5a5c56f43629d1fe3.svg"
                        alt=""
                        className={styles['player-icon']}
                    />
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_e04f4c8cc4ea4fada8d74b3ed9a721d7.svg"
                        alt=""
                        className={styles['player-icon']}
                    />
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_35fc1b1a5b564bd8a461ffeb02d5272f.svg"
                        alt=""
                        className={styles['play-icon']}
                    />
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_b7b48a05a1244fdda79348e7f6951bbf.svg"
                        alt=""
                        className={styles['player-icon']}
                    />
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_423a39a41498402a9d8f847c1226cf7c.svg "
                        alt=""
                        className={styles['player-icon']}
                    />
                </div>
            </div>
            <img
                alt=""
                className={styles['player-img']}
                src="https://static.wixstatic.com/media/27eba2_8b88c8bf6128431a845beb3e9df8bfec~mv2.png"
            />
        </div>
    );
};
