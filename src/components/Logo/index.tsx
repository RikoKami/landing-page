import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={url ?? '/img/logo.svg'} alt={alternativeText} />
)

export default Logo
