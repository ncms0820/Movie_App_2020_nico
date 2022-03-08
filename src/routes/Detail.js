import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });
  console.log(location.state);
  return <span>{location.state.title}</span>;
}

export default Detail;
