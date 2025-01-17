const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Details about product {params.productId}</h1>;
};

export default ProductDetails;

// Dynamic Routes
// if we have a 1000 products, creating a folder for each of them is not a viable option
// we can create a folder with the square brackets - like [productId] → dynamic segment allowing us to create dynamic routes
// normally in a working web page, probably an API would be called to fill in the page and fetch the needed data, we fed it a prop "params" with productId
