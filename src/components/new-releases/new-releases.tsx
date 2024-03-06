import '../../index.css';
import classNames from 'classnames';
import styles from './new-releases.module.scss';
import { ReleaseCard } from '../release-card/release-card';

export interface NewReleasesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NewReleases = ({ className }: NewReleasesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-txt']}>
                <div className="nav-text">NEW RELEASES</div>
                <div className="nav-title">SEE ALL</div>
            </div>
            <div className={styles['card-wrapper']}>
                <ReleaseCard
                    imageUrl="https://static.wixstatic.com/media/27eba2_0742f783fe8e4199bc8463cc5cd4820c~mv2.png"
                    artist="Jelly Ruth"
                    song="2050"
                />
                <ReleaseCard
                    imageUrl="https://static.wixstatic.com/media/27eba2_bea1b50b08bc4d72a8d01a4134aba985~mv2.png"
                    artist="The Kicking Hills"
                    song="Truth on Earth"
                />
                <ReleaseCard
                    imageUrl="https://static.wixstatic.com/media/27eba2_122ab2fd167449e9b1baae05db3b9bc1~mv2.png"
                    artist="Road to Neptune"
                    song="Niya Rae "
                />
                <ReleaseCard
                    imageUrl="https://static.wixstatic.com/media/27eba2_0fe79ad9b7ee4372a93797731d26ede5~mv2.png"
                    artist="Truth on Time"
                    song="Harvey Austin"
                />
            </div>
        </div>
    );
};
