import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  transition: background-color 0.5s ease;
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Name = styled.h1`
  margin: 1rem;
  color: ${({ theme }) => theme.title};
`
export const Info = styled.p`
  margin: 1rem;
  color: ${({ theme }) => theme.subtitle};
`