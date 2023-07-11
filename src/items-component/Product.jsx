import Image1 from "../images/image-product-1.jpg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import Description from "../text-component/Description";

const Product = () => {
  return (
    <div className="page-view">
      <div className="product">
        <img src={Image1} className="main-image" />
        <div className="product-thumb">
          <img src={Image1Thumb} />
          <img src={Image2Thumb} />
          <img src={Image3Thumb} />
          <img src={Image4Thumb} />
        </div>
      </div>
      <Description />
    </div>
  );
};

export default Product;
