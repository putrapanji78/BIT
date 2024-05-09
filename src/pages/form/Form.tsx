import React from 'react';
import {View, TextInput, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import useForm from './useForm';
import Styles from './styles'
const Form = () => {
  const {
    data: {
      openStatus,
      openProvince,
      status,
      province,
      provinceData,
      name,
      params,
      statusData,
      loading,
    },
    method: {
      setOpenStatus,
      setOpenProvince,
      setStatus,
      setProvince,
      setProvinceData,
      setName,
      handleAdd,
      handleUpdate,
      setStatusData,
    },
  } = useForm();
  if (loading) {
    return (
      <View
        style={Styles.loadingWrapper}>
          <ActivityIndicator size={50} color={"red"}/>
        </View>
    );
  }
  return (
    <View
      style={Styles.container}>
      <TextInput
        style={Styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="Your name"
        keyboardType="default"
      />
      <View
        style={Styles.provinceWrapper}>
        <DropDownPicker
          open={openProvince}
          value={province}
          items={provinceData}
          setOpen={setOpenProvince}
          setValue={setProvince}
          setItems={setProvinceData}
          placeholder={'Choose Province'}
        />
      </View>
      {!openProvince && (
        <View
          style={Styles.statusWrapper}>
          <DropDownPicker
            open={openStatus}
            value={status}
            items={statusData}
            setOpen={setOpenStatus}
            setValue={setStatus}
            setItems={setStatusData}
            placeholder={'Choose Status'}
          />
        </View>
      )}

      <TouchableOpacity
        onPress={() => (params.action === 'add' ? handleAdd() : handleUpdate())}
        style={Styles.btn}>
        <Text style={Styles.btnText}>
          {params.action === 'add' ? 'ADD' : 'UPDATE'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Form;
