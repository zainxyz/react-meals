import { combineReducers } from 'redux';

import food from './food';
import calendar from './calendar';

/**
 * NOTE: Taken from Redux Docs...
 *
 * In a more complex app, you're going to want different entities to reference each other.
 * We suggest that you keep your state as normalized a possible, without any nesting.
 * Keep every entity in an object stored with an ID as a key, and use IDs to reference
 * it from other entities, or lists.
 *
 * Normalization is the process of removing duplicate pieces of data, and making sure that the
 * data is as shallow as possible. Not only does this allow applications to maintain the
 * 'single source of truth' in the store's state -- reducer logic that updates the state
 * is also kept clean and reasonable. Ultimately, normalizing your Redux store will lead to
 * more efficient and consistent queries.
 */

export default combineReducers({
  food,
  calendar,
});
