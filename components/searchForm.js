import React from 'react';
import {  
  TextInput, 
  Button,
  View, 
} from 'react-native';

export default class SearchForm extends React.Component {
  render() {
    return(
      <View style={this.props.style}> 
        <TextInput
          style={{height: 40}}
          placeholder="Type your keywords here..."
          onChangeText={this.props.onTextChange}
          value={this.props.textValue}
        />

        <Button 
          color="#841584" 
          title="Search"
          disabled={this.props.searchButtonDisabled}
          onPress={this.props.onPressSearch}
        />
      </View>
    );
  }
}
