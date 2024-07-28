import React from "react";

const ContactSales = () => {
  return (
    <>
      <div className="contact sticky-top">
          <div className="card card_shadow border-0 p-3">
            <h4>Your Plan</h4>
            <hr />

            <div className="mt-3">
              
              <p>
                <input
                  type="checkbox"
                  name="business"
                  className="mx-2 "
                  checked
                />
                Lorem Ipsum Dolor
              </p>

              <p>
                <input
                  type="checkbox"
                  name="business"
                  className="mx-2 "
                  checked
                />
                Lorem Ipsum Dolor ipsum
              </p>

              <p>
                <input
                  type="checkbox"
                  name="business"
                  className="mx-2 "
                  checked
                />
                Lorem Ipsum Dolor ipsum omit
              </p>

              <p>
                <input
                  type="checkbox"
                  name="business"
                  className="mx-2 "
                  checked
                />
                Lorem Ipsum Dolor ipsum omit Notor Choose
              </p>
              
            </div>

            
          </div>
          <button className="w-100">Contact Sales</button>
        </div>
    </>
  );
};

export default ContactSales;
