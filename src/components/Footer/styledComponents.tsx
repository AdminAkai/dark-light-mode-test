import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.footer};
  padding: 16px;
  transition: background-color 0.5s ease;
`

export const FooterText = styled.h1`
  margin-left: 24px;
  color: ${({ theme }) => theme.footerText};
`
