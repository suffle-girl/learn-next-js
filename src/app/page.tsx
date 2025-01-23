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

// Templates
// are very similar to layouts - they wrap each child layout or page
// however - when user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not perserved, and effects are re-synchronized
// can be defined by exporting a default react component from a template.js or template.tsx file
// similar to layouts, templates should also acxept a children prop which will render the nested segments in the route
// in most cases, the layouts will be enough - but there are cases when we need to rerender the component after navigating to a different child - for example, when we use enter / exit animations for pages or when running a side effect using the useEffect hook when the route changes - in such cases, we can use templates as a replacement to layouts files
// side note - it is possible to include both, template.tsx and layout.tsx files - in such scenario, the layout gets rendered first and the children is replaced by the component exported from the template file
// templates are not a common requirement and we should primarily rely on layouts for UI - but is important to know about this
// in our case, we simply renamed the layout.tsx to template.tsx - other than that, they have the same rules and the same structure

// Special files:
// so far, we know - page.tsx, layout.tsx, template.tsx and not-found.tsx

// loading.tsx - allows us to create loading states that are displayed to users while a specific route segment's content is loading
// the loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content
// benefits:
// 1. you can display the loading state as soon as user navigates to a new route - the immediate feedback reassures users that their action has been acknowledged, reduces perceived loading times, and makes the application feel more responsive
// 2. Next allows the creation of shared layouts that remain interaktive while new route segments are loading - users can continue interacting with certain parts of the app, such as navigation menu or sidebar, even when the main content is still being fetched

// error.tsx - without it, we get some error in the dev mode, but when trying to run it in production mode, one error in a deeply nested component results in crush of the whole application
// better approach - handle the error gracefully affecting only the concerned segment while keeping the rest of the application functional
// add error.tsx simply to the folder and export default the component ErrorBoundary + it needs to be a client component again
// ideally the error page would have a UI matching the application theme
// error.tsx does:
// automatically wrap a route segment and its nested children in a React Error Boundary
// create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
// isolate errors to affected segments while keeping the rest of the application functional
// add functionality to attempt to revover from error withou a ful page reload

// Recovering from errors
// some errors are not as serious and could be fixed by simply trying again
// the ErrorBoundary comes with a handy prop - reser - it recieves a reset function which we can destructure along with the error object
// in the jsx, we can add a button that triggers the reset function on click → offering a way to retry rendering the component in the page
// to ensure that we can recover on client side we need to convert our page.tsx to a client component

// Handling errors in nested routes
// errors bubble up to the closest parent error boundary - meaning when the error gets loaded, it will change the content up to the nearest parent error boundary
// an error.tsx file will cater to errors for all its nested child segments
// by positioning error.tsx files at different levels in the nested folders of a route, we can achieve a more granular level of error handling → the placement of the error.tsx file plays a crucial role in determining the scope of error handling allowing for more precise control over which parts of the UI are affected when error occurs

// Handling errors within layouts
// error.tsx will handle errors for all its nested child elements
// the error boundary does not catch errors thrown here because it's nested inside the layouts component
// if we add the error handler to the layout in the parent folder, there is no error boundary to catch it → our app is now in a broken state
// important to remember ! - the error boundary will not handle errors thrown in a layout.tsx component within the same segment
// to navigate around this, we need to place the error.tsx in the layout's parent segment

// Advanced routing concepts in Next.js:

// Parallel routes - slots @folder
// an advanced routing mechanism that allows for the simultaneous rendering of multiple pages with the same layout
// for example building a dashboard - need to display several analytics at once - user analytics, revenue metrics, notifications
// traditionally, we would build a separate component for each of these metrics and add them to the layout.tsx within an app/dashboard folder - while that is one of the options, using parallel routing can achieve the same outcome with additional benefits
// parallel routes are defined using a feature known as slots
// slots help to structure our content ina modular fashion
// to define a slot, we use the "@folder" naming convention
// each slot is then passed as a prop to its corresponding layout.tsx file
// in our code, we have created the slots as folders with their page.tsx files, imported a simple Card component which we created in the src/components folder, and added them similarly to children into the layout.tsx file - as prop of type React.ReactNode and then added the props as children to respective divs
// !! the slots are available as props and we don't have to import them
// slots are not route segments and do not affect the URL structure
// technically the children in such component is also a slot - so technically, we have four slots in our example
// benefits:
// their ability to split a single layout into various slots, making the code more manageable - that's especially useful when there are more teams working on various sections of the page - but that is true with the traditional component composition as well
// the true benefit lays in the slots' capacity for independent route handling and sub-navigation
// independent route handling - each slot of our layout, such as user analytics or revenue metrics, can have its own loading and error states
// this granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors - eg. if there is an error in use analytics, we can only display it in the card of the user analytics, the same with loading data etc. → it improves user experience, but also simplifies debugging and maintanance
// sub-navigation in routes - each slot of our dashboard can essentially function as a mini-application, complete with its own navigation and state management
// this is especially useful in a complex application such as our dashboard where different sections serve distinct purposes
// → each of the mini-app works as a standalone entity - user can interact with them differently, navigate through pages separately and so on (like widgets on the Jira dashboard)

// Subnavigation in routes - Unmatched routes
// a crutial feature of parallel routing which handles unmatched routes
// by default the content rendered within a slot matches the current url - we have 4 slots in our folder including the children - and when we navigate to complex-dashboard/notifications/archived, only the content of notifications card will change → user analytics and revenue components become unmatched
// 2 ways of how the navigation occures - and it behaves differently based in it:
// navigation from the UI - in this case, Next retains the previously active state of a slot regardless of changes in the URL - that is why the content of the other cards remains unchanged
// page reload - Next.js immediately searches for default.tsx file within each unmatched slot; the presence of this file is critical, as it provides the default content that Next.js will render in the user interface
// if the default.tsx fiel is missing in any of the unmatched slots for the current route, Next.js will render a 404 error
// default.tsx - serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL
// it's completely up to us to define the UI - we can either mirror the content found in page.tsx or craft an entirely custom view
// we have to define it only for the unmatched routes - eg. only for children, user analytics and revenue - the notifications page does have a matching route so it is not necessary to create a default page for it
// this approach ensures that we don't accidentally render a route that shouldn't be parallel rendered

// Conditional routes
// for example, based on the authentication process, we can either reload a working dashboard or a login page for those who didn't authenticate
// this enables fully separated code on the same url
