import Button from "@/components/atoms/Button/Button";
import Input from "@/components/molecules/Input/Input";
import Page from "@/components/templates/Page/Page";
import { EmailIcon } from "@/icons/EmailIcon";
import { PasswordIcon } from "@/icons/PasswordIcon";
import { ProfileIcon } from "@/icons/ProfileIcon";
import styles from './settings.module.css'

const SignUp: React.FunctionComponent = () => {
    return (
        <Page title="Welcome to czym-zyje 👋" subtitle="Hello, I guess you are new around here. You can start using the application after sign up.">
            {/* <Input type="text" placeholder="First name" Icon={ProfileIcon}></Input>
            <Input type="text" placeholder="Last name" Icon={ProfileIcon}></Input>
            <div className={styles.separator} />
            <Input type="email" placeholder="Email" Icon={EmailIcon}></Input>
            <div className={styles.separator} />
            <Input type="password" placeholder="Password" Icon={PasswordIcon}></Input>
            <Input type="password" placeholder="Repeat password" Icon={PasswordIcon}></Input> */}
            <div className={styles.separator} />
            <Button title="Sign In" ></Button>
        </Page>
    );
}

export default SignUp