import AppDispatcher from '../dispatcher/AppDispatcher';
import GreetingActionTypes from '../constants/action-types/GreetingActionTypes';

export function greetingChanged(greetingTarget: string) {
  AppDispatcher.dispatch({
    greetingTarget,
    type: GreetingActionTypes.TARGET_OF_GREETING_CHANGED,
  });
}
