import React from 'react'
import { Link } from 'react-router-dom';
import { ImSpinner10 } from "react-icons/im";

const TableBody = ({ products, loading }) => {
      return (
            <tbody className="bg-white">
                  {loading ? (
                        <div className='w-full absolute top-[50%] left-[50%]'>
                              <ImSpinner10 className='animate-spin text-center' size={30} />
                        </div>
                  ) : (
                        <>
                              {
                                    products.map((item, index) => (
                                          <>
                                                <tr key={index + 1}>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div className="flex items-center">
                                                                  <div>
                                                                        <div className="text-sm leading-5 text-gray-800"># {index + 1} </div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <h4 className="text-sm leading-5 text-blue-900"> {item.name} </h4>
                                                      </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> {item.code} </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            {
                                                                  item.availability ? (
                                                                        <>
                                                                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                                    <span className="relative text-xs">true</span>
                                                                              </span>
                                                                        </>
                                                                  ) : (
                                                                        <>
                                                                              <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                                    <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                                    <span className="relative text-xs">false</span>
                                                                              </span>
                                                                        </>
                                                                  )
                                                            }
                                                      </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            {
                                                                  item.needing_repair ? (
                                                                        <>
                                                                              <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                                    <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                                    <span className="relative text-xs">true</span>
                                                                              </span>
                                                                        </>
                                                                  ) : (
                                                                        <>
                                                                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                                    <span className="relative text-xs">false</span>
                                                                              </span>
                                                                        </>
                                                                  )
                                                            }
                                                      </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5"> {item.durability} </td>
                                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{item.mileage === null ? 0 : item.mileage}</td>
                                                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <Link
                                                                  to={`/rent/${item._id}`}
                                                                  className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</Link>
                                                      </td>
                                                </tr>
                                          </>
                                    ))
                              }
                        </>
                  )}

            </tbody>
      )
}

export default TableBody