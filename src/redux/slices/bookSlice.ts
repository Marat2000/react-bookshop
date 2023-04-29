import axios from 'axios'
import {createSlice , createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'
import getDarkMode from '../../utils/getDarkMode'

export type Book = {
"imageUrl":string;
"title":string;
"author":string;
"price":number;
"rate":number;
"about":string;
"pages":number;
"language":string;
"categories":number;
"sales":number;
}


export const fetchBook = createAsyncThunk<Book[]>('bookSlice/bookDataStatus' , async()=>{
let {data} = await axios.get<Book[]>("https://64267886d24d7e0de470a14c.mockapi.io/bookshop");
return data
})

interface BookState{
	books:Book[];
	allBooks:Book[];
	isLoaded:boolean;
	darkMode:boolean;
	booksInPage:Book[];
	pageClick:number;
	page:number[];

}

const initialState:BookState={
	books:[],
	allBooks:[],
	isLoaded:false,
	darkMode:getDarkMode(),
	booksInPage:[],
	pageClick:1,
	page:[],
}

const bookSlice=createSlice({
	name:'bookSlice',
	initialState,

	reducers:{
	setBooks(state,action: PayloadAction <Book[]> ){
		state.books=action.payload
	},
	setAllBooks(state,action: PayloadAction <Book[]> ){
		state.allBooks=action.payload
	},
	setDarkMode(state,action: PayloadAction <boolean> ){
		state.darkMode=action.payload
		localStorage.setItem('darkMode' , JSON.stringify(state.darkMode) )
	},
	updateBooksInPage(state){
		state.booksInPage=[...state.books].splice((state.pageClick-1)*6 , 6)
	},
	setPageClick(state,action: PayloadAction <number> ){
		state.pageClick=action.payload
	},
	pageCount(state){
		state.page = [...new Array(Math.ceil(state.books.length / 6))]
		state.page.forEach((el) => state.page.indexOf(el));
	}

	},

 extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
    state.books=initialState.books
	state.isLoaded=false
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
	state.books=[...action.payload]
	state.allBooks=state.books
	state.isLoaded=true
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
    state.books=[]
	state.isLoaded=false
	console.log('ERROR')
    })
  }


})


export const selectBook = (state:RootState) => state.bookSlice
export default bookSlice.reducer
export const { setBooks , setAllBooks ,  setDarkMode , updateBooksInPage , setPageClick , pageCount} = bookSlice.actions