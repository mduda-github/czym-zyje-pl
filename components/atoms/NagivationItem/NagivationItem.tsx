import * as React from 'react'
import clsx from 'clsx';
import styles from './NavigationItem.module.css'
import Link from 'next/link';


export interface NavigationItemProps {
    href: string;
    Icon: React.ElementType
    isActive?: boolean;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = (props) => {
    const { href, Icon, isActive } = props;

    return <Link href={href} className={styles.container}>
        <Icon className={clsx({
            [styles.active]: isActive
        })} />
    </Link>
}

export default NavigationItem;