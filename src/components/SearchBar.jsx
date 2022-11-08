import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { HiCubeTransparent } from "react-icons/hi"
import { Link } from 'react-router-dom';
const SearchBar = ({ setSearchValue }) => {
      return (
            <div className="align-middle flex rounded-tl-lg rounded-tr-lg justify-between w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                  <Link to="/"> <HiCubeTransparent color='black' size={45} /> </Link>
                  <div className="flex justify-between">
                        <div className="inline-flex border rounded w-[300px] px-2 lg:px-6 h-12 bg-transparent">
                              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                    <div className="flex">
                                          <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                                <BiSearchAlt size={25} />
                                          </span>
                                    </div>
                                    <input
                                          type="text"
                                          className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-base text-gray-500 font-thin"
                                          placeholder="Search"
                                          onChange={(e) => setSearchValue(e.target.value)}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default SearchBar