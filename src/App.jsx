import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Root from "./Layout/Root";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/Single Product/SingleProduct";
import Bikes from "./Pages/Bikes/Bikes";
import SingleBike from "./Pages/Single Bike/SingleBike";
import Blogs from "./Pages/Blogs/Blogs";
import SingleBlog from "./Pages/Single Blog/SingleBlog";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="bikes/:id" element={<SingleBike />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
