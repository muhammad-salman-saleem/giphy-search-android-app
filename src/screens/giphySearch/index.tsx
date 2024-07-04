import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchGifs} from '../../redux/actions/giphyApiSlice/SearchApiSlice';
import {styles} from './styles';
import {color} from '../../assets/global_style/colors';
import {debounce} from 'lodash';

const GiphySearch = () => {
  const [search, setSearch] = useState('');
  const [imageError, setImageError] = useState(false);
  const {gifs, loading, error} = useSelector(
    (state: RootState) => state.giphyAPI,
  );

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGifs({query: ''}));
  }, [dispatch]);

  const debouncedSearch = debounce(
    (text: string) => {
      dispatch(fetchGifs({query: text}));
    },
    1000,
    {leading: false, trailing: true},
  );

  const searchFilter = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const handleError = () => {
    setImageError(true);
  };

  const ItemView = ({item}: {item: any}) => {
    return (
      <View>
        {imageError ? (
          <Text>Image failed to load</Text>
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: item.images.preview_gif.url,
            }}
            onError={handleError}
          />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.textInput}
            onChangeText={e => searchFilter(e)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor={color.gray}
          />
          <TouchableOpacity onPress={() => searchFilter(search)}>
            <Image
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png',
              }}
              style={styles.searchImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flatList}>
          {loading ? (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color={color.gray}
            />
          ) : error ? (
            <Text>Error: {error}</Text>
          ) : (
            <FlatList
              data={gifs}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={ItemView}
              numColumns={3}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GiphySearch;
