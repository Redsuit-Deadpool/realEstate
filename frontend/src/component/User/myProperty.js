import React, { Fragment, useEffect, useState } from "react";
import "./myProperty.css";
// import WishListItemCard from "../WishList/WishListItemCard";
// import { useSelector, useDispatch } from "react-redux";
// import { removeItemsFromWishList } from "../../actions/wishListAction";
// import { Typography } from "@material-ui/core";
// import HouseIcon from '@mui/icons-material/House';
// import { Link } from "react-router-dom";
// import PropertyCard from "../Home/PropertyCard";

const myProperty = ({ history }) => {
//   const dispatch = useDispatch();
//   const { wishListItems } = useSelector((state) => state.wishList);


// const deleteWishListItems = (id) => {
//   dispatch(removeItemsFromWishList(id)); 
// };

// const { properties } = useSelector((state) => state.properties);

  return (
    
        <Fragment>
          {/* {wishListItems.length === 0 ? (
            <div className="emptywishList">
            <HouseIcon/>
            <Typography>No Properties in your WishList</Typography>
            <Link to="/properties">View Properties</Link>
          </div>
          ) : (
          <Fragment> */}
          <div className="wishListPage">
            
            <h2 className="wishListHeading">My Properties</h2>
            
            {/* <div className="wishListCard">
              {wishListItems && 
              wishListItems.map((property)=>(
                <div className="wishListContainer" >
                    <WishListItemCard property={property} deleteWishListItems={deleteWishListItems}/>
                    <button onClick={()=>deleteWishListItems(property.property)}>Remove</button>
                </div>  
              ))}
            </div> */}

        {/* <div className="properties">
            {properties &&
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
          </div> */}
           
          </div>    
        </Fragment>
        // )}</Fragment>
     
  );
};

export default myProperty;