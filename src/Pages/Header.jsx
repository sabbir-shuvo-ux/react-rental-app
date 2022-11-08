import React from 'react';
import { HiCubeTransparent } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <>
                  <header>
                        {/* Background image */}

                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%', height: '100vh', backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/146.webp")' }}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                                    <div className="flex justify-between px-6 py-3 items-center">
                                          <HiCubeTransparent color='white' size={50} />
                                          <a className='text-white flex items-center gap-3 hover:text-pink-500 transition' href="tel:+880 000 000 00">
                                                Call Us
                                                508-207-88
                                          </a>
                                    </div>
                                    <div className="flex justify-center items-center h-full">
                                          <div className="text-center text-white px-6 md:px-12">
                                                <h1 className="text-5xl font-bold mt-0 mb-6">Lorem ipsum dolor sit amet.</h1>
                                                <h3 className="text-lg font-bold mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eaque?</h3>
                                                <Link
                                                      to="/rent"
                                                      type="button"
                                                      className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-lg leading-tight uppercase rounded"
                                                >
                                                      Rent Now
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* Background image */}
                  </header>

            </>
      )
}

export default Header