import { gql } from '@apollo/client';
import { GraphQLInterfaceType } from 'graphql';

export interface ICreativeSpacesData {
  page: {
    landingPage: {
      carousel: {
        id?: number;
      }[];
      creativespaces: {
        link?: string;
        title?: string;
        altText?: string;
        description?: string;
      }[];
      testimonials: {
        faculty?: { id: number }[];
        students?: { id: number }[];
      };
    };
  };
  events: {
    edges: {
      node: {
        id: number;
        title: string;
        date: Date;
      };
    }[];
  };
}
const GET_CREATIVE_SPACES = gql`
  query getCreativeSpaces {
    page(id: "https://dev-spitzer-arch.pantheonsite.io/landing-page/", idType: URI) {
      landingPage {
        carousel {
          id
        }
        creativespaces {
          id
        }
        testimonials {
          faculty {
            id
          }
          students {
            id
          }
        }
      }
    }
    events(first: 20) {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`;

export default GET_CREATIVE_SPACES;
