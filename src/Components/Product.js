import React from "react";
import Product1 from "../Images/image-product-1.jpg";
import Product2 from "../Images/image-product-2.jpg";
import Product3 from "../Images/image-product-3.jpg";
import Product4 from "../Images/image-product-4.jpg";
import { FaCartPlus } from "react-icons/fa";
class Product extends React.Component {
  state = {
    activeImg: `${Product1}`,
    numItem: 0,
  };

  decreasFun() {
    let numItem = this.state.numItem;
    this.setState({
      numItem: numItem === 0 ? 0 : numItem - 1,
    });
  }

  increasFun() {
    let numItem = this.state.numItem;
    this.setState({
      numItem: numItem + 1,
    });
  }

  changeImg(srcImg) {
    let bigImg = document.getElementById("big-img");
    bigImg.src = srcImg;
    this.setState({
      activeImg: srcImg,
    });
    console.log(srcImg);
  }

  render() {
    return (
      <div className="container">
        <div className="product-section">
          <div className="product-img">
            <div className="img-big">
              <img src={Product1} alt="." id="big-img" />
            </div>
            <div className="img-sm">
              <div className="img">
                <img
                  className={this.state.activeImg === Product1 ? "active" : ""}
                  onClick={() => this.changeImg(Product1)}
                  src={Product1}
                  alt="."
                />
              </div>
              <div className="img">
                <img
                  className={this.state.activeImg === Product2 ? "active" : ""}
                  onClick={() => this.changeImg(Product2)}
                  src={Product2}
                  alt="."
                />
              </div>
              <div className="img">
                <img
                  className={this.state.activeImg === Product3 ? "active" : ""}
                  onClick={() => this.changeImg(Product3)}
                  src={Product3}
                  alt="."
                />
              </div>
              <div className="img">
                <img
                  className={this.state.activeImg === Product4 ? "active" : ""}
                  onClick={() => this.changeImg(Product4)}
                  src={Product4}
                  alt="."
                />
              </div>
            </div>
          </div>
          <div className="product-info">
            <p className="head-p">sneakers componey</p>
            <h1>fall limited edition sneakers</h1>
            <p className="item-info">
              these low-profile sneakers are your perfect casual wear companion.
              feature a durable rubber outer sole. they'll withstand everything
              the weather can offer
            </p>
            <h4>
              $125.00 <span>50%</span>
            </h4>
            <h6>$250.00</h6>
            <div className="cart-btn">
              <p>
                <span onClick={() => this.decreasFun()} className="decreas">
                  -
                </span>{" "}
                {this.state.numItem}{" "}
                <span onClick={() => this.increasFun()} className="increas">
                  +
                </span>
              </p>
              <button>
                <span>
                  <FaCartPlus />
                </span>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
