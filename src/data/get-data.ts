import { gql } from '@apollo/client';

type TImage = {
  link?: string;
  altText?: string;
};

type TTestomnial = { name: string; position: string; testimonial: string; image: TImage };
export interface IPageData {
  page?: {
    landingPage?: {
      heroDescription?: string;
      carousel?: {
        link?: string;
        altText?: string;
      }[];
      creativeSpaces?: {
        title?: string;
        description?: string;
        moreInfoUrl?: string;
        schedule?: {
          monday?: string;
          tuesday?: string;
          wednesday?: string;
          thursday?: string;
          friday?: string;
          saturday?: string;
          sunday?: string;
        };
        image?: TImage;
      }[];
      testimonials?: {
        faculty?: TTestomnial[];
        students?: TTestomnial[];
      };
      programs?: {
        name?: string;
        url?: string;
      }[];
      buttonurls?: {
        apply?: string;
        calendar?: string;
        events?: string;
        faculty?: string;
        graduate?: string;
        jedi?: string;
        statement?: string;
        undergraduate?: string;
        work?: string;
      };
    };
  };
  events?: {
    edges?: {
      node?: {
        title?: string;
        date?: Date;
        link?: string;
      };
    }[];
  };
}

const GET_PAGE_DATA = gql`
  query getPageData {
    page(id: "https://dev-spitzer-arch.pantheonsite.io/landing-page/", idType: URI) {
      landingPage {
        heroDescription
        carousel {
          link
          altText
        }
        creativeSpaces {
          title
          description
          moreInfoUrl
          schedule {
            friday
            monday
            saturday
            sunday
            thursday
            tuesday
            wednesday
          }
          image {
            altText
            link
          }
        }
        testimonials {
          students {
            name
            position
            testimonial
            image {
              altText
              link
            }
          }
          faculty {
            name
            position
            testimonial
            image {
              altText
              link
            }
          }
        }
        programs {
          name
          url
        }
        buttonurls {
          apply
          calendar
          events
          faculty
          graduate
          jedi
          statement
          undergraduate
          work
        }
      }
    }
    events(first: 20) {
      edges {
        node {
          title
          date
          link
        }
      }
    }
  }
`;

export default GET_PAGE_DATA;
