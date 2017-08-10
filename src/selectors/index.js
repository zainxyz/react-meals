/**
 * List of the days of the week in order from Sunday -> Saturday.
 * @type {Array}
 */
const DAY_ORDER = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/**
 * Normalize the current app state into an array of weeks.
 *
 * NOTE: Bad practice, the state shouldn't be modified heavily.
 *
 * @method normalizedCalendar
 * @param  {Object}           state The current app's state
 * @return {array}                  The normalized app state (in an array format)
 */
const normalizedCalendar = state =>
  DAY_ORDER.map(day => ({
    day,
    meals: Object.keys(state[day]).reduce((meals, meal) => {
      meals[meal] = state[day][meal] ? state[day][meal] : null;
      return meals;
    }, {}),
  }));

export { normalizedCalendar };
