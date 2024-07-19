import React from "react";

const Contact = () => {
    return (
        <div className=" box">
            <div className="mt-5 contactform">
                <h1 className="text-center bold m-28 mb-3">Contact Us</h1>
                <form className=" container m-20">
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="First name"
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Contact"
                            />
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col">
                            <textarea
                                name="address"
                                placeholder="Address"
                                className="form-control"
                                cols={100}
                                rows={2}
                                id=""></textarea>
                        </div>
            </div>
            <div className="row mx-auto text-center">
              <div className="col mx-auto">
                <button className="btn btn-success w-50">Submit</button>
              </div>
            </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
