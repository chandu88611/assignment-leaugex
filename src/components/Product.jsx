import { Button } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/cartSlice";
function Product({src,alt,title,price,cart}) {
  const dispatch=useDispatch()
  // const cartProducts = useSelector(state => state.cart);
  const handleAddToCart = (product) => {
 
    const existingCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
 const exists=existingCartProducts.find((p)=>p.id==product.id)
if(!exists){
    const newCartProducts = [...existingCartProducts, product];

    dispatch(updateCart(JSON.stringify(newCartProducts)));
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    window.location.reload()
}
    
    
  };
  return (
  <Box>
<Box sx={{padding:"15px",background:"rgb(200,200,200,.5)"}}>
<Box sx={{background:"white"}}>
<Box sx={{position:"relative"}}>
<img src={src} alt={alt} style={{height:"170px",width:"100%",border:'1px solid rgb(200,200,200,.5)'}} />
  <h4 style={{position:"absolute",top:-20,padding:"10px",background:"rgb(0,0,0,.4)",color:"white",borderRadius:"5px",letterSpacing:'2px'}}>{title}</h4>
  </Box>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",pl:"10px",pr:"10px"}}>
  <h4>{price} Rs</h4>
   <Button variant="outlined" onClick={()=>handleAddToCart(cart)}>Add to Cart</Button>
  </Box>
  </Box>
  </Box>
  </Box>
  )
}

Product.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cart:PropTypes.object
  };

export default Product