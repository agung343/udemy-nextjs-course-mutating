import NewsList from "@/componets/NewsList"
import { getLatestNews } from "@/lib/news"

export default function LatestPage() {
    const latestNews = getLatestNews()
    return <div>
        <h2>Latest News</h2>
        <NewsList newsList={latestNews} />
    </div>
}