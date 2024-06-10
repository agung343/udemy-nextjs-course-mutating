import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/componets/DUMMY";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const post = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop">
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${post.image}`} alt={post.title} />
          </div>
        </dialog>
      </div>
    </>
  );
}
