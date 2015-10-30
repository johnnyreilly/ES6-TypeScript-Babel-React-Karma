import * as React from 'react/addons';
import GreetingStore from '../stores/GreetingStore';
import ModuleSelector from './ModuleSelector';
import * as GreetingActions from '../actions/GreetingActions';
import ModulesState from '../types/ModuleState';

interface State {
  targetOfGreeting: string
}

class App extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._handleTargetOfGreetingChange = this._handleTargetOfGreetingChange.bind(this);
    this.state = this._getStateFromStores();
  }

  componentWillMount() {
    GreetingStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GreetingStore.removeChangeListener(this._onChange);
  }

  render() {
    const { modulesState } = this.state;
    const optionsSelected = Object.assign({}, ...Object.keys(modulesState).map(mod => ({ [`${mod}`]: modulesState[mod].isSelected })));
    const requiredCldrJson = determineRequiredCldrData(optionsSelected).map(file => <li key={ file }>{ file }</li>);
    const requiredCldrGlobalizeFiles = determineRequiredCldrGlobalizeFiles(optionsSelected).map(file => <li key={ file }>{ file }</li>);

    return (
      <div className="container-fluid">
        <h1>Welcome to Globalize &middot; So What&#39;cha Want</h1>

        <p>Tell me what <a href="https://github.com/jquery/globalize">Globalize</a> modules you want to use, I&#39;ll tell you what you need and in the order you need it.</p>

        <ModuleSelector modulesState={ modulesState } handleSelectionChange={ this._handleTargetOfGreetingChange } />

        <div className="row">
          <div className="col-md-6">
            <h4>Required CLDR / Globalize files</h4>
            <ul>
              { requiredCldrGlobalizeFiles }
            </ul>
          </div>

          <div className="col-md-6">
            <h4>Required CLDR JSON</h4>
            <ul>
              { requiredCldrJson }
            </ul>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(this._getStateFromStores());
  }

  _handleTargetOfGreetingChange(greetingTarget) {
    GreetingActions.greetingChanged(greetingTarget);
  }

  _getStateFromStores() {
    return GreetingStore.getState();
  }
}

export default App;
