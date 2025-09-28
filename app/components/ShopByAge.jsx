import {useShopQuery, gql, Link} from '@shopify/hydrogen';

const COLLECTION_TITLES = ['2-6 Years', '7-12 Years', '13+ Years'];

const SHOP_BY_AGE_QUERY = gql`
  query shopByAge($titles: [String!]) {
    collections(first: 10, query: $titles) {
      nodes {
        id
        title
        handle
        image {
          url
          altText
        }
      }
    }
  }
`;

export default function ShopByAge() {
  const {data} = useShopQuery({
    query: SHOP_BY_AGE_QUERY,
    variables: {
      titles: COLLECTION_TITLES.map(title => `title:${title}`),
    },
  });

  const collections = data?.collections?.nodes || [];

  return (
    <section className="py-12 px-6 bg-[#f9f9f6] text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Age</h2>
      <p className="text-gray-500 mb-6">
        Browse toys and products by age group.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.handle}`}
            className="rounded-lg p-6 transition transform hover:scale-105"
            style={{
              backgroundColor: getBgColor(index),
              color: 'white',
            }}
          >
            <img
              src={collection.image?.url}
              alt={collection.image?.altText || collection.title}
              className="h-48 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold">{collection.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Utility to get background colors
function getBgColor(index) {
  const colors = ['#F9713C', '#A6C48A', '#0A4D68'];
  return colors[index % colors.length];
}
