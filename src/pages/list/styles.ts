import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  list: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    width: '20%',
    textAlign: 'center',
  },
  btnAdd: {
    padding: 6,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    marginRight: '4%',
    marginTop: 16,
  },
  add: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  search:{
    width: '80%',
    height: 40,
    alignSelf: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  headerWrapper:{
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  delete:{
    fontSize: 14, color: 'white', fontWeight: 'bold'
  }
});
export default Styles;
