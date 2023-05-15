import { SearchIcon } from '@/icons/SearchIcon';
import { useRouter } from 'next/router';
import * as React from 'react'
import { useIntl } from 'react-intl';
import Input from '../Input/Input';

const SearchBar: React.FunctionComponent = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = React.useState('');

    const intl = useIntl();
    const search = intl.formatMessage({ id: "page.index.search" });

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`search?q=${encodedSearchQuery}`)
    }

    return <form onSubmit={onSubmit}>
        <Input type='search' placeholder={search} Icon={SearchIcon} value={searchQuery} onChange={setSearchQuery} />
    </form>
}

export default SearchBar;