import {createSlice , PayloadAction} from '@reduxjs/toolkit'
import {Book} from './bookSlice'
import {getCartItems} from '../../utils/getCartItems'
import {getOrderItems} from '../../utils/getOrderItems'

export type OrderState ={
	id:string;
	items:Book[]
}

interface CartSliceState{
	cartItems:Book[];
	orders:OrderState[]
		

}

const initialState:CartSliceState={
	cartItems:getCartItems(),
	orders:getOrderItems(),


}

const cartSlice=createSlice({
	"name":"cart",
	initialState,
	reducers:{
		setCartItems(state,action:PayloadAction <Book[]>){
			state.cartItems=action.payload
			localStorage.setItem('cart' , JSON.stringify( state.cartItems))
		},
		setOrders(state,action:PayloadAction <OrderState[]>){
			state.orders=action.payload
		}
	}
})

export default cartSlice.reducer
export const {  setCartItems , setOrders } = cartSlice.actions