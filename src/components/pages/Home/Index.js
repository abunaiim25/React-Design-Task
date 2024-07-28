import React from "react";
import Billing from "./Billing";
import Feature from "./Feature";
import ContactSales from "./ContactSales";

const index = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="card card_shadow border-0 p-3">
              <section>
                <div style={{ display: "flex" }}>
                  <div className="position-relative mx-3">
                    <div className="position-absolute top-50 start-0 translate-middle">
                      <i
                        className="fas fa-arrow-left"
                        style={{ color: "blue" }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="mx-2">Customize Your Plan</h4>
                </div>
                <hr />
              </section>

              {/* Choose Billing Type */}
              <Billing />

              {/* Choose Feature */}
              <Feature />
            </div>
          </div>

          <div className="col-md-4">
          {/* ContactSales */}
            <ContactSales />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
