import axios from 'axios';
import React from 'react';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

const ReturnPro = ({ ...singleProduct }) => {
      const navigate = useNavigate();

      const updateData = (value) => {
            const valueN = Number(value);
            console.log(typeof (valueN))

            const totalMileage = valueN + singleProduct.mileage;

            axios.put(`https://rental-rest-api.herokuapp.com/api/alldata/${singleProduct._id}`, {
                  availability: true,
                  mileage: totalMileage
            }).then(() => {
                  swal({
                        title: `Estimated price of your product ${singleProduct.returnPrice}`,
                        text: "Are you sure?",
                        icon: "success",
                        dangerMode: true,
                  }).then((res) => {
                        if (res) {
                              navigate("/rent")
                        }
                  })
            }).catch((err) => {
                  console.log(err.messages)
            })
      }

      const handleClick = () => {
            swal("Used milleage:", {
                  content: "input",
            }).then((value) => {
                  if (value) {
                        updateData(value)
                  }
            });
      }
      return (
            <div style={{ borderTop: "1px solid #ddd" }}>
                  <h2 className='text-lg py-4 font-bold'>Return Option</h2>
                  <button
                        onClick={() => handleClick()}
                        className='bg-blue-500 my-4 text-white font-bold py-2 px-4 rounded'>
                        Return
                  </button>
            </div>
      )
}

export default ReturnPro