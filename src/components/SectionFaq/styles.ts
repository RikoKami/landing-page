import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.texts};
    transform: skewY(4deg);

    ${media.greaterThan('medium')`
      padding-bottom: ${theme.spacings.xxlarge};
    `}
  `}
`

export const Content = styled.div`
  transform: skewY(-4deg);
`

export const Questions = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-column-gap: ${theme.spacings.medium};
      grid-row-gap: ${theme.spacings.large};
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`

export const Question = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
    }

    &:last-child {
      grid-column: 1;
      margin-top: ${theme.spacings.medium};

      a {
        border-bottom: 1px solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};
        text-decoration: none;
      }

      ${media.greaterThan('medium')`
        grid-column: span 2;
        margin-top: ${theme.spacings.xlarge};
      `}
    }
  `}
`
