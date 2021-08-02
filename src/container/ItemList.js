/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { fetchRecipes } from '../action';
import { fetchIngredients } from '../action/ingredient';

const ItemList = ({ recipes, fetchRecipes }) => {
  console.log(recipes);
  const [fil, setFil] = useState('');
  useEffect(() => {
    fetchRecipes();
    fetchIngredients();
  }, []);

  const search = (recipes) => recipes.recipes.results.filter((result) => result.title.toLowerCase().indexOf(fil) > -1);
  return (
    <div>
      <input type="text" placeholder="Search for recipes" value={fil} onChange={(e) => setFil((e.target.value).toLowerCase())} />
      <Recipe recipes={search(recipes)} />
    </div>
  );
};
export const mapStateToProps = (state) => ({
  recipes: state.recipe,
  ingredients: state.ingredient,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  fetchIngredients: () => dispatch(fetchIngredients(1003464)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
