import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* background: #393c83; */
  /* background: #161429; */
  /* background: hsl(162deg 79% 53% / 81%); */
  // background: #e6448d,
  background:  ${({ scrolled }) => (scrolled ? 'rgba(40, 230, 173, 0.6)' : 'rgba(40, 230, 173, 1)')};
  padding: 1.5rem 4rem;
  
  .navbar-brand{
    font-size: 2.4rem;
  }
  .navbar-logo{
    width: 3rem;
    height: 3rem;
  }
  .navbar-ux{
    display: flex
  }
  
  .navbar-sections{
    display: flex;
    gap: 1rem;
  }

  .navbar-item{
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-link {
    color: #00695C;
    font-weight: bold;
    font-size:inherit;
    padding: 0.5rem;
    border: 0;
    display: flex;
    &.active{
      background: #004147;
      color:aliceblue;
      padding: 1rem;
      border-radius: 1.1rem;  
    }
  }
`

export const FooterStyle = styled.div`
  background: rgba(40,230,173,1);
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-link-container{
    display: flex;
  }
  .footer-link{
    padding: 1rem;
  }
  .footer-link-img{
    width: 3rem;
    height: 3rem;
  }
`

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  background-color: aliceblue;
  border-radius: 0.8rem;  
  flex-wrap: wrap;
  height: 24rem;
  
  :nth-child(8n-1) {
    width:40rem;
    transform: translate(40rem, 0);
    /* grid-column: 1/-1; */
    /* transform: translate(50%, 0); */
  }
  :nth-child(8n-1) > h6{
    width:40rem;
    /* transform: translate(50%, 0); */
  /* min-width: 40rem;
  transform: translate(-80rem, 0); */
  }
  
  :hover > h6{
  visibility: visible;
  background: #ffffffe6;
  color: #00695C;
  font-size: 1.5rem;
  min-height: 10rem;
  }
  .img-card-container{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  }
  .img-card{
    
  height:24rem;
  object-fit: cover; 
  width: 100%;
  max-width: 40rem;
  }
  .title-card{
    /* transform: translate(0, -12rem); */
    user-select: none;
    transform: translate(-100%,0rem);
    /* background: blue; */
    min-height: 24rem;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    color: white;
    visibility: hidden;
    transition: min-height ease 0.2s, color cubic-bezier(.95,.05,.8,.04) 0.3s;
    /* transition: color linear 5s; */
    /* transition: min-height linear 0.2s; */
    /* transition: color linear 0.8s; */
  }
  /* .title-card:hover{
    transform: translate(0, -12rem);
  } */
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38.4rem, 40rem));
  width: 100%;
  max-width: 120rem;
  justify-content:center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-title{
    font-size: 3.5rem;
    color: #00695C;
    padding-bottom: 3rem;
  }
  .form-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input,textarea{
      line-height: 3rem;
      width: 45rem;
      color: #00695C;
      font-weight: 700;
      font-size: 1.3rem;
    }

    & textarea{
      line-height: 2.5rem;
      resize: none;
      height: 18rem;
    }
  }
  .error-field{
    color: #e91e63;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 0;
  }
  .form-body-btn{
    cursor: pointer;
    background: #004147;
    color:aliceblue;
    padding: 1rem;
    border-radius: 1.1rem;  
    border-style: solid;
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    transition: .2s ease-in-out 0s;
  }
  .form-body-btn:hover{
    transform: scale(1.2);
  }
  .form-body-btn:active{
    transform: scale(1.1);
  }
`
// -------------------------------------------------------------------------------------//
//                                                                                      //
//                               Motion components based                                //
//                                                                                      //
// -------------------------------------------------------------------------------------//

const BackgroundModal = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`
const backgroundVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
interface BackgroundAnimatedProps {
  children: React.ReactNode;
}
const BackgroundAnimated = ({ children }:BackgroundAnimatedProps) => (
                                  <BackgroundModal
                                    variants={backgroundVariant}
                                    initial='hidden'
                                    animate='visible'
                                    transition={{ duration: 0.3 }}
                                  >
                                    {children}
                                  </BackgroundModal>)

const contentVariant = {
  visible: {
    opacity: 1,
    y: '0'
  },
  hidden: {
    opacity: 0,
    y: '-100vh'
    // transition: {
    //   duration: 0.4,
    //   type: 'spring',
    //   damping: 250,
    //   stiffness: 500
    // }
  }
}

const Content = styled(motion.div)`
  height: 70rem;
  width: 70rem;
  background: rgba(255,255,255,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
interface ContentAnimatedProps {
  children: React.ReactNode;
}
const ContentAnimated = ({ children }:ContentAnimatedProps) => (
  <Content
    variants={contentVariant}
    initial='hidden'
    animate='visible'
    transition={{
      delay: 0.3,
      duration: 0.6,
      type: 'spring',
      damping: 19,
      stiffness: 300
    }}
  >
    {children}
  </Content>)

export const Modal = {
  Background: BackgroundAnimated,
  Content: ContentAnimated
}
