import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {deleteList} from './redux/slice';
import {useMemo, useState} from 'react';

const useList = () => {
  const {list} = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');
  const [statusData, setStatusData] = useState([
    {
      label: 'Not yet',
      value: 'notYet',
    },
    {
      label: 'Finished',
      value: 'finished',
    },
  ]);
  const [openStatus, setOpenStatus] = useState(false);
  const [status, setStatus] = useState('');

  const handleRemoveDuplicate = (data: any) => {
    const uniqueObjects: any = [];
    const ids = new Set();

    data.forEach((obj: any) => {
      if (!ids.has(obj.id)) {
        ids.add(obj.id);
        uniqueObjects.push(obj);
      }
    });

    return uniqueObjects;
  };
  const datas = useMemo(() => {
    if (search) {
      const results: any = [];
      list.lists.forEach((obj: any) => {
        Object.values(obj).forEach((value: any) => {
          if (
            typeof value === 'string' &&
            value.toLowerCase().includes(search.toLowerCase())
          ) {
            results.push(obj);
          }
          if (
            typeof value === 'object' &&
            value.name.toLowerCase().includes(search.toLowerCase())
          ) {
            results.push(obj);
          }
        });
      });
      return handleRemoveDuplicate(results);
    }
    return list.lists;
  }, [search, list]);

  const handleDeleteList = (idDelete: number) => {
    dispatch(deleteList(idDelete));
  };

  return {
    data: {list, navigation, search, datas, status, statusData, openStatus},
    method: {
      handleDeleteList,
      setSearch,
      setOpenStatus,
      setStatusData,
      setStatus,
    },
  };
};
export default useList;
