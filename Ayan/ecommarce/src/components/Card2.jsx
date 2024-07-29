import React from 'react'
import t1 from '../assets/t1.png'
import "./style/card2.css"
const Card2 = () => {
  return (
    <div>
        <div className="card-wrapper">
                    <div className="card-img">
                        <img src={t1} alt="" />
                    </div>
                    <div className="card-type">
                          <h6>Dining</h6>
                    </div>
        </div>
    </div>
  )
}

export default Card2