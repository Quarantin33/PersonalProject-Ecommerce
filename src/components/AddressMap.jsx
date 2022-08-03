import React from "react";
import GoogleMaps from "simple-react-google-maps";

const AddressMap = () => {
  const defaultProps = {
    center: { lat: 29.564575, lng: -98.549488 },
    zoom: 15,
  };

  const style = {
    height: "76vh",
    width: "600px",
    margin: "120px auto 0px auto"
  };

  return (
    <GoogleMaps
      apiKey={process.env.REACT_APP_GOOGLE_MAPS}
      style={style}
      zoom={defaultProps.zoom}
      center={defaultProps.center}
      markers={[
        defaultProps.center
      ]}
    />
  );
};

export default AddressMap;
