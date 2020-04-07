import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data
    };
    this.callBackHandler = this.callBackHandler.bind(this)
  }
  callBackHandler = () => {
    this.props.history.push({
      pathname: "/",
    });
  }
  render() {
    return (
      <div className="App1">
        <div className="margin">
          <div className="row">
            <div className="col-sm-10">
              <h6>Movie Detail</h6>
            </div>
            <div className="col-sm-2">
              <button className="float-right" onClick={() => this.callBackHandler()}><i className='glyphicon glyphicon-arrow-left'></i></button>
            </div>

          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3 ">
              <div class="card" >
                <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Card image cap" height="350" width="350" />
              </div>
            </div>
            <div className="col-sm-9">
              <p>Title: {this.state.data.original_title ? this.state.data.original_title : "Title"} <span >Rating: {this.state.data.vote_average ? this.state.data.vote_average : "Not Rated"}</span> </p>
              <br></br>
              <p>{this.state.data.release_date ? this.state.data.release_date : "Release date not known"} |</p> <span> {this.state.data.runtime ? this.state.data.runtime : ""}</span>
              <br></br>
              <p>Description : {this.state.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SecondPage.propTypes = {};
export default connect(
)(withRouter(SecondPage));