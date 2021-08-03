/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchRecipeRequests = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchRecipeSuccess = (recipes) => ({
  type: FETCH_USER_SUCCESS,
  payload: recipes,

});

export const fetchRecipesFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,

});

export const fetchRecipes = () => (dispatch) => {
  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  dispatch(fetchRecipeRequests);
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}=20`)
    .then((response) => {
      const recipes = response.data;
      dispatch(fetchRecipeSuccess(recipes));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchRecipesFailure(errorMsg));
    });
};
