import { useDispatch } from 'react-redux'

import { AppDispatch } from './store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export { useAppDispatch }

export { useSelector as useAppSelector } from 'react-redux'