import {StatusBar, StyleSheet} from 'react-native';
import {color} from '../../assets/global_style/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: color.white,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop:5,
    paddingBottom:50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemStyle: {
    padding: 10,
  },
  flatList: {
    width: '100%',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderColor: color.black,
    backgroundColor: color.white,
    borderRadius: 20,
    borderWidth: 1,
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    color: color.black,
    width: '90%',
  },
  loader: {
    height: '100%',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
