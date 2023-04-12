import InternalPage from "@/components/InternalPage/InternalPage";
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import { CheckIcon } from "@/icons/CheckIcon";

const ChangeLanguage: React.FunctionComponent = () => {
    return (
        <InternalPage title="Language">
            <ProfileButton title="English" isSelected><CheckIcon /></ProfileButton>
            <ProfileButton title="German"></ProfileButton>
            <ProfileButton title="Polish"></ProfileButton>
            <ProfileButton title="Spanish"></ProfileButton>
        </InternalPage>
    );
};

export default ChangeLanguage;
