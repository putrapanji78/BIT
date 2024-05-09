import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Styles from './styles';
import useList from './useList';
const List = () => {
  const {
    data: {navigation, search, datas},
    method: {handleDeleteList, setSearch},
  } = useList();
  return (
    <View style={Styles.container}>

      <TouchableOpacity
        onPress={() => navigation.navigate('form', {action: 'add'})}
        style={Styles.btnAdd}>
        <Text style={Styles.add}>ADD</Text>
      </TouchableOpacity>
      <TextInput
        style={Styles.search}
        onChangeText={setSearch}
        value={search}
        placeholder="ex: name ,province, status"
        keyboardType="default"
      />
      <View
        style={Styles.headerWrapper}>
        <Text style={Styles.list}>Name</Text>
        <Text style={Styles.list}>Province</Text>
        <Text style={Styles.list}>Status</Text>
        <View
          style={StyleSheet.flatten({
            padding: 6,
            backgroundColor: 'transparent',
            width: 55,
          })}
        />
      </View>
      {(datas || []).map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('form', {item, action: 'edit'})}
          style={Styles.listWrapper}>
          <Text
            style={StyleSheet.flatten({
              ...Styles.list,
              textDecorationLine: item.status.toLowerCase() === "finished" ? 'line-through' : 'none',
              textDecorationStyle: 'solid',
            })}>
            {item.name}
          </Text>
          <Text
            style={StyleSheet.flatten({
              ...Styles.list,
              textDecorationLine: (item.status).toLowerCase() === "finished" ? 'line-through' : 'none',
              textDecorationStyle: 'solid',
            })}>
            {item.province.name}
          </Text>
          <Text style={Styles.list}>
            {item.status.toUpperCase()}
          </Text>
          <TouchableOpacity
            onPress={() => handleDeleteList(item.id)}
            style={{
              padding: 6,
              backgroundColor: 'red',
            }}>
            <Text style={Styles.delete}>
              Delete
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default List;
