import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

// Dynamic metadata
// depends on dynamic information such as the current route parameters, external data or metadata in parent segments
// to define dynamic metadata - we define and export a dynamic generateMetadata function which returns a metadata object from a layout or a page.tsx
// common use case - for example in the productId - when having an e-commerce website, we want to have
// generateMetadatra function can be also defined as an async function and within the function body, await a fetch request

const ProductDetails = ({ params }: Props) => {
  return <h1>Details about product {params.productId}</h1>;
};

export default ProductDetails;

// Dynamic Routes
// if we have a 1000 products, creating a folder for each of them is not a viable option
// we can create a folder with the square brackets - like [productId] → dynamic segment allowing us to create dynamic routes
// normally in a working web page, probably an API would be called to fill in the page and fetch the needed data, we fed it a prop "params" with productId
