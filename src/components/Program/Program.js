import React from 'react'
import './Program.css'
import {programsData} from  '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Program() {
  return (
    <div className="Programs" id='programs'>
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text '>to shape you</span>
        </div>

        {/* programs */}
        <div className="program-categories">
            {programsData.map((program,index) => (
                <div className="category" key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        {/* <span>Join Now</span> */}
                        <button className="btn btn-programcat">Join Now</button>
                        <img src={RightArrow} alt="RightArrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program
