import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';
export default function SearchItem({cart,setCart}) {
  const {term} = useParams();
  const [filterData, setfilterData] = useState([]);
  useEffect(() => {
    const filteredData  = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      setfilterData(data);
    }
    filteredData();
  }, [term])
  

  return (
    <>
    <Products cart= {cart} setCart ={setCart} items={filterData}></Products>
    </>
  )
}
