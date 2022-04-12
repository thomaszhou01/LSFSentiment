import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Test(props: any) {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div className="App">
      <h2>{id}</h2>
    </div>
  );
}
export default Test;
