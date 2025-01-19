const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        {' '}
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> Viewing docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
};

export default Docs;

// Catch-all Segments
// we can create a folder [...slug] - slug being a universally used for urls → page.tsx within the folder eg. comp Docs - it will match any URL that contains "docs" segment in a path - for example localhost:3000/docs/feature1
// captures all URL segments and maps them to single file in our project - particularly useful for documentation - when we want different segments and SEO for optimalization, but the layout of the document stays the same
// examples - http://localhost:3000/docs/routing/catch-all-routing - displays in our case: "Viewing docs for feature routing and concept catch-all-routing"
// ideally - use the slug array to fetch the corresponding documentation for the feature ID and concept ID
// Next provides an optional catch-all route as well - if we wrap the slug folder in another pair of square brackets, it's gonna create routing for the xxx/docs url as well
