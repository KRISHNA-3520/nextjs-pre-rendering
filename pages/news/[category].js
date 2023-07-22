function ArticleByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing Article - <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <p>
              {article.id} {article.titile}
            </p>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default ArticleByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Krishna"]);

  console.log(query);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`)
  return {
    props: {
      articles: data,
      category,
    },
  };
}
