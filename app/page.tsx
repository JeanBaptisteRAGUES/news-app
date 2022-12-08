import { categories } from "../constants";

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>Homepage</div>
  )
}

export default Homepage;