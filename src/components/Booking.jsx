import React, { useState } from 'react'
import moment from "moment";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = ({ ...singleProduct }) => {

      const [startDate, setStartDate] = useState("");
      const [endDate, setEndDate] = useState("");
      const navigate = useNavigate();

      // find diff between two time
      const dateDiff = () => {
            var a = moment(endDate);
            var b = moment(startDate);
            const Ddiff = a.diff(b, 'days');

            const totalPrice = Ddiff * singleProduct.price;
            if (!singleProduct.availability) return;
            if (!totalPrice) return;
            if (Math.sign(totalPrice) === -1) return swal("you can't select previous date")

            swal({
                  title: `Estimated price of your product $${totalPrice}`,
                  text: "Are you sure?",
                  icon: "success",
                  dangerMode: true,
            }).then((res) => {
                  if (res) {
                        axios.put(`https://rental-rest-api.herokuapp.com/api/alldata/${singleProduct._id}`, {
                              availability: false,
                              returnPrice: totalPrice
                        }).then(() => {
                              navigate('/rent');
                        }).catch((err) => {
                              console.log(err)
                        })
                  }
            });

      }

      return (
            <div className="">
                  <h2 className='text-lg py-4 font-bold'>Booking option</h2>
                  <div className="flex gap-6">
                        <input onChange={(e) => setStartDate(e.target.value)} className='border-2' type="date" name="start" id="start" />
                        <input onChange={(e) => setEndDate(e.target.value)} className='border-2' type="date" name="end" id="end" />
                  </div>
                  <button
                        onClick={() => dateDiff()}
                        class={singleProduct.availability ? "bg-blue-500 my-4 text-white font-bold py-2 px-4 rounded" : `bg-gray-500 my-4 text-white font-bold py-2 px-4 rounded`}>
                        Book
                  </button>
            </div>
      )
}

export default Booking