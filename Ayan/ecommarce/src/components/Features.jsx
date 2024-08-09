import React from 'react';
import './style/Features.css';
import f1 from '../assets/features/f1.png';
import f2 from '../assets/features/f2.png';

import f3 from '../assets/features/f3.png';
import f4 from '../assets/features/f4.png';


const featuresData = [
    {
        icon: f1,  // Correct usage of imported image
        title: 'High Quality',
        description: 'crafted from top materials',
    },
    {
        icon: f2,
        title: 'Warranty Protection',
        description: 'Over 2 years',
    },
    {
        icon: f3,
        title: 'Free Shipping',
        description: 'Order over 150 $',
    },
    {
        icon: f4,
        title: '24 / 7 Support',
        description: 'Dedicated support',
    },
];

const Features = () => {
    return (
        <div className="features-container">
            {featuresData.map((feature, index) => (
                <div key={index} className="feature-item">
                    <img src={feature.icon} alt={feature.title} className="feature-icon" />
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Features;
