import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { auth, provider } from "../firebase";


import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        Navigate("/Home");
      } 
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          Navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
   return (
   <Nav>
      <Logo>
        <a href="/home">
          <img src="/pictures/creation.png "alt="creation" />
        </a>      
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>

      <NavMenu>
         <a href="/home">
            <img src = "/pictures/home-icon.svg" alt = "a"/>
            <span>HOME</span>
         </a>
         <a href="https://www.youtube.com/watch?v=LKFuXETZUsI">
            <img src = "/pictures/search-icon.svg" alt = "a"/>
            <span>SEARCH</span>
         </a>
         <a href="/home">
            <img src = "/pictures/watchlist-icon.svg" alt = "a"/>
            <span>WATCHLIST</span>
         </a>
         <a href="/home">
            <img src = "/pictures/original-icon.svg" alt = "a"/>
            <span>ORIGINALS</span>
         </a>
         <a href="/home">
            <img src = "/pictures/movie-icon.svg" alt = "a"/>
            <span>MOVIE</span>
         </a>
         <a href="/home">
            <img src = "/pictures/series-icon.svg" alt = "a"/>
            <span>SERIES</span>
         </a> 

      </NavMenu>
      <SignOut >
        <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
position: fixed;
top: 0%;
left: 0%;
right: 0%;
height: 70px;
display: flex;
justify-content: space-between;

align-items: center;
padding: 0 30px;
letter-spacing: 10px;
z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width: 200px;
margin-top: 4px;
max-height: 180px;
font-size: 0;
display: inline-block;

img{
   display: block;
   width: 100%;
   
}
`;
const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;


a{
   display: flex;
   align-items: center;
   padding: 0 10px;
   transition: all 1s ease 0s;

img{
   height: 30px;
   width: 25px;
   min-width: 20px;
   z-index: auto;
}
  span{
   color: #f9f9f9;
   font-size: 17px;
   letter-spacing: 1.4px;
   line-height: 1.08;
   padding: 4px 5px;
   padding-top: 6px;
   position: relative;
  



  
  &:before{
   background-color: #0470ab;
   border-radius: 0px 0px 4px 4px;
   bottom: -6px;
   content: "";
   height: 2px;
   opacity: 0;
   position: absolute;
   right: 0;
   left: 0;
   transform-origin: left center;
   transform: scaleX(0);
   transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
   visibility: hidden;
   width: auto;
  }
}
&:hover{
   span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
   }
}
&:hover{
   transition:all 0.3s ease 0s;
   padding: 0px 20px;
   letter-spacing: 2px;
   transform: scale(1.2);
}
}

@media (max-width:1080px ) {
   display: none;
}

`;

const Login = styled.a`
font-weight: 200;
padding: 8px 16px;
/* background-color: rgb(19, 19, 19); */
cursor: pointer;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 2px solid #0470ab;
border-radius: 6px;
transition: all 0.4s ease 0s;

&:hover{
  
   transition:all 0.4s ease 0s;
   /* background-color: rgb(10, 10, 19); */
   border-radius: 8px;
   letter-spacing: 2px;
   transform: scale(1.1689);
   
}

`;


const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  &:hover{
    background-color: rgba(151, 151, 151, 0.34);
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-width: 10px;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transition: all 0.4s ease 0s;
 
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }
`;

export default Header;