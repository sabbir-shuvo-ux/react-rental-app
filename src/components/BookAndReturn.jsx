import React from 'react';

import Booking from './Booking';
import ReturnPro from './ReturnPro';

const BookAndReturn = ({ ...singleProduct }) => {

      return (
            <>
                  <div className="">
                        <h2 className='text-2xl my-3 font-bold'>{singleProduct.name} <sup className='font-normal'> {singleProduct.code} </sup> </h2>

                        {singleProduct.availability ? <h4 className='w-[200px] text-center bg-green-300 '>It's available for rent</h4> : <h4 className='w-[300px] text-center bg-red-300'>This is not available for booking</h4>}

                        <p className='my-3'> {singleProduct.name} is an awesome product you can use it very easily</p>

                        {/* // Booking option */}
                        <Booking {...singleProduct} />

                        {/* return products */}
                        <ReturnPro {...singleProduct} />
                  </div>
            </>
      )
}

export default BookAndReturn