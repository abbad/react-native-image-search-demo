import React from 'react';
import { 
  connect,
} from 'react-redux';
import { 
  bindActionCreators,
} from 'redux';
import { 
  Button, 
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View, 
} from 'react-native';

import SearchForm from './../components/searchForm';
import ListItem from './../components/ListItem';

import {
  fetchImages,
  setSearchText,
  resetImagesStore,
} from './../actions/';

class Images extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfColumns: 2,
    };
  } 

  _onPressSearch = () => {
    let query = this.props.searchForm.text;
    this.props.resetImagesStore();
    this.props.fetchImages(query);
  }

  _onTextChange = (text) => {
    this.props.setSearchText(text);
  }

  _imageClicked = (item) => {
    this.props.navigation.navigate('ImageDetail', {...item});
  }

  _onLayout = (e) => {
    const {width} = Dimensions.get('window')
    if (width <= 400) {
      this.setState({numberOfColumns: 2});
    } else if (width <= 568) {
      this.setState({numberOfColumns: 3});
    } else {
      this.setState({numberOfColumns: 4});
    }
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout} >
        <SearchForm style={{flexDirection: 'row'}}
          onPressSearch={this._onPressSearch} 
          onTextChange={this._onTextChange} 
          searchButtonDisabled={this.props.searchForm.searchButtonDisabled} 
          textValue={this.props.searchForm.text}
        />        
        
        {this._renderResults()}
      </View>
    );
  }

  _renderResults() {
    const flatListKey = this.state.numberOfColumns <= 2 ? 'h' : 'v';

    return this.props.images.hits.length !== 0 ?
      (<FlatList
        key={(flatListKey)}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id}
        data={this.props.images.hits}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.5}
        numColumns={this.state.numberOfColumns}
        renderItem={({item}) => <ListItem style={styles.listItem} imageClicked={this._imageClicked} item={item}/>} 
      />) : (
        <Text> 
          No results found.
        </Text>
    );
  }

  _onEndReached = () => {
    if (!this.props.images.loading) {
      this.props.fetchImages(this.props.searchForm.text, this.props.images.page + 1); 
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  listItem: {
    margin: 5,
    backgroundColor: '#CCC',
  }
});

const mapStateToProps = state => ({
  searchForm: state.searchForm,
  images: state.images
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchImages,
      setSearchText,
      resetImagesStore,
    }, dispatch);
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Images);
