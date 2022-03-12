import React, { useState } from "react";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 22.224441, lng: 70.798437 };
const DefaultZoom = 10;

export default function GoogleMap() {
  const [defaultLocation] = useState(DefaultLocation);

  const [setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  // function handleResetLocation() {
  //   setDefaultLocation({ ...DefaultLocation });
  //   setZoom(DefaultZoom);
  // }

  return (
    <>
      <MapPicker defaultLocation={defaultLocation} zoom={zoom} onChangeLocation={handleChangeLocation} onChangeZoom={handleChangeZoom} apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI" />
    </>
  );
}
