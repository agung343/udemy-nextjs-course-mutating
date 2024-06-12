//update for branch 05
import Link from "next/link";
import NewsList from "@/componets/NewsList";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

const FilteredNews = async ({year, month}) => {
  let news;
  
  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

   // defined news
   let content = <p>No News found for the selected period.</p>;
   if (news && news.length > 0) {
     content = <NewsList newsList={news} />;
   }

   return content;
}


export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  // const news = getNewsForYear(filter)
  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  const availableYears = await getAvailableNewsYears();
  let links = availableYears

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    links = [];
  }

  //throwing related error
  if (
    (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }

 

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading News...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
