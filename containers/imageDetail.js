import React from 'react';
import { 
  connect,
} from 'react-redux';
import { 
  Image,
  StyleSheet,
  Text,
  View, 
} from 'react-native';

class ImageDetail extends React.Component {

  _onPressSearch = () => {
    let query = this.props.searchForm.text;
    this.props.fetchImages(query);
  }

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Image 
          source={{uri: params.webformatURL}}  
          style={{flex:0, width:300, height: 300}}
        /> 
        <Text> Uploaded by: {params.user} </Text> 
        <Text> Tags: {params.tags} </Text> 
        <Text> Resolution: {params.imageHeight}x{params.imageWidth} </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => (state);

export default connect(() => mapStateToProps, {})(ImageDetail);
