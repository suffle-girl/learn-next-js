'use client'; // if we get an error message that the usePathname is only for client components - we use this
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './styles.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'} // use of tailwind css classes - since we deleted the global style css at the begining, this won't be working, unless we reinstate it or we create a component css with tailwind imports :))
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;

// Route Group Layout ()
// route groups - good for not only to organize our project in a manner that doesn't affect the URL, but also to selectively apply a layout to a certain segments while leaving others unchanged
// we basically add the layout.tsx (the component with the inner layout) to the route group folder → it affects only the parts of the app that are within this folder

// Active links - styling
// to determine if a link is active - Next js provides the usePathname hook - this hook is only working in client components - so we have to add "use client"; to the top of the component
// we can create a navLinks array, map it, and add conditionally css classes

// Templates
// are very similar to layouts - they wrap each child layout or page
// however - when user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not perserved, and effects are re-synchronized
// can be defined by exporting a default react component from a template.js or template.tsx file
// similar to layouts, templates should also acxept a children prop which will render the nested segments in the route
// in most cases, the layouts will be enough - but there are cases when we need to rerender the component after navigating to a different child - for example, when we use enter / exit animations for pages or when running a side effect using the useEffect hook when the route changes - in such cases, we can use templates as a replacement to layouts files
// side note - it is possible to include both, template.tsx and layout.tsx files - in such scenario, the layout gets rendered first and the children is replaced by the component exported from the template file
// templates are not a common requirement and we should primarily rely on layouts for UI - but is important to know about this
// in our case, we simply renamed the layout.tsx to template.tsx - other than that, they have the same rules and the same structure
