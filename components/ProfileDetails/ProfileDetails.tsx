import * as React from 'react'
import styles from './ProfileDetails.module.css'

export interface ProfileDetailsProps {
    userName: string;
    emailAdress: string;
}

const ProfileDetails: React.FunctionComponent<ProfileDetailsProps> = (props) => {
    const { userName, emailAdress } = props;

    const firstLetter = userName.charAt(0);

    return <div className={styles.container}>
        <div className={styles.avatar}>{firstLetter}</div>
        <div className={styles.text}>
            <p className={styles.name}>{userName}</p>
            <p className={styles.emailAdress}>{emailAdress}</p>
        </div>
    </div>
}

export default ProfileDetails;