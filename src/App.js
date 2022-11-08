import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar';

import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import RentPage from './Pages/RentPage';
import SingleProduct from './Pages/SingleProduct';

const App = () => {
      const [progress, setProgress] = useState(0);

      // TOP LOADINGBAR
      useEffect(() => {
            setProgress(50);

            setTimeout(() => {
                  setProgress(100)
            }, 500)
      }, [])
      return (
            <>
                  <LoadingBar
                        color='#f11946'
                        progress={progress}
                        onLoaderFinished={() => setProgress(0)}
                  />

                  <Routes>
                        <Route path='/' element={<Header />} />
                        <Route path='/rent' element={<RentPage setProgress={setProgress} />} />
                        <Route path='/rent/:id' element={<SingleProduct setProgress={setProgress} />} />
                  </Routes>


            </>
      )
}

export default App