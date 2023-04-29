import { useEffect, useState, useMemo, useRef } from "react";
import Product from "./components/Product";
import "./App.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/productSlice";

// import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.products.products);
  // const cartProducts = useSelector((state) => state.cart);
  const searchInputRef = useRef(null);

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
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchInputRef.current) {
      return products;
    }
    const searchValue = searchInputRef.current.value.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
  }, [products]);

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "100%",
          pl: { sm: "70px", xs: "30px" },
        }}
      >
       

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              
              lg: "30% 30% 30%",
              md:"50% 50%",
              sm: "45% 45%",
              xs: "90%",
            },
            gap: "20px",
            pt: "30px",
            // mt:{md:0,sm:'120px',xs:'260px',lg:0},
            width: {lg:"78%", md: "65%", sm: "95%", xs: "100%" },
            ml: { md: "250px", sm: "none", xs: "none" },
          }}
        >
          {filteredProducts.map((product, index) => (
            <Box key={index}>
              <Product
                src={product.imageURL}
                title={product.name}
                price={product.price}
                alt={product.name}
                cart={product}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
