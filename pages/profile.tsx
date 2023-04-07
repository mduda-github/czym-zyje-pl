import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Page from "@/components/Page/Page";
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import SmallTeaser from "@/components/SmallTeaser/SmallTeaser";
import Toggle from "@/components/Toggle/Toggle";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import { SignOutIcon } from "@/icons/SignOutIcon";
import { teasers } from "@/pages/mocks/teasers";
import Head from "next/head";
import styles from './profile.module.css'

const Profile: React.FunctionComponent = () => {
    return (
        <>
            <Page title="Profile">
                <ProfileDetails userName="Eren Turkmen" emailAdress="ertuken@gmail.com" />
                <ProfileButton title="Dark Mode"><Toggle /></ProfileButton>
                <ProfileButton title="Language" href="profile/change-language"><ArrowRightIcon /></ProfileButton>
                <ProfileButton title="Change Password" href="profile/change-password"><ArrowRightIcon /></ProfileButton>
                <div className={styles.separator} />
                <ProfileButton title="Privacy" href="profile/privacy"><ArrowRightIcon /></ProfileButton>
                <ProfileButton title="Terms & Conditions" href="profile/terms-conditions"><ArrowRightIcon /></ProfileButton>
                <div className={styles.separator} />
                <ProfileButton title="Sign Out"><SignOutIcon /></ProfileButton>
            </Page>
            <NavigationBar />
        </>
    );
}

export default Profile