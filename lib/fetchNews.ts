import { gql } from "graphql-request";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort: "published_desc"
                keywords: $keywords
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    // Fetch function with Next.js 13 caching...

    // Sort function by images vs not images present

    // Return result
};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=3825df368adca1562b2d3a1f85e210b1&sources=business,sports

/* type Query {
    myQuery(
        access_key: String
        countries: String
        limit: String
        offset: String
        sort: String
    ): Root @rest(endpoint: "http://api.mediastack.com/v1/news")
} */

/* type Query {
    myQuery(access_key: String): Root
        @rest(endpoint: "http://api.mediastack.com/v1/news")
} */

/* query MyQuery {
    myQuery(access_key: "3825df368adca1562b2d3a1f85e210b1") {
        data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
        }
        pagination {
        count
        limit
        offset
        total
        }
    }
} */