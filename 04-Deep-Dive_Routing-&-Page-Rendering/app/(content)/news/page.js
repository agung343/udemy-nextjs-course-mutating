import NewsList from "@/componets/NewsList";
import { getAllNews } from "@/lib/news";

// async turn into server side fetch
export default async function NewsPage() {
    // const response = await fetch('http://localhost:8080/news')
    const news = await getAllNews(); 

    return (
        <>
            <h1>News Page</h1>
            <NewsList newsList={news} />
        </>
    );
}
