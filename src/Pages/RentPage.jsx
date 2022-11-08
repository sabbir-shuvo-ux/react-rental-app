import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TableBody from '../components/TableBody';
import TableHead from '../components/TableHead';
import axios from "axios";

const RentPage = ({ setProgress }) => {

      const [products, setProducts] = useState([]);
      const [searchValue, setSearchValue] = useState("");
      const [order, setOrder] = useState("ASC");
      const [loading, setLoading] = useState(true);

      // get all data from backend
      const getProducts = () => {
            axios.get("https://rental-rest-api.herokuapp.com/api/alldata").then((res) => {
                  setProducts(res.data);
                  setLoading(false);
            }).catch((err) => {
                  setLoading(true);
                  console.log(err.message)
            })
      }

      // filter results on search
      const searchFilter = products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())
      )

      // sort by ASC to DSC
      const sorting = (col) => {
            if (order === "ASC") {
                  const sorted = [...products].sort((a, b) =>
                        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                  );
                  setProducts(sorted);
                  setOrder("DSC");
            }
            if (order === "DSC") {
                  const sorted = [...products].sort((a, b) =>
                        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                  );
                  setProducts(sorted);
                  setOrder("ASC");
            }
      }

      // FECTH DATA && LOADING TOP BAR
      useEffect(() => {
            setProgress(50);
            setTimeout(() => {
                  setProgress(100)
            }, 500);

            getProducts();
      }, [])

      return (
            <>
                  <SearchBar setSearchValue={setSearchValue} />
                  <div className="w-full mx-auto my-[10px] overflow-x-auto sm:px-6 pr-10 lg:px-8">

                        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                              <table className="min-w-full">
                                    <TableHead sorting={sorting} />
                                    <TableBody loading={loading} products={searchFilter} />
                              </table>

                        </div >
                  </div >
            </>
      )
}

export default RentPage