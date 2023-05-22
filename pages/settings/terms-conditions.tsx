import InternalPage from "@/components/templates/InternalPage/InternalPage";
import { fetcher } from "@/utils/fetcher";
import { useIntl } from "react-intl";
import useSWR from "swr";
import styles from './privacy.module.css'
import parse from "html-react-parser";


const TermsConditions: React.FunctionComponent = () => {
    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.settings.termsConditions" });
    const { data } = useSWR('/api/staticdata', fetcher)

    if (!data) {
        return <div>Loading...</div>
    }

    const content = JSON.parse(data)

    return (
        <InternalPage title={title}>
            <div className={styles.text}>
                {data ? parse(content[intl.locale]) : null}
            </div>
        </InternalPage>
    );
};

export default TermsConditions;
