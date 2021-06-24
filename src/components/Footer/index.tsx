import React from 'react'

import Container from 'components/Container'

import * as S from './styles'
import { FooterProps } from 'types/api'

const Footer = ({ description }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </Container>
  </S.Wrapper>
)

export default Footer
