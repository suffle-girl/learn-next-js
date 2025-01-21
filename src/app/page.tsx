import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
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

// Layouts
// a page = UI that is unique to a route
// a layout = UI that is shared between multiple pages in the app - achieving a header - content - footer layout is now way easier
// how - default exporting a React component from layout.js or layout.tsx file
// every layout component should accept a children prop that will be populated with a child page during rendering
// Next provides a default layout out of the box - we don't have to create it from scratch if we don't need to
// similarly to page.tsx, layout.tsx have their own naming convention
// the root layout - located in the src/app - layout.tsx - a mandatory layout for every next.js application - gets automatically generated even if we delete it
// it basically substitutes the main html file for rendering React apps + we don't have to create separate layout component

// Nested Layouts
// layouts can of course be nested - it works in a way that the root layout gets rendered and then the layout for the component → the resulting page as a footer and a header and inside it, there is a layout for eg. products
// this allows us to create layouts that apply only to a specific areas of our application

// Route Group Layout ()
// route groups - good for not only to organize our project in a manner that doesn't affect the URL, but also to selectively apply a layout to a certain segments while leaving others unchanged
// we basically add the layout.tsx (the component with the inner layout) to the route group folder → it affects only the parts of the app that are within this folder

// Routing Metadata
// ensuring proper search engin optimization (SEO) - CRUTIAL for increasing visibility and attracting users
// Next.js introduced the Metadata API - allows us to define metadata for each page
// → the metadata ensures accurate and relevant information is displayed when our page is shared or indexed
// two ways to configure metadata in page.tsx or layout.tsx → either export a static metadata object or export a dynamic generateMetadata function - though it is not possible to export both

// Metadata rules
// both layout.tsx and page.tsx can export metadata - in layout it applies to all pages in that layout, it definet in a page, it applies only to that page
// metadata are read in order - from the root level down to the final page level
// when there's metadata in multiple places for the same route, they get combined - but page metadata will replace layout metadata if they have the same properties
// → that is how static metadata export works in next.js

// Dynamic metadata
// depends on dynamic information such as the current route parameters, external data or metadata in parent segments
// to define dynamic metadata - we define and export a dynamic generateMetadata function which returns a metadata object from a layout or a page.tsx
// common use case - for example in the productId - when having an e-commerce website, we want to have
// generateMetadatra function can be also defined as an async function and within the function body, await a fetch request

// Title metadata
// it's primary purpose - define the document title
// can be string or an object
// the title object can have a default property - used as a fallback title for child route segments which don't explicitly specify a title - aka if a child doesn't have explicitly defined title, this one will be used
// or it can have a template property - to create a dinamic titles by adding a prefix or a suffix - it applies only to a child route segments and not the segmen in which it is defined - we specify it as "%s | Codevolution" - the %s gets replaced by the title metadata specified in the child component
// or it can have an absolute property - if we want to have a title that completely ignores title.template set in the parent segments

// Navigation
// users typically rely on UI elements like links to navigate - by clicking on them, or through programmatic navigation after completing an action
// → nextr provides the Link component - <Link> is a React component that extends the html <a> element, and it's the primary way to navigate between routes in Next.js
// to use it, we need to import it from "next/link" - it works the same way as in React and due to the TS types, the href props is mandatory
// dynamic routes - we can hard code them, but it not always ideal - especially when working with big chunks of data - in such case, we can pass the productId as a props to the Link component and use string interpolation
// replace prop of the Link component - replaces the current history state intead of adding a new URL - when we click back, it takes us back to the homepage instead of back to the projects

// Active links - styling
// to determine if a link is active - Next js provides the usePathname hook
// to determine if a link is active - Next js provides the usePathname hook - this hook is only working in client components - so we have to add "use client"; to the top of the component
// we can create a navLinks array, map it, and add conditionally css classes

// Programmatical navigation
// for example placing an order redirect the user to the order confirmation
// for this, we use the useRouter hook - also works only with client components - so "use client"; at the top of the page
// router.push("/") - can take the user back to whichever specified href url in the "" - even nested or catch all routes
// router.replace() - similar use as using it in the Link component, to clear the history
// router.back() - to take the user back
// router.forward() - to navigate the user one page forward
