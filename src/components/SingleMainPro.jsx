import React from 'react';
import AirCom from "../img/air.jpg";
import BookAndReturn from './BookAndReturn';

const SingleMainPro = ({ ...singleProduct }) => {
      return (
            <div className='w-[90%] mx-auto flex mt-6'>
                  <div className="flex-1">
                        <img src={AirCom} alt="aircom" />
                  </div>
                  <div className="flex-1">

                        <BookAndReturn {...singleProduct} />

                  </div>
            </div>
      )
}

export default SingleMainPro