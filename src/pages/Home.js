import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { creditBee } from '../slices/ProductsSlice'

const Home = () => {
    let dispatch = useDispatch();
    let {codeWord}=useSelector(state=>state.Products)
    dispatch(creditBee())
  return (
    <div>
        <h2>{codeWord}</h2>
    </div>
  )
}


export default Home