import { ADD_RECIPIE } from '../constants';

/**
 * The food reducer
 * @method food
 * @param  {Object} [state={}] The current app state
 * @param  {Object} action     The dispatched action
 * @return {Object}            The updated state based on the passed-in action
 */
const food = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECIPIE: {
      const { recipe } = action;
      return {
        ...state,
        [recipe.label]: recipe,
      };
    }
    default:
      return state;
  }
};

export default food;
