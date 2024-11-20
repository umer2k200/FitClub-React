import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Reason from './components/Reason/Reason';
import Plan from './components/Plan/Plan';
import Testimonial from './components/Testimonial/Testimonial';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Feedback from './components/Feedback/Feedback';
import JoinUser from './components/JoinUser/JoinUser';
import LoginUser from './components/LoginUser/LoginUser';
import { useState } from 'react';
import MyAccount from './components/MyAccount/MyAccount';
function App() {
  const [showJoinUser, setShowJoinUser] = useState(false);
  const [showLoginUser, setShowLoginUser] = useState(false);
  const [showMyAccount, setShowMyAccount] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const handleJoinUserClick = () => {
    setShowMyAccount(false);
    setShowJoinUser(true);
    setShowLoginUser(false); // Ensure LoginUser is hidden
  };

  const handleLoginUserClick = () => {
    setShowMyAccount(false);
    setShowLoginUser(true);
    setShowJoinUser(false); // Ensure JoinUser is hidden
  };

  const handleMyAccountClick = () => {
    setShowMyAccount(true);
    setShowLoginUser(false);
    setShowJoinUser(false);
  }

  const handleBackClick = () => {
    setShowMyAccount(false);
    setShowJoinUser(false);
    setShowLoginUser(false); // Hide both components on back
  };

  const handleUserRegistered = () => {
    setIsUserRegistered(true);
    setShowJoinUser(false);
    
  }

  const handleUserLogin = () => {
    setIsUserLogin(true);
    setShowLoginUser(false);
  }

  const handleLogout = () => {
    setIsUserLogin(false);
    setIsUserRegistered(false);
    alert("Thank you for coming here!");
    localStorage.removeItem('user');
  }

  return (
    <div className="App">
      {showJoinUser ? (
        <JoinUser onBack={handleBackClick} onsubmit={handleUserRegistered} />
      ) : showLoginUser ? (
        <LoginUser onBack={handleBackClick} onsubmit={handleUserLogin} />
      ) : showMyAccount ? ( // Render MyAccount component when showMyAccount is true
        <MyAccount onBack={handleBackClick} />
      ) : (
        <>
          <Hero onJoinUserClick={handleJoinUserClick} onLoginUserClick={handleLoginUserClick} onMyAccountClick={handleMyAccountClick} isUserRegistered={isUserRegistered} isUserLogin={isUserLogin}  handleLogoutButton={handleLogout} />
          <Program />
          <Reason />
          <Plan />
          <Testimonial />
          <Join />
          <Feedback />
          <Footer />
        </>
      )}
    </div>

  );
}

export default App;
