import Link from 'next/link';

const ProductsList = () => {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
};

export default ProductsList;

// Navigation
// users typically rely on UI elements like links to navigate - by clicking on them, or through programmatic navigation after completing an action
// → nextr provides the Link component - <Link> is a React component that extends the html <a> element, and it's the primary way to navigate between routes in Next.js
// to use it, we need to import it from "next/link" - it works the same way as in React and due to the TS types, the href props is mandatory
// dynamic routes - we can hard code them, but it not always ideal - especially when working with big chunks of data - in such case, we can pass the productId as a props to the Link component and use string interpolation
// replace prop of the Link component - replaces the current history state intead of adding a new URL - when we click back, it takes us back to the homepage instead of back to the projects
