import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import SecondPage from "./SecondPage";


class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
        this.showDetail = this.showDetail.bind(this)
    }
    showDetail = () => {
        this.props.history.push({
            pathname: "/detail",
            state: {
                data: this.state.data
            }
        });
    }
    render() {
        var data = this.state.data
        return (
            <div onClick={this.showDetail}>
                <div class="card card-border" >
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Card image cap" width="350" />
                    <br />
                    <div class="card-body">
                        <p>{this.state.data.original_title ? this.state.data.original_title : ""}<span class="pull-right">{this.state.data.vote_average ? this.state.data.vote_average : 0}</span></p>

                        <p> Description...</p>

                    </div>
                </div>
            </div>
        );
    }
}
FirstPage.propTypes = {};
export default connect(
)(withRouter(FirstPage));