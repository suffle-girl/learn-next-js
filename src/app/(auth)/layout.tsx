const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>Inner layout</h2>
      {children}
    </>
  );
};

export default AuthLayout;

// Route Group Layout ()
// route groups - good for not only to organize our project in a manner that doesn't affect the URL, but also to selectively apply a layout to a certain segments while leaving others unchanged
// we basically add the layout.tsx (the component with the inner layout) to the route group folder → it affects only the parts of the app that are within this folder
