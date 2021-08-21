import React,{ useState, useEffect} from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import "./Services.css";
function Services() {
    const [serviceData, getServiceData] = useState([]);
    useEffect(() => {
        fetch('https://fast-reef-04000.herokuapp.com/getService')
        .then(res => res.json())
        .then(data =>{
            getServiceData(data)
        })
    }, [])
  return (
    <section id="service">
      <div className="container py-5">
        <div className="service-title ">
          <h3 className="common-color">PhotoGraphy Studio</h3>
          <h1 className=" " style={{ marginTop: "-12px", color: "#297F87" }}>
            Our Services
          </h1>
        </div>
        {/* <div className="common-border"></div> */}
        <div className="main-serviceArea py-5 mt-3">
          <div class="row row-cols-1 row-cols-md-4 g-2">
            {
                serviceData.map(data => <ServiceDetails serviceData={data}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
