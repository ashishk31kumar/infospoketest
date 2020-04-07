
import axios from "axios";
import {
    GET_ALL_MOVIELIST 
  } from "./types";

export const getMovieList = (baseUrl,header) => dispatch => {
    return new Promise((resolve,reject)=>{
    return axios.get(baseUrl,{header}).then(response => {
        if(response.data.results.length>0){
      response.data.results.forEach(function(item,index){
        var newbaseurl ='https://api.themoviedb.org/3/movie/'+item.id+'?api_key=ed160e6991c3907476dd27a94d6e7532';
        return axios.get(newbaseurl,{header})
      .then(response => {
          item.description= response.data.overview;
          item.release_date= response.data.release_date;
          item.original_title = response.data.original_title;
          item.runtime= response.data.runtime;
          item.vote_average= response.data.vote_average;
      })
      .catch(err=>{

      }) 

    })
    setTimeout(
      function() {
        dispatch({
            type: GET_ALL_MOVIELIST,
            payload: response.data.results
          });
      }
      .bind(this),
      120
  );  
    }

    })
    .catch(err=>{
      console.log("error....",err)
    })
  })
  };




