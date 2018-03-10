import React, {PureComponent} from 'react';
import {
  Image,  
  TouchableHighlight,
} from 'react-native';

export default class ListItem extends PureComponent {
  render() {
    return (  
      <TouchableHighlight 
        onPress={this.props.imageClicked.bind(null, this.props.item)}  
        style={this.props.style}
      >
        <Image 
          source={{uri: this.props.item.previewURL}} 
          style={{width: this.props.item.previewWidth, height: this.props.item.previewHeight}} 
        /> 
      </TouchableHighlight>);
  }
}
