import React from "react";
class Name extends React.Component {
  render() {
    return (
      <div className="name">
        <div className=" containt d-flex justify-content-between mt-2 mx-2">
          <h2 className="text-white text-weight-bold ">1435</h2>
          <h3 className="text-white text-weight-bold ">11/22</h3>
        </div>
        <div className="logo d-flex justify-content-between ">
          <h2 className="text-white text-weight-bold text-uppercase mx-2 ">
            Maherhedhili
          </h2>
          <img
            className="master-img"
            src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"
          />
        </div>
      </div>
    );
  }
}
export default Name;
