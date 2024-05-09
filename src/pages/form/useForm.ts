import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {addList, updateList} from '../list/redux/slice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IList} from '../list/types';

const useForm = () => {
  const [provinceData, setProvinceData] = useState([
    {
      label: '',
      value: '',
    },
  ]);
  const [statusData, setStatusData] = useState([
   {
      label: 'Not Yet',
      value: 'Not Yet',
    },
    {
      label: 'Finished',
      value: 'finished',
    },
  ]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {params} = useRoute<any>();
  const [openProvince, setOpenProvince] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [status, setStatus] = useState('');
  const [province, setProvince] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetProvince = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
      );
      const json = await res.json();
      if (json) {
        setProvinceData(
          json.map((item: any) => {
            return {
              label: item.name,
              value: item.id,
            };
          }),
        );
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  const handleAdd = () => {
    setLoading(true)
    // delay untuk efek loading
    setTimeout(() => {
      const filterProvinceById = provinceData.find(
        item => item.value === province,
      );
      dispatch(
        addList([
          {
            id: new Date().getTime(),
            name,
            province: {
              id: filterProvinceById?.value || '',
              name: filterProvinceById?.label || '',
            },
            status,
          },
        ]),
      );
      setLoading(false)
      navigation.goBack();
    }, 2000);
  };
  const handleUpdate = () => {
    setLoading(true)
     // delay untuk efek loading
    setTimeout(() => {
      const idToUpdate = params?.item?.id;

      const findProvinceById = provinceData.find(
        item => item.value === province,
      );
      const updatedList: IList = {
        id: idToUpdate,
        name,
        province: {
          id: findProvinceById?.value || '',
          name: findProvinceById?.label || '',
        },
        status,
      };
      console.log('');

      dispatch(updateList({id: idToUpdate, newList: updatedList}));
      setLoading(false)
      navigation.goBack();
    }, 2000);
  };
  const setEditData = () => {
    const {item} = params;
    setName(item.name);
    setProvince(item.province.id);
    setStatus(item.status);
  };

  useEffect(() => {
    if (params.action === 'edit' && provinceData[0].label) {
      setEditData();
    }
  }, [params, provinceData]);

  useEffect(() => {
    handleGetProvince();
  }, []);
  return {
    data: {
      openProvince,
      openStatus,
      status,
      province,
      provinceData,
      name,
      params,
      statusData,
      loading,
    },
    method: {
      setStatusData,
      setStatus,
      setOpenProvince,
      setOpenStatus,
      setProvince,
      setProvinceData,
      setName,
      handleAdd,
      handleUpdate,
    },
  };
};
export default useForm;
