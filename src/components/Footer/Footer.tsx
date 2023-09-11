import { FC } from 'react'

import GithubIcon from 'src/assets/icons/github-mark/GithubIcon'

import { selectMode } from 'src/redux/features/settingsSlice/selectors'
import { Mode } from 'src/redux/features/settingsSlice/initialState'
import { useAppSelector } from 'src/redux/store'

import { FooterContainer, FooterText, FooterSpan } from './styledComponents'

const Footer: FC = () => {
  const mode = useAppSelector(selectMode)

  return (
    <FooterContainer>
      <GithubIcon color={mode === Mode.LIGHT ? '#fff' : ''} />
      <FooterText
        href='https://github.com/AdminAkai/dark-light-mode-test'
        data-replace='Source Code'
      >
        <FooterSpan>Source Code</FooterSpan>
      </FooterText>
    </FooterContainer>
  )
}
export default Footer
