import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react'
import { FormattedMessage } from 'react-intl';
import styles from './Section.module.css'

export interface SectionProps {
    title: string;
    link: string;
    children?: any;
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
    const { title, link, children } = props;
    return <>
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <Link className={styles.link} href={link}><FormattedMessage id="page.index.seeAll" /></Link>
        </div>
        {children}
    </>
}

export default Section;