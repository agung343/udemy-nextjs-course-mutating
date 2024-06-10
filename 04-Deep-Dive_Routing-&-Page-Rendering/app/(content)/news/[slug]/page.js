import { DUMMY_NEWS } from "@/componets/DUMMY";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsPost({ params }) {
    const newsSlug = params.slug;
    const post = DUMMY_NEWS.find((news) => news.slug === newsSlug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <article className="news-article">
                <header>
                    <Link href={`/news/${post.slug}/image`}>
                        <img src={`/images/news/${post.image}`} />
                    </Link>
                    <h1>{post.title}</h1>
                    <time dateTime={post.date}>{post.date}</time>
                </header>
                <p>{post.content}</p>
            </article>
        </>
    );
}
