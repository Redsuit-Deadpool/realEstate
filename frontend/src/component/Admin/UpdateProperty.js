import React, { Fragment, useEffect, useState } from "react";
// import "./NewProperty.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProperty, getPropertyDetails } from "../../actions/propertyAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BusinessIcon from '@mui/icons-material/Business';
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { UPDATE_PROPERTY_RESET } from "../../constants/propertyConstants";

const UpdateProperty = ({ history,match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {error , property} = useSelector((state) => state.propertyDetails);

  const { loading, error:updateError, isUpdated } = useSelector((state) => state.property);

  const [sellRent, setSellRent] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [city,setCity] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

const propertyTypes = [
    "Apartement",
    "House",
    "Villa",
    "Shop",
    "Plot",
  ];

  const propertyId = match.params.id;

  useEffect(() => {

    if (property && property._id !== propertyId) {
        dispatch(getPropertyDetails(propertyId));
      } else {
        setSellRent(property.sellRent);
        setDescription(property.description);
        setPrice(property.price);
        setPropertyType(property.propertyType);
        setCity(property.city);
        setOldImages(property.images);
      }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors());
      }

    if (isUpdated) {
      alert.success("Property Updated Successfully");
      history.push(`/property/${propertyId}`);
      dispatch({ type: UPDATE_PROPERTY_RESET });
    }
  }, [dispatch, alert, error, history, isUpdated, propertyId, property, updateError]);

  const createPropertySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("sellRent", sellRent);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("propertyType", propertyType);
    myForm.set("location", location);
    myForm.set("city",city);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProperty(propertyId , myForm));
  };

  const createPropertyImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Register Property" />
      
        <div className="newPropertyContainer">
          <form
            className="createPropertyForm"
            encType="multipart/form-data"
            onSubmit={createPropertySubmitHandler}
          >
            <h1>Register Property</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Sell/Rent"
                required
                // value={name}
                onChange={(e) => setSellRent(e.target.value)}
              />
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Choose PropertyType</option>
                {propertyTypes.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <BusinessIcon />
              <input
                type="text"
                placeholder="Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Property Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            
            <div>
              <CurrencyRupeeIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div id="createPropertyFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createPropertyImagesChange}
                multiple
              />
            </div>

            <div id="createPropertyFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Property Preview" />
              ))}
            </div>

            <Button
              id="createPropertyBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
     
    </Fragment>
  );
};

export default UpdateProperty;

