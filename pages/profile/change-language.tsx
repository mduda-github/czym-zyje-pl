import InternalPage from "@/components/InternalPage/InternalPage";
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import { CheckIcon } from "@/icons/CheckIcon";
import Head from "next/head";


const ChangeLanguage: React.FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>czym-zyje.pl - stay informed, stay ahead</title>
            </Head>
            <InternalPage title="Language">
                <ProfileButton title="English" isSelected><CheckIcon /></ProfileButton>
                <ProfileButton title="German"></ProfileButton>
                <ProfileButton title="Polish"></ProfileButton>
                <ProfileButton title="Spanish"></ProfileButton>
            </InternalPage>
        </>
    );
};

export default ChangeLanguage;
