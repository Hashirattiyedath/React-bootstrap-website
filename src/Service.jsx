import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>

        <div className="container-fluid nav_bg mb-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row g-3">
                {
                  Sdata.map((val, index)=>{
                      return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
