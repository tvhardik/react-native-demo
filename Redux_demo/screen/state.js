import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 'App Data',
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 50}}>{this.state.data}</Text>
        <Button
          title="Submit"
          onPress={() => {
            this.setState({data: 'New data'});
          }}
        />
      </View>
    );
  }
}

export default App;
// state using class componetect
