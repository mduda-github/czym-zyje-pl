import styles from './Article.module.css'
import { useRouter } from "next/router";
import { LeftArrowIcon } from "@/icons/LeftArrowIcon";
import { BookmarkIcon } from "@/icons/BookmarkIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import Pill from "@/components/atoms/Pill/Pill";
import Link from 'next/link';
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher';
import parse from "html-react-parser";
import React from 'react';
import clsx from 'clsx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { TeaserDTO } from '../api/bookmarks';

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/teasers');
    const teasers = await res.json();
    const paths = teasers.map((teaser: TeaserDTO) => ({
        params: { slug: teaser.slug },
    }));
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (props) => {
    const { params } = props;
    const slugArr = params?.slug?.toString().split("-") ?? [];
    const id = slugArr[slugArr?.length - 1]
    const response = await fetch(`http://localhost:3000/api/teaser/${id}`)

    if (!response) {
        return { props: {} }
    }

    const teaser = await response.json();

    return {
        props: {
            data: teaser
        }
    }
};

export interface ArticleProps {
    data: TeaserDTO;
}

const Article: React.FunctionComponent<ArticleProps> = (props) => {
    const { data } = props;
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    const onSaveBookmark = (id: number): void => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedBookmarks = localStorage.getItem('bookmarks')
            const newBookmarks = storedBookmarks?.length ? `${storedBookmarks},${id}` : id;
            localStorage.setItem('bookmarks', newBookmarks.toString())
            setIsBookmarked(true);
            console.log('isBookmarked', isBookmarked)
        }
    }

    return (
        data ?
            <>
                <div className={styles.header} style={{ backgroundImage: `url(${data.imageUrl})` }}>
                    <div className={styles.nav}>
                        <div className={styles.row}>
                            <Link href="/"><LeftArrowIcon /></Link>
                            <BookmarkIcon className={clsx({
                                [styles.bookmarked]: isBookmarked,
                            })} onClick={() => onSaveBookmark(data.id)} />
                        </div>
                        <ShareIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                        <Pill className={styles.pill} href={`/category/${data.category.slug}}`} isActive={true} title={data.category.name} />
                        <h1 className={styles.title}>{data.title}</h1>
                    </div>
                </div>
                <div className={styles.content}>
                    {parse(data.content)}
                </div>
            </> : <div>Loading...</div>
    );
};

export default Article;
