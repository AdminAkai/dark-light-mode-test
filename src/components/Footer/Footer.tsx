import { FC } from 'react'

import GithubIcon from 'src/assets/icons/github-mark/github-mark/github-mark.svg'

import { FooterContainer, FooterText } from './styledComponents'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <img src={GithubIcon} style={{ height: '48px' }} fill='red' />
      <FooterText>Source</FooterText>
    </FooterContainer>
  )
}
export default Footer
