import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
function Map() {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: 400,
//     latitude: 23.685,
//     longitude: 90.3563,
//     zoom: 8,
//   });
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.129524412405!2d91.82596226382222!3d24.8998373168052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1629536863094!5m2!1sen!2sbd"
        width="600"
        height="450"
        frameborder="0"
       
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}
 
export default Map;
