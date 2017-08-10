/**
 * Add Recipe Constant
 * @type {string}
 */
export const ADD_RECIPIE = 'ADD_RECIPIE';
/**
 * Remove Recipe Constant
 * @type {string}
 */
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

/**
 * An action to add a recipe
 * @method addRecipe
 * @param  {string}  day    The day of the week
 * @param  {Object}  recipe The recipe to add to the day
 * @param  {string}  meal   The meal to select (breakfast, lunch, dinner)
 * @return {Object}         The action
 */
export const addRecipe = ({ day, recipe, meal }) => ({
  type: ADD_RECIPIE,
  recipe,
  day,
  meal,
});

/**
 * An action to remove a recipe
 * @method removeRecipe
 * @param  {string}  day    The day of the week
 * @param  {string}  meal   The meal to select (breakfast, lunch, dinner)
 * @return {Object}         The action
 */
export const removeRecipe = ({ day, meal }) => ({
  type: REMOVE_RECIPE,
  day,
  meal,
});
