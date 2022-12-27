import styled from "styled-components";

const Login = (props) =>{
  return(
 <Container>
  <Content>
    <CTA>
      <CTAlogoone src="/pictures/cta-logo-one.svg" alt=""/>
      
      <SignUp>
        GET ALL HERE
        </SignUp>
      
      <Description>GET PREMIUM ACCESS TO ALL MOVIES, TV SHOWS AND WEB SERIES WHICH ARE AVAILABLE ON DISNEY+ HOTSTAR, NETFLIX AND AMAZON PRIME VIDEO IN JUST ONE CLICK.</Description>
      <CTAlogotwo src =  " /pictures/Netflix.png" alt = ""/>
    </CTA>
    <BgImage/>
    </Content>
 </Container>
  );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;
const BgImage = styled.div`
height: 100%;
background-position: center;
background-size: cover;
background-repeat: repeat-x;
background-image: url("/pictures/blue.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;

`;
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.4s;
width: 100%;

`;
const CTAlogoone = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-width: 1px;
display: block;
width: 100%;
margin-left: auto;

`;
const SignUp = styled.div`
 font-weight: bold;
 background-color:#0470ab;
 cursor: pointer;
 font-size: 25px;
 margin-bottom: 12px;
 width: 100%;
 letter-spacing: 1.5px;
 padding: 15px 0;
border: 3px solid transparent;
margin-left: auto;
border-radius: 15px;
transform: scale(0.8);
transition:all 0.4s ease 0s;
&:hover{
  transition:all 0.4s ease 0s;
  background-color: #0b4f9a;
  transform: scale(0.85);
  }
`;
const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 12px;
margin-left: auto;
line-height: 1.5;
letter-spacing: 1.5px;
`
const CTAlogotwo = styled.img`

margin-bottom: -250px;
max-width: 1000px;
min-width: 1px;
display: block;
width: 100%;
margin-top: -75px;
margin-left: auto;
margin-right: auto;
`


export default Login;