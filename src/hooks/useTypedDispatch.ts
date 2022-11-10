import { useDispatch } from 'react-redux'
import { TAppDispatch } from '../store'

export const useTypedDispatch: () => TAppDispatch = useDispatch
