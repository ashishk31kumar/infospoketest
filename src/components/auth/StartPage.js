import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import FirstPage from "./FirstPage";


import {
  getMovieList
} from "../../actions/authActions";

class StartPage extends Component {
  constructor() {
    super();
    this.state = {
      movieArr: [],
      searchText: ""
    };
     this.search=this.search.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange = (event) => {
    this.setState({ searchText: event.target.value });

  }
  search = () => {
  }
  componentDidMount() {
    var headebaseUrlrs = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDE2MGU2OTkxYzM5MDc0NzZkZDI3YTk0ZDZlNzUzMiIsInN1YiI6IjVlOGFkNWVhZmZkNDRkMDAxODFhNzA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IYBXp63rKf6lKuE-DLaFl6HjEFBIRdqhE_K6v_qmkaA', 'Content-Type': 'application/json' };
    const baseUrl = 'https://api.themoviedb.org/3/movie/550/lists?api_key=ed160e6991c3907476dd27a94d6e7532';

    this.props.getMovieList(baseUrl, headebaseUrlrs)
      .then(response => {
        this.setState({ movieArr: response })
      })
      .catch(error => {

      })
  }


  render() {
    var movieListArr = []
    if (this.props.movieList.length > 0) {
      movieListArr = this.props.movieList
    }
    return (
      <div>
        <div className="App">
          <div className="row">
            <div className="col-sm-10">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" onChange={this.onChange} />
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit" onClick={this.search}>
                      <i className="glyphicon glyphicon-search fa-lg"></i>
                    </button>
                  </div>
                </div>
              </form>


            </div>
            <div className="col-sm-1">

              <button className="float-right"><i className='glyphicon glyphicon-home fa-lg'></i></button>
            </div>
          </div>
          <hr />

          <div className="row">
            {movieListArr.length > 0 && movieListArr.map((item, index) => (
              <div className={`${index % 4 == 0 ? "clearfix" : ""} col-md-3 margin`}>
                <div className="boxModel">
                  <FirstPage data={item} />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>


    );
  }
}

StartPage.propTypes = {};

const mapStateToProps = state => ({

  movieList: state.movieList.movieList
});
const mapDispatchToProps = dispatch => ({
  getMovieList: (baseUrl, headers) => dispatch(getMovieList(baseUrl, headers)),

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StartPage));