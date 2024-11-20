import React from 'react'
import './Plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
function Plan() {
    return (
        <div className='plans-container' id='plans-con'>
            <div className="blur blur-p-1"></div>
            <div className="blur blur-p-2"></div>
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            <div className="plans">
                {plansData.map((plan, index) => {
                    return (
                        <div className="plan" key={index} >
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>
                            <div className="features">
                                {plan.features.map((feature, index) => {
                                    return(
                                        <div className="feature" key={index}>
                                            <img src={whiteTick} alt="tick" />
                                            <span key={index}>{feature}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                <span>See more benefits -&gt;</span>
                            </div>
                            <button className="btn">Join Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Plan
