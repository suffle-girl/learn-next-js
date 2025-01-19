const Home = () => {
  return <h1>Welcome home!</h1>;
};

export default Home;

// Routing
// URL paths that usesrs can access in the browser are defined by files and folders in my code base
// needs a folder called app and within it a page.tsx or page.js file with exported component
// layout.tsx gets created automatically
// Next automatically handles a non-existing route with its own 404 page

// Nested Routes
// Next allows us to nest folders within the App folder - that is how we can create pages on address like localhost:3000/blog/first
// by creating nested folder structure of the project, files will be automatically routed within the url
// though it works in a small project, it is not always feasible to create routes with predefined folders, especially with larger projects -> dynamic routes

// Dynamic Routes
// if we have a 1000 products, creating a folder for each of them is not a viable option
// we can create a folder with the square brackets - like [productId] → dynamic segment allowing us to create dynamic routes
// normally in a working web page, probably an API would be called to fill in the page and fetch the needed data, we fed it a prop "params" with productId

// Nested Dynamic Routes
// for example when we need to route review 1 for a product 1 - eg. on address: xxx/products/1/reviews/1

// Catch-all Segments
// we can create a folder [...slug] - slug being a universally used for urls → page.tsx within the folder eg. comp Docs - it will match any URL that contains "docs" segment in a path - for example localhost:3000/docs/feature1
// captures all URL segments and maps them to single file in our project - particularly useful for documentation - when we want different segments and SEO for optimalization, but the layout of the document stays the same
// examples - http://localhost:3000/docs/routing/catch-all-routing - displays in our case: "Viewing docs for feature routing and concept catch-all-routing"
// ideally - use the slug array to fetch the corresponding documentation for the feature ID and concept ID
// Next provides an optional catch-all route as well - if we wrap the slug folder in another pair of square brackets, it's gonna create routing for the xxx/docs url as well
