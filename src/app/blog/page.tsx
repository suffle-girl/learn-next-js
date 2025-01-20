import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
};

// Title metadata
// it's primary purpose - define the document title
// can be string or an object
// the title object can have a default property - used as a fallback title for child route segments which don't explicitly specify a title - aka if a child doesn't have explicitly defined title, this one will be used
// or it can have a template property - to create a dinamic titles by adding a prefix or a suffix - it applies only to a child route segments and not the segmen in which it is defined - we specify it as "%s | Codevolution" - the %s gets replaced by the title metadata specified in the child component
// or it can have an absolute property - if we want to have a title that completely ignores title.template set in the parent segments

const Blog = () => {
  return <h1>My blog</h1>;
};

export default Blog;
