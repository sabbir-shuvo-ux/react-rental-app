import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SingleMainPro from '../components/SingleMainPro';

const SingleProduct = ({ setProgress }) => {
      const [singleProduct, setSingleProduct] = useState({});
      const { id } = useParams();
      const navigate = useNavigate();

      const getSingleProduct = () => {
            axios.get(`https://rental-rest-api.herokuapp.com/api/alldata/${id}`).then((res) => {
                  setSingleProduct(res.data);

            }).catch((err) => {
                  console.log(err.message)
            })
      }

      useEffect(() => {
            // load new page start from top
            window.scrollTo(0, 0);

            getSingleProduct();

      }, [])

      return (
            <>
                  <div
                        key={singleProduct._id}
                  >
                        <nav
                              className='w-[90%] mx-auto py-4'
                        >
                              <span
                                    onClick={() => navigate(-1)}
                                    className='flex transition items-center gap-2 font-[25px] text-gray-500 cursor-pointer hover:text-black group'>
                                    <BsArrowLeft className='transition group-hover:-translate-x-2' />
                                    Go Back
                              </span>
                        </nav>

                        <SingleMainPro {...singleProduct} />
                  </div>



            </>
      )
}

export default SingleProduct