import styled from 'styled-components'
import CSS from 'csstype'
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

export const FooterStyle = styled.footer`
  height: 5.5rem;
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

export const AppoinmentContainer = styled.div`
  width: 80%;
  height: auto;
  max-width: 80rem;
  background: black;
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
    border: 0;
  }
  .form-body-btn:hover{
    transform: scale(1.2);
  }
  .form-body-btn:active{
    transform: scale(1.1);
  }
`
export const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 5rem 60rem 5rem;
  grid-template-rows: 7rem 65rem;
  justify-items: center;
  align-items: center;
  border: 0.2rem solid black;
  border-radius: 2rem;

  .step-title{
    grid-column: 1/4;
    grid-row: 1/2;
    align-self: end;
    font-size: 2rem;
  }
  #step-slider-backward{
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
  }
  #card-professional-container{
    grid-column: 2/3;
    grid-row: 2/3;
  }
  #step-slider-forward{
    grid-column: 3/4;
    grid-row: 2/3;
    width: 100%;
    transform: rotate(180deg);
  }
  #card-specialty-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`
type CardTitleVariant = Pick<CSS.Properties, 'fontSize' | 'padding' | 'fontWeight'>;

type CardImgVariant = Pick<CSS.Properties, 'width' | 'borderRadius'>;

type CardVariant = Pick<CSS.Properties, 'display' | 'gridTemplateColumns' | 'gridTemplateRows'> & {
  title: CardTitleVariant,
  img: CardImgVariant,
  gridTemplateColumns: CSS.Properties,
  gridTemplateRows: CSS.Properties
}

type MinimalistCardStyleProps = {
  variant : CardVariant
}

export const textFirstMCardVariant: CardVariant = {
  gridTemplateColumns: '24rem',
  gridTemplateRows: '6rem 12rem',
  title: {
    fontSize: '1.8rem',
    padding: '0',
    fontWeight: '400'
  },
  img: {
    width: '10rem',
    borderRadius: '0'
  }
}
export const MinimalistCardStyle = styled.div<MinimalistCardStyleProps>`
  display: grid;
  grid-template-columns: ${props => props.variant.gridTemplateColumns};
  grid-template-rows: ${props => props.variant.gridTemplateRows};
  border: 0.1rem solid rgb(0,0,0);
  background-color: rgb(255, 255, 255);
  border-color: transparent;
  border-radius: 2rem;
  align-items: center;
  justify-items: center;
  box-shadow: 7px 14px 19px -7px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
  .title-minimalist-card{
    font-size: ${props => props.variant.title.fontSize};
    font-weight: ${props => props.variant.title.fontWeight};
    padding: ${props => props.variant.title.padding};
  }
  .img-minimalist-card{
    width: ${props => props.variant.img.width};
    border-radius: ${props => props.variant.img.borderRadius};
  }
`
