import React, { useState } from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';
function Hero({onJoinUserClick, onLoginUserClick, onMyAccountClick, isUserRegistered, isUserLogin, handleLogoutButton}){
    const [joinButton, setJoinButton] = useState(false);

    const handleJoinClick = () => {
        setJoinButton(true);
        onJoinUserClick();
    };

    const handleLoginClick = () => {
        setJoinButton(true);
        onLoginUserClick();
    };
    
    const handleMyAccountClick =() => {
        onMyAccountClick();
    }
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768? true:false;
    return (
        <div className='hero' id='home'>
            <div className="blur blur-h"></div>
            <div className='left-h'>
                <Header />
                {/* Best Ad */}
                <div className="the-best-ad">
                    <motion.div 
                        initial={{left: mobile?'160px':'238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    > 
                        {/* for child  */}
                    </motion.div>
                    <span>
                        The Best fitness club in the town
                    </span>
                </div>
                {/* Hero Heading*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                {/* Experience Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={150} start={100} delay='4' prefix='+' />
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' prefix='+' />
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' prefix='+' />
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                {!joinButton  && !isUserRegistered && !isUserLogin &&(
                    <>
                        <button className='btn btn-j' onClick={handleJoinClick} >Join Now</button>
                        <button className='btn btn-m' onClick={handleLoginClick} >Already a member?</button>
                    </>
                )}
                { (isUserRegistered  || isUserLogin) && (
                    <>
                        <button className='btn btn-account' onClick={handleMyAccountClick}>My Account</button>
                        <button className='btn btn-logout' onClick={handleLogoutButton} >Loguot</button>
                    </>
                )}
                
                <motion.div className="heart-rate"
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}
                >
                    <img src={Heart} alt="Heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} alt="Hero" className="hero-image" />
                <motion.img src={hero_image_back} alt="Hero" className="hero-image-back" 
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                />
                
                {/* Calories */}
                <motion.div className="calories"
                    initial={{right:'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                >
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>950 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
export default Hero;