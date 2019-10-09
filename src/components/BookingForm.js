import React, { Component } from "react";
import "../assets/scss/BookingForm.scss";
import SideBar from "./SideBar";
import PaymentCard from "./PaymentCard";
import NewsLetter from "./NewsLetter";

export default class BookingForm extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="search-wrapper section-padding-100">
          <div className="search-close">
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-content">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Type your keyword..."
                    />
                    <button type="submit">
                      <img src="img/core-img/search.png" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-wrapper d-flex clearfix">
          <SideBar />
          <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="checkout_details_area mt-50 clearfix">
                    <div className="cart-title">
                      <h2>Booking Form</h2>
                    </div>
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            placeholder="FIRST NAME"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            placeholder="LAST NAME"
                            required
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="E-MAIL"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="phone_number"
                            min={0}
                            placeholder="PHONE NUMBER"
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <input
                            type="date"
                            className="form-control"
                            id="company"
                            placeholder="Specific Date"
                          />
                        </div>

                        <div className="col-6 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="company"
                            placeholder="EVENT DURATION (IN HOURS)"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="company"
                            placeholder="EVENT NAME (EX. BIRTHDAY PARTY)"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <input
                            type="text"
                            className="form-control mb-3"
                            id="street_address"
                            placeholder="EVENT ADDRESS"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="TOWN"
                          />
                        </div>

                        <div className="col-12 mb-3">
                          <textarea
                            name="comment"
                            className="form-control w-100"
                            id="comment"
                            cols={30}
                            rows={10}
                            placeholder="ADDITIONAL REQUEST OR EVENT DESCRIPTION"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <PaymentCard />
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}
