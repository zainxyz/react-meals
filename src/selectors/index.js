import { WEEKDAYS_LIST } from '../constants';

/**
 * Normalize the current app state into an array of weeks.
 *
 * NOTE: Bad practice, the state shouldn't be modified heavily.
 *
 * @method normalizedCalendar
 * @param  {Object} state The current app's state
 * @return {Array}        The normalized app state (in an array format)
 */
const normalizedCalendar = ({ calendar, food }) =>
  WEEKDAYS_LIST.map(day => ({
    day,
    meals: Object.keys(calendar[day]).reduce((meals, meal) => {
      meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
      return meals;
    }, {}),
  }));

export { normalizedCalendar };
