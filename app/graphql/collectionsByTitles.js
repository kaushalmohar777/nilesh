import {gql} from '@shopify/hydrogen';

export const SHOP_BY_AGE_QUERY = gql`
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
