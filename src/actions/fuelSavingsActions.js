import * as types from '../constants/actionTypes'

import {getFormattedDateTime} from '../utils/dateHelper'

// example of a thunk using the redux-thunk middleware
export function saveFuelSavings (settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS,
      dateModified: getFormattedDateTime(),
      settings
    })
  }
}

export function calculateFuelSavings (settings, fieldName, value) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  }
}
