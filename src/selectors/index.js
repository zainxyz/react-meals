const DAY_ORDER = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const normalizedCalendar = state =>
  DAY_ORDER.map(day => ({
    day,
    meals: Object.keys(state[day]).reduce((meals, meal) => {
      meals[meal] = state[day][meal] ? state[day][meal] : null;
      return meals;
    }, {}),
  }));

export { normalizedCalendar };
