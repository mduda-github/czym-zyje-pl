import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react'
import styles from './Pill.module.css'

export interface PillProps {
    title: string;
    isActive?: boolean;
    href: string;
    className?: string;
}

const Pill: React.FunctionComponent<PillProps> = (props) => {
    const { title, isActive, href, className } = props;
    return <Link href={href} className={clsx(styles.container, className, {
        [styles.active]: isActive
    })}>
        {title}
    </Link>
}

export default Pill;