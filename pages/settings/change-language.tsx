import InternalPage from "@/components/templates/InternalPage/InternalPage";
import ProfileButton from "@/components/atoms/ProfileButton/ProfileButton";
import { CheckIcon } from "@/icons/CheckIcon";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const ChangeLanguage: React.FunctionComponent = () => {
    const { locale, locales } = useRouter();
    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.language.title" });
    return (
        <InternalPage title={title}>
            {locales?.map(loc => {
                const isSelected = loc === locale
                return <ProfileButton
                    key={loc}
                    title={intl.formatMessage({ id: `page.language.${loc}` })}
                    isSelected={isSelected}
                    href="/"
                    locale={loc}
                >
                    {isSelected ? <CheckIcon /> : null}
                </ProfileButton>
            })}
        </InternalPage>
    );
};

export default ChangeLanguage;
