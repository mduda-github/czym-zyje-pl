import * as React from "react";
import clsx from "clsx";
import styles from "./ProfileButton.module.css";
import Link from "next/link";

export interface ProfileButtonProps {
    title: string;
    href?: string;
    isSelected?: boolean;
    locale?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ProfileButton: React.FunctionComponent<ProfileButtonProps> = (props) => {
    const { title, href, isSelected, locale, children, className, onClick } = props;

    return href ? (
        <Link
            href={href}
            className={clsx(styles.container, {
                [styles.selected]: isSelected,
            })}
            locale={locale}
        >
            {title}
            {children}
        </Link>
    ) : (
        <div
            className={clsx(styles.container, {
                [styles.selected]: isSelected,
                [styles.centered]: className === 'centered',
            })}
            onClick={onClick}
        >
            {title}
            {children}
        </div>
    );
};

export default ProfileButton;
