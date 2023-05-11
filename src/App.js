//import logo from './logo.svg';
import axios from 'axios';
// import './App.css';
import { useEffect, useReducer } from 'react';


import Products from './component/Products';
import Cart from './component/Cart';
import { cartReducer } from './reducer/cartReducer';
//
//

function App() {
  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[],
  })
  console.log(state)
  const fetchproducts=async()=>{

    const {data}= await axios.get('https://dummyjson.com/products');
    console.log(data)
    dispatch({
      type:"ADD_PRODUCTS",
      payload:data.products,
    })

  }
  useEffect(()=>{
    fetchproducts()
  },[])
  return (
    <div  style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
       
    </div>
  );
}

export default App;
