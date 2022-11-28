import { gql } from '@apollo/client';

export interface ICreativeSpacesData {
  page: {
    landingPage: {
      creativespaces: {
        link?: string;
        title?: string;
        altText?: string;
        description?: string;
      }[];
    };
  };
}

const GET_CREATIVE_SPACES = gql`
  query getCreativeSpaces {
    page(id: "https://dev-spitzer-arch.pantheonsite.io/landing-page/", idType: URI) {
      landingPage {
        creativespaces {
          link
          title
          altText
          description
        }
      }
    }
  }
`;

export default GET_CREATIVE_SPACES;
