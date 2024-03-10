import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import items from "../data";
import Button from "../../home/button/Button";
import ReactImageMagnify from "react-image-magnify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart, count, setCount }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productTotalInCart, setProductTotalInCart] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity >= 1 ? newQuantity : 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedItem = items.find((item) => item.id === parseInt(id)); //finding item based on id
  if (!selectedItem) {
    return <div className={styles.container}>Product not found</div>; //if item not found
  }

  const addToCart = () => {
    const { id, price, name, description, image1 } = selectedItem;
    const obj = { id, price, name, description, image1, quantity };
    setCart((prevCart) => [...prevCart, ...Array(quantity).fill(obj)]);
    setCount((prevCount) => prevCount + quantity);
    setProductTotalInCart((prevTotal) => prevTotal + quantity);

    console.log("cart element", cart);
    toast.success(` ${quantity} item Added !`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className={styles.mainContainer}>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className={styles.container}>
        <div className={styles.productImg}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: selectedItem.name,
                isFluidWidth: true,
                src: selectedItem.image2,
              },
              largeImage: {
                src: selectedItem.image2,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className={styles.productCont}>
          <h1>{selectedItem.name}</h1>
          <div className={styles.shipping}>
            <h4>Price: ${selectedItem.price}.00</h4>
            <p>+ Free Shipping</p>
          </div>

          <p>{selectedItem.description}</p>
          <div className={styles.addToCart}>
            <input
              type="number"
              min="1"
              max="30"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button text="ADD TO CART" onClick={addToCart} />
          </div>
        </div>
        
      </div>
      <div className={styles.description}>
        <h4>Description</h4>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
