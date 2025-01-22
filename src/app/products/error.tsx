'use client';

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;

// error.tsx - without it, we get some error in the dev mode, but when trying to run it in production mode, one error in a deeply nested component results in crush of the whole application
// better approach - handle the error gracefully affecting only the concerned segment while keeping the rest of the application functional
// add error.tsx simply to the folder and export default the component ErrorBoundary + it needs to be a client component again
// ideally the error page would have a UI matching the application theme
// error.tsx does:
// automatically wrap a route segment and its nested children in a React Error Boundary
// create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
// isolate errors to affected segments while keeping the rest of the application functional
// add functionality to attempt to revover from error withou a ful page reload

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
