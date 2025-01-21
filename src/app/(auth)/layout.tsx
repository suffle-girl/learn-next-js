'use client'; // if we get an error message that the usePathname is only for client components - we use this
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
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
