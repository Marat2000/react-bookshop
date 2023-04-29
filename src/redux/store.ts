import {configureStore } from "@reduxjs/toolkit"
import {useDispatch} from 'react-redux'
import filterReducer from './slices/filterSlice'
import settingReducer from './slices/settingSlice'
import bookReducer from './slices/bookSlice'
import cartReducer from './slices/cartSlice'

export const store =configureStore({
	reducer:{filter: filterReducer  , setting:settingReducer , bookSlice:bookReducer , cart:cartReducer },
	
}) 
 
export type RootState=ReturnType<typeof store.getState >
export const useAppDispatch =()=>useDispatch<typeof store.dispatch>()