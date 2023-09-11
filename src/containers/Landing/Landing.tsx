import { FC } from 'react'
import MoonIcon from "src/assets/icons/MoonIcon"
import SunIcon from "src/assets/icons/SunIcon"

import Switch from "src/components/Switch"
import Footer from 'src/components/Footer';

import { selectMode } from 'src/redux/features/settingsSlice/selectors'
import { useAppSelector } from 'src/redux/store'

import { Info, LandingPageContainer, MainContainer, Name, ToggleContainer } from './styledComponents'

const Landing: FC = () => {
  const mode = useAppSelector(selectMode)

  return (
    <LandingPageContainer>
      <MainContainer>
        <ToggleContainer>
          <SunIcon mode={mode} />
          <Switch />
          <MoonIcon mode={mode}/>
        </ToggleContainer>
        <Name>Josh Trinidad</Name>
        <Info>Username: jtrinidad</Info>
        <Info>Email: akatoirotech@gmail.com</Info>
      </MainContainer>
      <Footer />
    </LandingPageContainer>
  );
}
export default Landing
