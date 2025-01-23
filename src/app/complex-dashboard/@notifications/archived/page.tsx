import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;

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
