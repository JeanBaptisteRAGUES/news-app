import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import fetchLichess from "../lib/fetchLichess";
import NewsList from "./NewsList";

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  /* fetchLichess(['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5']); */

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage;