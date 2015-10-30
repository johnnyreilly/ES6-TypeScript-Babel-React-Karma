import FluxStore from './FluxStore';
import GreetingActionTypes from '../constants/action-types/GreetingActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ModulesState from '../types/ModuleState';

interface GreetingState {
  targetOfGreeting: string;
}

class GreeterStore extends FluxStore<GreetingState> {
  constructor(dispatcher) {
    super(dispatcher, () => ({
      targetOfGreeting: 'James'
    }));
  }

  getState() {
    return this._state
  }

  _onDispatch(action) {
    switch(action.type) {
      case GreetingActionTypes.TARGET_OF_GREETING_CHANGED:
        this._state.targetOfGreeting = action.targetOfGreeting;
        moduleStoreInstance.emitChange();
        break;
    }
  }
}

const moduleStoreInstance = new GreeterStore(AppDispatcher);
export default moduleStoreInstance;
