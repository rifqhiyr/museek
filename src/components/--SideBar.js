import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/scss/SideBar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="responsive1">
        <header className="header-area clearfix">
          <nav className="dstyle-nav">
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/musicianpage">Musician List</Link>
              </li>
              <li>
                {this.props.isAuthenticated && (
                  <Link to="/profile">My Profile</Link>
                )}
              </li>
            </ul>
          </nav>
          <div className="dstyle-btn-group mt-30 mb-100"></div>

          <div className="cart-fav-search mb-100">
            {this.props.isAuthenticated && (
              <div>
                <Link to="/bookedlist" className="cart-nav">
                  <img src="img/core-img/cart.png" alt="" /> Booked List{" "}
                  <span>(0)</span>
                </Link>

                <Link to="#" className="fav-nav">
                  <img src="img/core-img/favorites.png" alt="" /> Favourite
                </Link>
              </div>
            )}

            <Link to="#" className="search-nav">
              <img src="img/core-img/search.png" alt="" /> Search
            </Link>
          </div>

          <div className="social-info d-flex justify-content-between">
            <Link to="#">
              <i className="fa fa-pinterest" aria-hidden="true" />
            </Link>
            <Link to="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </Link>
            <Link to="#">
              <i className="fa fa-facebook" aria-hidden="true" />
            </Link>
            <Link to="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(mapStateToProps)(SideBar);
