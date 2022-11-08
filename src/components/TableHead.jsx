import React from 'react';
import { BsArrowDownUp } from "react-icons/bs";

const TableHead = ({ sorting }) => {
      return (
            <>
                  <thead>
                        <tr>
                              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                              <th
                                    onClick={() => sorting("name")}
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider cursor-pointer">
                                    <span className='float-left'>Name</span>
                                    <span className='float-right'><BsArrowDownUp /></span>
                              </th>
                              <th
                                    onClick={() => sorting("code")}
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    <span className='float-left'>Code</span>
                                    <span className='float-right'><BsArrowDownUp /></span>
                              </th>
                              <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Availability
                              </th>
                              <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Needing Repair
                              </th>
                              <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Durability
                              </th>
                              <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                                    Mileage
                              </th>
                              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                        </tr>
                  </thead>
            </>
      )
}

export default TableHead