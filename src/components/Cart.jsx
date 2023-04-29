import { Box } from '@mui/material';
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import "../App.css"
import { Link } from 'react-router-dom';
function Cart() {
  // const [quantity,setQuantity]=useState(1)
  const [total,setTotal]=useState(0)
  const products = useSelector((state) => state.cart.cartProducts);
 
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    window.location.reload()
  };

  useEffect(()=>{
    setTotal(products.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    ))
     
  },[])
  return (
    <div style={{padding:'40px' }}>
      <Box sx={{display:'flex',justifyContent:'space-between',  width: {lg:"78%", md: "65%", sm: "95%", xs: "100%" },
            ml: { md: "250px", sm: "none", xs: "none" }}}><h2>Shopping Cart</h2>   <h4>Cart Total <br/> <span style={{color:'green'}}>{total+" Rs"}</span></h4></Box>
   {products.length>0?<Box sx={{display:'flex',flexDirection:'column',  width: {lg:"78%", md: "65%", sm: "95%", xs: "100%" },
            ml: { md: "250px", sm: "none", xs: "none" },}}>
    {products.map((product, index) => (
          <Box key={index} sx={{height:"100px",display:'flex',gap:{md:"40px",sm:'30px',xs:'15px'},justifyContent:'space-around',p:'20px',borderBottom:'1px solid gray'}}>
            <Box className="items_center"><img src={product.imageURL}  className='cart_image'/>  </Box>
            <Box sx={{fontSize:{md:"1.2em",sm:'1em',xs:'.5em'},fontWeight:'bold',pt:'20px'}} className="items_center">
              {product.name}<br/>
              {product.price+" Rs" }
               </Box>
            <Quantity quantity={product.quantity}  product={product.price}  settotal={setTotal} total={total} products={products}/>
            <Box sx={{display:'grid',placeItems:'center'}}><button className='cart_but' onClick={()=>handleDelete(product.id)}>
              Delete
              </button> </Box>
          </Box>
        ))}

   </Box>:<Box sx={{textAlign:'center'}}>Your Cart Is Empty <br/>  <br/> Add Items  
          <Link href="/" style={{ color: "green" ,marginLeft:'5px'}}>
             Products
          </Link></Box>}


    </div>
  )
}

export default Cart


// const Quantity=({quantity,product,settotal,total,products})=>{
//   const [suberror, setSuberror] = useState("");
//   const [items, setItems] = useState(1);

  

//   return(
//     <Box sx={{display:'grid',placeItems:'center'}}><select className='select_box' value={items}  onChange={(e)=>{
//       if(e.target.value>quantity){
//         setSuberror(`Available stock is ${quantity}`)
//         setTimeout(()=>{
//           setSuberror("")
//         },3000)
// setItems(1)
// settotal(products.reduce(
//   (accumulator, product) => accumulator + product.price,
//   0
// ))
//       }else{
//         setItems(parseInt(e.target.value))
//         settotal(total+((product*items)-product))
//         console.log(total)
//       }
//       }}>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//     <option value="6">6</option>
//     <option value="7">7</option>
//     <option value="8">8</option>

//     </select>
//    {suberror && <span style={{color:'red',fontSize:'10px'}}> {suberror} </span>}
//      </Box>
//   )
// }

const Quantity = ({ quantity, product, settotal }) => {
  const [suberror, setSuberror] = useState("");
  const [items, setItems] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity > quantity) {
      setSuberror(`Available stock is ${quantity}`);
      setTimeout(() => {
        setSuberror("");
      }, 3000);
      setItems(1);
      settotal((prevTotal) => prevTotal + (product - product * items));
    } else {
      setItems(newQuantity);
      settotal((prevTotal) => prevTotal + (product * newQuantity - product * items));
    }
  };

  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <select className="select_box" value={items} onChange={handleQuantityChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      {suberror && <span style={{ color: "red", fontSize: "10px" }}> {suberror} </span>}
    </Box>
  );
};
