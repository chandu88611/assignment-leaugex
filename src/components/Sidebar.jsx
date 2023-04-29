import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";

function Sidebar({ data }) {
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState([]);
  // const [filterData2, setFilterData2] = useState([]);
  // const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [gender, setgender] = useState("");
  const[max,setmax]=useState()
  const[min,setmin]=useState()


  const[red,setRed]=useState("")
  const[blue,setBlue]=useState("") 
  const[men,setmen]=useState("")
   const[women,setwomen]=useState("")
   const[hoddie,sethoddie]=useState("")
   const[polo,setpolo]=useState("")
   const[basic,setbasic]=useState("")
   const[p1,setp1]=useState("")
   const[p2,setp2]=useState("")
   const[p3,setp3]=useState("")

   const[green,setGreen]=useState("")



   const handleColorClick = (color) => {
    switch (color) {
      case "red":
        setRed("red");
        setBlue("");
        setGreen("");
        break;
      case "blue":
        setRed("");
        setBlue("blue");
        setGreen("");
        break;
      case "green":
        setRed("");
        setBlue("");
        setGreen("green");
        break;
      default:
        setRed("");
        setBlue("");
        setGreen("");
        break;
    }
  };
  
  const handleGenderClick = (gender) => {
    switch (gender) {
      case "men":
        setmen("men");
        setwomen("");
        break;
      case "women":
        setmen("");
        setwomen("women");
        break;
      default:
        setmen("");
        setwomen("");
        break;
    }
  };
  
  const handleTypeClick = (type) => {
    switch (type) {
      case "hoddie":
        sethoddie("hoddie");
        setpolo("");
        setbasic("");
        break;
      case "polo":
        sethoddie("");
        setpolo("polo");
        setbasic("");
        break;
      case "basic":
        sethoddie("");
        setpolo("");
        setbasic("basic");
        break;
      default:
        sethoddie("");
        setpolo("");
        setbasic("");
        break;
    }
  };
  
  const handlePriceClick = (price) => {
    switch (price) {
      case "0":
        setp1("0");
        setp2("");
        setp3("");
        break;
      case "251":
        setp1("");
        setp2("251");
        setp3("");
        break;
      case "450":
        setp1("");
        setp2("");
        setp3("450");
        break;
      default:
        setp1("");
        setp2("");
        setp3("");
        break;
    }
  };
  

const filterFunction = async (color, type, gender, minPrice, maxPrice) => {
  const filterItems = filterData.filter((product) => {
  
    const lowerCaseColor = color ? color.toLowerCase() : '';
    const lowerCaseType = type ? type.toLowerCase() : '';
    const lowerCaseGender = gender ? gender.toLowerCase() : '';
    
    const priceInRange = (minPrice && maxPrice) ? 
                         (product.price >= minPrice && product.price <= maxPrice) :
                         true;

    return (product.color.toLowerCase().includes(lowerCaseColor) &&
            product.type.toLowerCase().includes(lowerCaseType) &&
            product.gender.toLowerCase().includes(lowerCaseGender) &&
            priceInRange);
  }); 

  // Dispatch action to update the filtered products
  await dispatch(setProducts(filterItems));
};



useEffect(() => {
  filterFunction(color, type, gender, min, max)
}, [color, type, gender, min, max]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);
  return (
    <Box
      sx={{
          p: "30px",

        
      }}
    >
      <Box
        sx={{
          boxShadow: "1px 1px 5px rgb(200,200,200,.8)",
          p: "10px",
         
          display:"grid",
          gridTemplateColumns:{md:"1fr",sm:'1fr 1fr 1fr 1fr',xs:'1fr 1fr'},
          width:{md:'200px',sm:"90vw",xs:'80vw'},
          justifyContent:'space-around',background:"rgb(200,200,200,.5)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: "10px",
          }}
        >
          <h3 className="bold1">Color</h3>
          <Box className="flex"  onClick={()=>{
            setColor("red")
              
            handleColorClick("red")
        }}>
            <Box sx={{width:"15px",height:'15px',background:red?"blue":'gray'}}></Box>
            <p className="bold">Red</p>
          </Box>
          <Box className="flex" onClick={()=>{
            setColor("green")
              
            handleColorClick("green")
        }}>
          <Box sx={{width:"15px",height:'15px',background:green?"blue":'gray'}}>
          
          </Box>
            <p className="bold">Green</p>
          </Box>
          <Box className="flex" onClick={()=>{
              setColor("blue")
              

            handleColorClick("blue")
        }}>
        <  Box sx={{width:"15px",height:'15px',background:blue?"blue":'gray'}}>
            
          </Box>
            <p className="bold">Blue</p>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h3 className="bold1">Gender</h3>
          <Box className="flex" onClick={()=>{
            setgender("men")
             
            handleGenderClick("men")
            
            }}>
          <  Box sx={{width:"15px",height:'15px',background:men?"blue":'gray'}}>
         
          </Box>
            <p className="bold">Men</p>
          </Box>
          <Box className="flex" onClick={()=>{
            
            setgender("women")
            
            handleGenderClick("women")
            
            }}>
          <  Box sx={{width:"15px",height:'15px',background:women?"blue":'gray'}}>
            
          </Box>
            <p className="bold">Women</p>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h3 className="bold1">Price</h3>
          <Box className="flex" onClick={()=>{
            
            setmin(100)
            setmax(250)
            
            handlePriceClick("0")
            }}>
          <  Box sx={{width:"15px",height:'15px',background:p1?"blue":'gray'}}>
            
          </Box>
            <p className="bold">0-Rs250</p>
          </Box>
          <Box className="flex"  onClick={()=>{
           setmax(450)
           setmin(250)
           
            handlePriceClick("251")
            }}>
          <Box sx={{width:"15px",height:'15px',background:p2?"blue":'gray'}}></Box>
            <p className="bold">Rs251-450</p>
          </Box>
          <Box className="flex"  onClick={()=>{
            setmax(600)
            setmin(450)
            
            handlePriceClick("450")
            }}>
          <Box sx={{width:"15px",height:'15px',background:p3?"blue":'gray'}}></Box>
            <p className="bold">Rs450</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h3 className="bold1" >Type</h3>
          <Box className="flex"  onClick={()=>{
            setType("polo")
        
            handleTypeClick("polo")}}>
          <Box sx={{width:"15px",height:'15px',background:polo?"blue":'gray'}}></Box>
            <p className="bold">polo</p>
          </Box>
          <Box className="flex" onClick={()=>{
           setType("hoodie")
           
            handleTypeClick("hoddie")}}>
          <Box sx={{width:"15px",height:'15px',background:hoddie?"blue":'gray'}}></Box>
            <p className="bold">Hoddie</p>
          </Box>
          <Box className="flex" onClick={()=>{
          setType("basic")
          
            handleTypeClick("basic")}}>
          <Box sx={{width:"15px",height:'15px',background:basic?"blue":'gray'}}></Box>
            <p className="bold">Basic</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
