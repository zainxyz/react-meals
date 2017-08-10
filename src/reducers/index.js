import { ADD_RECIPIE, REMOVE_FROM_CALENDAR } from '../actions';

/**
 * The initial state for our reducer
 * @type {Object}
 */
const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
};

const calendar = (state = initialCalendarState, action) => {
  const { day, recipe, meal } = action;

  switch (action.type) {
    case ADD_RECIPIE: {
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        },
      };
    }
    case REMOVE_FROM_CALENDAR: {
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        },
      };
    }
    default:
      return state;
  }
};

export default calendar;
