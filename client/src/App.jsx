import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,useEffect } from "react";
import { Home } from "./routes/routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/footer";
import LoadingRing  from "./utils/Loader";
import Hero from "./layouts/Hero";
import Cart  from "./pages/Cart";
import { Toaster, toast } from 'sonner';



// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []




function App() {
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  // useEffect(()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart))

  // },[cart])
  // console.log(cart);
  
  // let handleAddToCart = (product) => {
  //   const productSelected = cart.find(
  //     (singleCart) => singleCart._id === product._id
  //   );
  //   if (productSelected) {
  //     setCart(
  //       cart.map((oneItem) =>
  //         oneItem._id === product._id
  //           ? {
  //               ...productSelected,
  //               quantity: productSelected.quantity + 1,
  //             }
  //           : oneItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }    
  // };
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <LoadingRing />
            </div>
          }
        >
          <Navbar />
          <Hero/>
          
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<product/>} />
            <Route path="cart" element={<Cart/>}/>

       </Routes>

            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
          
          <Footer />

        </Suspense>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
