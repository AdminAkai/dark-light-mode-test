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

export const FooterText = styled.a`
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin-left: 24px;
  font-size: 36px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.footerText};

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
  }

  &:before {
    background-color: #790000;
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
  }

  &:after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #790000;
  }

  &:hover:before,
  &:focus:before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  &:hover:after,
  &:focus:after {
    transform: translate3d(0, 0, 0);
  }
`

export const FooterSpan = styled.span`
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);

  &:hover {
    transform: translate3d(-200%, 0, 0);
  }
`
