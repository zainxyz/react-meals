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
 * A dictionary containing all of the days of the week, in order from Sunday -> Saturday.
 * @type {Object}
 */
export const WEEKDAYS = {
  SUNDAY: 'sunday',
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
  SATURDAY: 'saturday',
};

/**
 * List of the days of the week in order from Sunday -> Saturday.
 * @type {Array}
 */
export const WEEKDAYS_LIST = Object.keys(WEEKDAYS).map(day => WEEKDAYS[day]);

/**
 * List of the meals in order
 * @type {Array}
 */
export const MEAL_ORDER = ['breakfast', 'lunch', 'dinner'];
