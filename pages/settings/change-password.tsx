import Button from "@/components/atoms/Button/Button";
import Input from "@/components/molecules/Input/Input";
import InternalPage from "@/components/templates/InternalPage/InternalPage";
import { PasswordIcon } from "@/icons/PasswordIcon";

const ChangePassword: React.FunctionComponent = () => {
    return (
        <InternalPage title='Change Password'>
            {/* <Input type="password" placeholder="Current Password" Icon={PasswordIcon} />
            <Input type="password" placeholder="New Password" Icon={PasswordIcon} />
            <Input type="password" placeholder="Repeat New Password" Icon={PasswordIcon} /> */}
            <Button title="Change Password" />
        </InternalPage>
    );
};

export default ChangePassword;
