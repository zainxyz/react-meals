export const ADD_RECIPIE = 'ADD_RECIPIE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export const addRecipe = ({ day, recipe, meal, }) => ({
  type: ADD_RECIPIE,
  recipe,
  day,
  meal,
});

export const removeFromCalendar = ({ day, meal, }) => ({
  type: REMOVE_FROM_CALENDAR,
  day,
  meal,
});
