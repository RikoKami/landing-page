import { gql } from 'graphql-request'

export const GET_LANDING_PAGE = gql`
  {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`
