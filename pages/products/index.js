function ProductList({ products }) {
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <hr/>
          </div>
        );
      })}
    </>
  );
}
export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log('Generating/Regenerating from ProductList')

  return {
    props: {
      products: data,
    },
    //revalidate in seconds
    revalidate:30
  };
}
