import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Page from "@/components/Page/Page";
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import Toggle from "@/components/Toggle/Toggle";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import { SignOutIcon } from "@/icons/SignOutIcon";
import { useIntl } from "react-intl";
import styles from './settings.module.css'

export interface SettingsProps {
    theme: string;
    handleThemeToggle: () => {}
}

const Settings: React.FunctionComponent<SettingsProps> = (props) => {
    const { theme, handleThemeToggle } = props;
    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.settings.title" });
    const language = intl.formatMessage({ id: "page.settings.language" });
    const privacy = intl.formatMessage({ id: "page.settings.privacy" });
    const termsConditions = intl.formatMessage({ id: "page.settings.termsConditions" });
    return (
        <>
            <Page title={title}>
                <div className={styles.separator} />
                <ProfileButton title="Dark Mode"><Toggle theme={theme} handleThemeToggle={handleThemeToggle} /></ProfileButton>
                <ProfileButton title={language} href="settings/change-language"><ArrowRightIcon /></ProfileButton>
                <div className={styles.separator} />
                <ProfileButton title={privacy} href="settings/privacy"><ArrowRightIcon /></ProfileButton>
                <ProfileButton title={termsConditions} href="settings/terms-conditions"><ArrowRightIcon /></ProfileButton>
            </Page>
            <NavigationBar />
        </>
    );
}

export default Settings