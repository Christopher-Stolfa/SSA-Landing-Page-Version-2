import { gql } from '@apollo/client';

type TImage = {
  link: string;
  altText: string;
};

type TTestomnial = { name: string; position: string; testimonial: string; image: TImage };
export interface IPageData {
  page: {
    landingPage?: {
      carousel?: {
        link?: string;
        altText?: string;
      }[];
      featuredPostGroup: {
        post: {
          date: Date;
          link: string;
          title: string;
          content: string;
        };
        image: {
          altText: string;
          link: string;
        };
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
      buttonUrls?: {
        apply?: string;
        calendar?: string;
        events?: string;
        faculty?: string;
        graduate?: string;
        jedi?: string;
        statement?: string;
        undergraduate?: string;
        work?: string;
        instagram?: string;
        youtube?: string;
        facebook?: string;
        linkedin?: string;
        twitter?: string;
        subscribe?: string;
      };
      videos?: {
        video: string;
      }[];
    };
  };
  events: {
    edges: {
      node: {
        title?: string;
        eventStartDate: Date;
        eventEndDate: Date;
        link?: string;
      };
    }[];
  };
}

const GET_PAGE_DATA = gql`
  query getPageData {
    page(id: "${process.env.REACT_APP_WEBSITE_URL}", idType: URI) {
      landingPage {
        carousel {
          link
          altText
        }
        featuredPostGroup {
          post {
            ... on Post {
              date
              link
              title
              content
            }
          }
          image {
            altText
            link
          }
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
        buttonUrls {
          apply
          calendar
          events
          faculty
          graduate
          jedi
          statement
          undergraduate
          work
          instagram
          youtube
          facebook
          linkedin
          twitter
          subscribe
        }
        videos {
          video
        }
      }
    }
    events(first: 50, where: { orderby: { field: EVENT_START_DATE, order: DESC } }) {
      edges {
        node {
          title
          eventStartDate
          eventEndDate
          link
        }
      }
    }
  }
`;

export default GET_PAGE_DATA;
