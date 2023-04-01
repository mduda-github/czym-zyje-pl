import * as React from "react";
import clsx from "clsx";
import styles from "./ProfileButton.module.css";
import Link from "next/link";

export interface ProfileButtonProps {
    title: string;
    href?: string;
    isSelected?: boolean;
    children?: React.ReactNode;
}

const ProfileButton: React.FunctionComponent<ProfileButtonProps> = (props) => {
    const { title, href, isSelected, children } = props;

    return href ? (
        <Link
            href={href}
            className={clsx(styles.container, {
                [styles.selected]: isSelected,
            })}
        >
            {title}
            {children}
        </Link>
    ) : (
        <div
            className={clsx(styles.container, {
                [styles.selected]: isSelected,
            })}
        >
            {title}
            {children}
        </div>
    );
};

export default ProfileButton;
