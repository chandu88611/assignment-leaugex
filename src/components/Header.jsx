import { Box, Link } from "@mui/material";
import  { useEffect, useMemo, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";


import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
function Header() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const existingCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },[]);
  const searchResults = useMemo(() => {
    const searchLower = searchText.toLowerCase(); // convert the search query to lowercase
    return data.filter((product) => (
      product.name.toLowerCase().includes(searchLower) ||
      product.color.toLowerCase().includes(searchLower) ||
      product.type.toLowerCase().includes(searchLower)
    ));
  }, [data, searchText]);
  return (
    <Box sx={{ position: "sticky", top:0,display:'flex',flexDirection:"column",justifyContent:"center",zIndex:9 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pl: "60px",
          pr: "60px",
          pt: "10px",
          pb: "10px",
          background: "gray",
        }}
      >
        <Box sx={{fontSize:"1em"}}>
          <h3>TeeRex Store</h3>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5em",
            gap: "30px",
          }}
        >
          <Box sx={{display:{md:"flex",sm:"flex",xs:"none"}}} >
          <Link href="/" style={{ color: "black" }}>
            Products{" "}
          </Link></Box>
          <Link href="/cart" style={{ color: "black", position: "relative" ,cursor:"pointer"}}>
            <AiOutlineShoppingCart  size="30px" />

            <Box
              sx={{
                position: "absolute",
                color: "white",
                fontSize: ".5em",
                background: "black",
                p: "6px",
                borderRadius: "50%",
                height: "12px",
                width: "12px",display:"grid",placeItems:"center",top:-13,left:13
              }}
            >
              {existingCartProducts.length}
            </Box>
          </Link>  
        </Box>
      </Box>
      <Box sx={{ p: "30px", display: "flex", alignItems: "center" ,justifyContent:"center",mt:"-20px"}}>
        <input
          type="text"
          placeholder="search by Name ,Color ,Type"
          className="search_input"
          list="search-options"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <datalist id="search-options" className='search_datalist'>
 { data.map((data)=>(
  <option value={data.name} />
 ))}
  
</datalist> */}
        <AiOutlineSearch
          size="40px"
          onClick={() => {
            dispatch(setProducts(searchResults));
            console.log(searchResults);
          }}  style={{background:"rgb(0,0,0,.5)",padding:'5.9px',marginLeft:"1px"}}
        /><Box  sx={{display:{md:"none",sm:"flex",xs:"flex"},ml:"10px"}}><FaFilter size="30px" /> </Box>
      </Box>
     {/* <Box sx={{display:{md:"none",sm:"flex",xs:"flex"}, position: "fixed",top:110}}>

     <Sidebar  data={data}/>
      </Box> */}
    </Box>
  );
}

export default Header;
