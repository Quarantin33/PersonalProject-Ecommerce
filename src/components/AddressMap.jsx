import React from "react";
import GoogleMaps from "simple-react-google-maps";

const AddressMap = () => {
  const defaultProps = {
    center: {lat: -31.442152, lng: -64.182711},
    zoom: 5,
    markers:[
      {lat: -32.890991, lng: -68.843512},
      {lat: -31.442152, lng: -64.182711}
      //-31.442152, -64.182711
    ]
  };

  const style = {
    height: "76vh",
    width: "600px",
    margin: "120px auto 0px auto",
    border: "1.5px hidden #c95405",
    borderRadius: "13px"
  };

  return (
    <GoogleMaps
      apiKey={process.env.REACT_APP_GOOGLE_MAPS}
      style={style}
      zoom={defaultProps.zoom}
      center={defaultProps.center}
      markers={defaultProps.markers}
    />
  );
};

export default AddressMap;
