import React from 'react'
import { getPriceAfterDiscount } from '../Utility/CommonLetterLowerToUpper';
import { useDispatch } from 'react-redux';
import CartSlice from '../feature/cart/CartSlice';

function FeaturedSingleProduct(props) {
  const dispatch = useDispatch();
  function addToCart_click(e) {
    alert('item add Sucessfull');
    dispatch(CartSlice.actions.addIeamToCart({ product: props.product, quantity: 1 }));
  }
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">

            <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
            {/* debugger; */}
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="">
              {props.product.title}
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>{props.product.price}</h5>
              <h6 className="text-muted ml-2">
                <del>{getPriceAfterDiscount(props.product.price, props.product.discountPercentage)}</del>
              </h6>
              <button onClick={addToCart_click} className='m-2 btn btn-primary'>Add to car</button>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedSingleProduct;
