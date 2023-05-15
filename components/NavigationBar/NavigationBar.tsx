import * as React from 'react'
import { BookmarkIcon } from '@/icons/BookmarkIcon';
import { CategoriesIcon } from '@/icons/CategoriesIcon';
import { HomeIcon } from '@/icons/HomeIcon';
import { ProfileIcon } from '@/icons/ProfileIcon';
import NavigationItem from '../NagivationItem/NagivationItem';
import styles from './NavigationBar.module.css'
import { useRouter } from 'next/router';


const NavigationBar: React.FunctionComponent = () => {
    const { pathname } = useRouter();
    return <div className={styles.container}>
        <NavigationItem href="/" Icon={HomeIcon} isActive={pathname === "/"} />
        <NavigationItem href="/categories" Icon={CategoriesIcon} isActive={pathname === "/categories"} />
        <NavigationItem href="/bookmarks" Icon={BookmarkIcon} isActive={pathname === "/bookmarks"} />
        <NavigationItem href="/settings" Icon={ProfileIcon} isActive={pathname === "/settings"} />
    </div>
}

export default NavigationBar;