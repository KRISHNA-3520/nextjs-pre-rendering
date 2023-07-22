import { useRouter } from "next/router";
function Products({ products }) {
    const router=useRouter()

    if(router.isFallback){
        return(<h>Loading...</h>)
    }

  return (
    <>
      <h1>{products.title}</h1>
      <h1>{products.price}</h1>
      <h1>{products.description}</h1>
    </>
  );
}

export default Products;

export async function getStaticPaths(){
    return {
        paths:[{
            params:{productId:"1"}
        }],
        fallback:true
    }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
