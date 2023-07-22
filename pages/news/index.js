function NewsArticleList({ articles }) {
  return (
    <>
      <h1>NEWS ARTICLE</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <p>
              {article.id} {article.title} {article.category}
            </p>
          </div>
        );
      })}
    </>
  );
}
export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
console.log('Pre-rendering NewArticleList')
  return {
    props: {
      articles: data,
    },
  };
}
