import React from 'react'

const Billing = () => {
  return (
    <>
     <section>
                <h5>Choose Billing Type</h5>

                <div>
                  <ul className="nav nav-pills mt-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Billed Monthly
                      </a>
                    </li>
                    <li className="nav-item btn_1">
                      <a className="nav-link" href="#">
                        Billed Quarterly
                      </a>
                    </li>
                    <li className="nav-item btn_1">
                      <a className="nav-link" href="#">
                        Billed Yearly
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="input">
                    <label className="mb-2">
                      How Many Manager Do you Want ?
                    </label>
                    <div class="input-group mb-3">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>
                        <option value="3">40</option>
                      </select>
                    </div>
                  </div>

                  <div className="input">
                    <label className="mb-2">
                      How Many Employee Do you Need ?
                    </label>
                    <div class="input-group mb-3">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>
                        <option value="3">40</option>
                      </select>
                    </div>
                  </div>

                  <div className="input">
                    <label className="mb-2">
                      How Many Storage Do you Need ?
                    </label>
                    <div class="input-group mb-3">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>
                        <option value="3">40</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Billing