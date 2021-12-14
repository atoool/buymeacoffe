import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import MasonryList from 'react-native-masonry-list';
import {Loader, Wrapper} from '../components';
import {Colors, height} from '../styles';
import {AppContext} from '../contexts';
import {useFetch} from '../hooks';

export const Home = () => {
  const [searchText, setSearchText] = React.useState('');
  const [offset, setOffset] = React.useState(0);
  const [isSearch, setSearch] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);

  const {
    trending = [],
    setTrendOffset,
    trendOffset,
    refetch,
    isRefetching,
  } = React.useContext(AppContext);

  const onChangeText = txt => {
    setSearch(false);
    setSearchResult([]);
    setOffset(0);
    setSearchText(txt);
  };

  const onSearch = () => {
    if (searchText && searchText !== '') {
      setSearch(true);
    }
  };

  const query = useFetch(
    'search',
    offset,
    searchResult,
    setSearchResult,
    isSearch,
    searchText,
  );

  const onEndReached = () => {
    if (isSearch) {
      setOffset(offset + 50);
      query?.refetch();
    } else {
      setTrendOffset(trendOffset + 50);
      refetch();
    }
  };

  const isLoading = isSearch ? query?.isRefetching : isRefetching;
  const images = isSearch ? searchResult : trending;

  return (
    <Wrapper>
      <View style={styles.searchBox}>
        <Searchbar
          value={searchText}
          onChangeText={onChangeText}
          onEndEditing={onSearch}
        />
      </View>
      <MasonryList
        key={isSearch}
        images={images}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        masonryFlatListColProps={{
          getItemLayout: (data, index) => ({
            length: height,
            offset: height * index,
            index,
          }),
          showVerticalIndicator: false,
        }}
      />
      {isLoading && <Loader style={styles.loader} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    height: 100,
    backgroundColor: Colors.header,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  loader: {
    bottom: 40,
    position: 'absolute',
    alignSelf: 'center',
  },
});
