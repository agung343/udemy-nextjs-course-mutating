import { DUMMY_NEWS } from "@/componets/DUMMY";
import NewsList from "@/componets/NewsList";

export default function NewsPage() {
    return (<>
        <h1>News Page</h1>
        <NewsList newsList={DUMMY_NEWS} />
    </>)
}