import styles from './Article.module.css'
import { useRouter } from "next/router";
import { LeftArrowIcon } from "@/icons/LeftArrowIcon";
import { BookmarkIcon } from "@/icons/BookmarkIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import Pill from "@/components/Pill/Pill";
import Link from 'next/link';

const Article: React.FunctionComponent = () => {
    const { query } = useRouter();
    const { slug } = query;
    return (
        <>
            <div className={styles.header} style={{ backgroundImage: `url(https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4HdV45VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iHHUCLFhzSXlXJFN4D2xNf0p2HS8OJEpgQyAIfwt3HXQYdFUrSDw)` }}>
                <div className={styles.nav}>
                    <div className={styles.row}>
                        <Link href="/"><LeftArrowIcon /></Link>
                        <BookmarkIcon />
                    </div>
                    <ShareIcon className={styles.icon} />
                </div>
                <div className={styles.textWrapper}>
                    <Pill className={styles.pill} href={`category/gwiazdy`} isActive={true} title="Gwiazdy" />
                    <h1 className={styles.title}>&quot;Uwaga&quot; TVN ZMIENIŁA materiał o Sebastianie Fabijańskim! Wszystko przez interwencję Maffashion</h1>
                </div>
            </div>
            <div className={styles.content}>
                <p>Wygląda na to, że redakcja &quot;Uwagi&quot; postanowiła zareagować na oburzenie Maffashion materiałem poświęconym Sebastianowi Fabijańskiemu. Zmieniono fragment, w którym widzowie mogli pierwotnie usłyszeć komentarz na temat związku pary.</p>
                <p>W ubiegłym tygodniu w&nbsp;<strong>&quot;Uwadze&quot; TVN</strong> wyemitowano materiał poświęcony <strong><a href="https://www.pudelek.pl/tag/sebastian+fabija%C5%84ski/" rel="noopener noreferrer" target="_blank">Sebastianowi Fabijańskiemu. </a>&quot;</strong>Kulisy sławy&quot; aktora, w&nbsp;których ten miał pokazać światu swoje <strong>&quot;prawdziwe oblicze&quot;</strong>, wywołały w&nbsp;mediach spore zamieszanie. Duża w&nbsp;tym zasługa <strong>Maffashion</strong> oraz jej zdecydowanej <strong>reakcji na sposób, w&nbsp;jaki została przedstawiona w&nbsp;materiale.</strong> Widzowie programu mogli na przykład usłyszeć, że za sprawą związku z&nbsp;Kuczyńską Seba z&nbsp;dnia na dzień znalazł się w&nbsp;<strong>&quot;centrum internetowego show biznesu, którego wcześniej unikał jak ognia&quot;.</strong></p>
                <p>Niedługo po emisji materiału <strong><a href="https://www.pudelek.pl/tag/maffashion/" rel="noopener noreferrer" target="_blank">Maffashion</a></strong> opublikowała w&nbsp;sieci oświadczenie, w&nbsp;którym nazwała dotyczący jej wątek<strong> &quot;nierzetelnym i&nbsp;kłamliwym&quot;, </strong>zapowiadając podjęcie kroków prawnych. Celebrytka domagała się także <strong>przeprosin oraz sprostowania.</strong></p>
                <h2>&quot;Uwaga&quot; TVN zmieniła materiał o Sebastianie Fabijańskim. Maffashion dopięła swego?</h2>
                <p>Wszystko wskazuje na to, że redakcja programu TVN postanowiła<strong> zareagować na publiczne oburzenie Maffashion</strong> fragmentem odcinka poświęconego Fabijańskiemu. Jakiś czas temu materiał o&nbsp;aktorze/raperze/malarzu <strong>zniknął z&nbsp;sieci. </strong>Ponownie pojawił się zaś na stronie programu w&nbsp;nieco odświeżonym wydaniu. Okazuje się, że TVN postanowił <strong>zmienić fragment poświęcony związkowi Seby z&nbsp;Maff,</strong> który znalazł się w&nbsp;pierwotnej wersji &quot;Kulis sławy&quot;.</p>
                <p>W miejscu, gdzie wcześniej można było usłyszeć wzmiankę o&nbsp;tym, jak media prześcigały się w&nbsp;relacjonowaniu wspólnego życia influencerki i&nbsp;aktora oraz o&nbsp;hejcie, który dotknął Fabijańskiego po ich rozstaniu, <strong>obecnie brakuje komentarza lektora.</strong> We wspomnianym fragmencie wciąż można natomiast zobaczyć <strong>szereg zdjęć pary oraz nagłówków artykułów poświęconych ich relacji</strong> -&nbsp;a&nbsp;wszystko to opatrzone jedynie <strong>podkładem muzycznym.</strong></p>
                <h2>Tak w &quot;Uwadze&quot; przedstawiono związek Fabijańskiego i Maffashion</h2>
                <p>Przypomnijmy, wątek związku Fabijańskiego i&nbsp;Kuczyńskiej poruszono już w&nbsp;pierwszych minutach &quot;Kulis sławy&quot;. Na początku odcinka wspomniano o&nbsp;udziale Sebastiana w&nbsp;Fame MMA i&nbsp;przy okazji zaznaczono, że <strong>aktor traktuje swoją walkę dość symbolicznie. </strong>Jak mogli wcześniej usłyszeć widzowie, występ w&nbsp;oktagonie miał być dla Fabijańskiego zakończeniem &quot;trudnego czteroletniego etapu&quot;. Następnie stwierdzono, że przez związek z&nbsp;Maff aktor znalazł się w&nbsp;samym centrum zainteresowania, czego wcześniej starał się unikać.</p>
                <p><strong><em>(...) Etapu, w&nbsp;którym przez związek ze znaną influencerką Julią Kuczyńską, zwaną Maffashion, znalazł się z&nbsp;dnia na dzień w&nbsp;centrum internetowego show biznesu,</em></strong><em> którego wcześniej unikał jak ognia. Media społecznościowe prześcigały się w&nbsp;relacjonowaniu ich pierwszej ranki czy zaręczyn. Pisano o&nbsp;kupnie domu, narodzinach syna Bastka</em> -&nbsp;padło w&nbsp;materiale &quot;Uwagi&quot;.</p>
                <p>W materiale nie zabrakło także wzmianki o&nbsp;rozstaniu Fabijańskiego i&nbsp;Maffashion. Widzowie mogli usłyszeć, że relacja pary zakończyła się w&nbsp;cieniu skandalu, a&nbsp;byli partnerzy po rozstaniu rozpoczęli publiczne przepychanki. Stwierdzono również, że po rozpadzie związku <strong>Seba stał się obiektem hejtu. </strong></p>
                <p><em>Po trzech latach w&nbsp;atmosferze skandalu rozstał się z&nbsp;influencerką. Julia Kuczyńska zaczęła komentować ich rozstanie, on nie pozostawał jej dłużny. </em><strong><em>Tak stał się negatywnym bohaterem plotkarskich portali i&nbsp;obiektem hejtu</em></strong> -&nbsp;kontynuowano.</p>
                <p>Pudelek skontaktował się z&nbsp;Maffashion oraz Sebastianem Fabijańskim w&nbsp;sprawie materiału &quot;Uwagi&quot;. Do momentu publikacji artykułu nie otrzymaliśmy jednak odpowiedzi.</p>
                <img width="1333" height="2000" srcset="https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Ef1o5VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTyJWfVN2T31XJFR-XGxNfksiHSxTcE9gTidVKAklTS8eeVF_SDw 420w,https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4De1o5VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTyJWfVN2T31XJFR-XGxNfksiHSxTcE9gTidVKAklTS8eeVF_SDw 360w,https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Gf145VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTyJWfVN2T31XJFR-XGxNfksiHSxTcE9gTidVKAklTS8eeVF_SDw 624w" src="https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Gf145VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTyJWfVN2T31XJFR-XGxNfksiHSxTcE9gTidVKAklTS8eeVF_SDw" alt="&quot;Uwaga&quot; TVN ZMIENIŁA materiał o Sebastianie Fabijańskim! Wszystko przez interwencję Maffashion" title="&quot;Uwaga&quot; TVN ZMIENIŁA materiał o Sebastianie Fabijańskim! Wszystko przez interwencję Maffashion" />
                <img width="1333" height="2000" srcset="https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Ef1o5VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTHkIdFtyQC5XcQF6WWxNLxh0HSxTJEBgSCUCfV0kSyxKd1R0SDw 420w,https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4De1o5VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTHkIdFtyQC5XcQF6WWxNLxh0HSxTJEBgSCUCfV0kSyxKd1R0SDw 360w,https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Gf145VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTHkIdFtyQC5XcQF6WWxNLxh0HSxTJEBgSCUCfV0kSyxKd1R0SDw 624w" src="https://v.wpimg.pl/MjAyMzA0YgsgGztJbktvHmNDbxMoEmFINFt3WG4Gf145VisTLVU_DzEWYx0zRT0LNgljCi0fLBooVjtLblQkGTEVLANuVSAIJB1iTHkIdFtyQC5XcQF6WWxNLxh0HSxTJEBgSCUCfV0kSyxKd1R0SDw" alt="&quot;Uwaga&quot; TVN ZMIENIŁA materiał o Sebastianie Fabijańskim! Wszystko przez interwencję Maffashion" title="&quot;Uwaga&quot; TVN ZMIENIŁA materiał o Sebastianie Fabijańskim! Wszystko przez interwencję Maffashion" />
            </div>
        </>
    );
};

export default Article;
