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

// Dynamic Routes []
// if we have a 1000 products, creating a folder for each of them is not a viable option
// we can create a folder with the square brackets - like [productId] → dynamic segment allowing us to create dynamic routes
// normally in a working web page, probably an API would be called to fill in the page and fetch the needed data, we fed it a prop "params" with productId

// Nested Dynamic Routes
// for example when we need to route review 1 for a product 1 - eg. on address: xxx/products/1/reviews/1

// Catch-all Segments [...slug]
// we can create a folder [...slug] - slug being a universally used for urls → page.tsx within the folder eg. comp Docs - it will match any URL that contains "docs" segment in a path - for example localhost:3000/docs/feature1
// captures all URL segments and maps them to single file in our project - particularly useful for documentation - when we want different segments and SEO for optimalization, but the layout of the document stays the same
// examples - http://localhost:3000/docs/routing/catch-all-routing - displays in our case: "Viewing docs for feature routing and concept catch-all-routing"
// ideally - use the slug array to fetch the corresponding documentation for the feature ID and concept ID
// Next provides an optional catch-all route as well - if we wrap the slug folder in another pair of square brackets, it's gonna create routing for the xxx/docs url as well

// Not Found Page not-found.tsx
// be default - Next renders a default not found 404 page - but we often want to customize this page - to do this, create a file within the app folder not-found.tsx and export default a new NotFound component
// the page is tied to the file based routing mechanism of the app router
// what is we want to programatically render this page on a certain condition? - we can use the notFound function from Next.js - import notFound function from next/navigation - and if(condition is met) use this function → which will render the not-found.tsx component we prepered in the app folder
// we can also create a not-found.tsx page for different components in their respected folders

// File Colocation
// a route isn't publicly accessible until a page.js or page.tsx is added to the respected route segment
// and even when the route becomes publicly accessible, it will return only content which is returned by page.tsx + it must be a default exported react component
// colocating is safe - but it is not mandatory, the files can be kept outside the app directory within the source folder eg. having a separate components folder - perfectly valid approach

// Private Folders _
// a feature to help us effectively organize our project
// private folder indicates that is a private impementation detail and shopuld not be considered by the routing system
// the folder and all its subfolders are excluded from routing
// how - prefic the folder name with an underscore
// what are they good for 1) separating UI logic from routing logic, 2) consistently organizing internal files across a project, 3) sorting and grouping files in code editors, 4 avoiding potential naming conflicts with the future Next file conventions
// for including an underscore in URL segments - prefix folder name with "%5F"
// though these can be put outside of the app folder altogether to avoid gunking the code

// Route Groups ()
// allows to logically group our routes and project files without affecting the URL path structure
// to demonstrate - let's create an authentication logic - we need a folder for login page, register page and forget-password page - they get all scattered around the app page and it looks very unorganized → we need to organize the code based on sections or intent
// we could create a folder "auth" within the app folder which can contain all the authentication routes
// BUT - that create a new path - so we have to update the url so that it contains the auth/login part as well
// it is acceptable like the for authorization - but it would inacceptable for analytics or marketing → we can mark a foulder as a route group to exclude it fromn the url paths
// → simply wrap the folder's name in parenthesis ()
