import React from 'react';

const Bannars = ({name, discount,link}) => {
    return (
        <div>
             <div className="bannerContent">
                <h3 className='bennar-tex'>Hell {name}</h3>
                <p className='bennar-tex'>Get Free Discount For Every <span> $ {discount}</span> Purchase</p>
                <a> Learn More</a>

    </div>
        </div>
    );
};

export default Bannars;