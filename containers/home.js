import React from 'react';
import { 
  connect,
} from 'react-redux';
import { 
  bindActionCreators,
} from 'redux';
import { 
  Image,
  StyleSheet, 
  Text,
  View,
} from 'react-native';

import {
  fetchImages,
  setSearchText,
  resetImagesStore,
} from './../actions/';

import SearchForm from './../components/searchForm';

class Home extends React.Component {

  onPressSearch = () => {
    const query = this.props.searchForm.text;
    this.props.resetImagesStore()
    this.props.fetchImages(query);
    this.props.navigation.navigate('Results');
  }

  onTextChange = (text) => {
    this.props.setSearchText(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/Pixabay-logo.png')} />
        <SearchForm 
          onPressSearch={this.onPressSearch} 
          onTextChange={this.onTextChange} 
          searchButtonDisabled={this.props.searchForm.searchButtonDisabled} 
          textValue={this.props.searchForm.text}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  searchForm: state.searchForm
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchImages,
      setSearchText,
      resetImagesStore,
    }, dispatch
  );
};

export default connect(() => mapStateToProps, mapDispatchToProps)(Home);
