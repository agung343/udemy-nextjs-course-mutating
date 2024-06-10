// intercepting route
'use client'
import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/componets/DUMMY";

export default function Intercepting({ params }) {
  const router = useRouter();
  const newsItemSlug = params.slug;

  const post = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${post.image}`} alt={post.title} />
        </div>
      </dialog>
    </>
  );
}
