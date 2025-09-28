import {useShopQuery, Link} from '@shopify/hydrogen';
import {SHOP_BY_AGE_QUERY} from '../lib/queries/collectionsByTitles';

const COLLECTION_TITLES = ['2-6 Years', '7-12 Years', '13+ Years'];

export default function ShopByAge() {
  const {data} = useShopQuery({
    query: SHOP_BY_AGE_QUERY,
    variables: {
      titles: COLLECTION_TITLES.map(title => `title:${title}`),
    },
  });

  const collections = data?.collections?.nodes || [];

  return (
    <section className="p-8 bg-[#f9f9f6] text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Age</h2>
      <p className="text-gray-500 mb-6">
        Har age group ke liye perfect products yahan hai!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.handle}`}
            className="rounded-lg p-6 transition transform hover:scale-105 text-white"
            style={{backgroundColor: getBgColor(index)}}
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

// 🔧 Background color helper
function getBgColor(index) {
  const colors = ['#F9713C', '#A6C48A', '#0A4D68']; // orange, green, blue
  return colors[index % colors.length];
}
