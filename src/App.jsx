import React, {Component} from 'react';
import Counter from './Counter.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 10,
      c: 100,
    }
    this.set = this.set.bind(this);
  }

  set(key, value) {
    this.setState({
      [key]: value
    });
  }
 
  render() {
    return (
      <div>
        <div>Hello!</div>
        <h1>Hello React :)</h1>
        <Counter
          name="A"
          value={this.state.a}
          setValue={v => this.set('a', v)}
          step={1}
        />
        <Counter
          name="B"
          value={this.state.b}
          setValue={v => this.set('b', v)}
          step={10}
        />
        <Counter
          name="C"
          value={this.state.c}
          setValue={v => this.set('c', v)}
          step={100}
        />
      </div>
    );
  }
}
export default App;
