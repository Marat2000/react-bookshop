import {createSlice, PayloadAction} from '@reduxjs/toolkit' 
import {RootState} from '../store'


interface FilterState{
	sort:number;
	sortClicked:boolean;
	desc:boolean;
	sortArray:string[];
	category:number;
	categoryClicked:boolean;
	categoryArray:string[];
	searchInput:string;
}    

const initialState:FilterState={
	sort:0,
	sortClicked:false,
	desc:false,
	sortArray: ["None", "Rating", "Price", "Alphabet"],
	category:0,
	categoryClicked:false,
	categoryArray: ["All","Memories","Psychology","Romance","ArtBooks","Letters&Journals","Food&Drink","Fantasy","Children's","Manga","Crime"],
	searchInput:''
} 

 const filterSlice=createSlice({
	name:'filter',
	initialState,	
	reducers:{	
		setSort(state,action: PayloadAction<number>){
			state.sort=action.payload
		},
		setSortClicked(state)
		{
			state.sortClicked = !state.sortClicked
		},
		setDesc(state)
		{
			state.desc = !state.desc
		},
		setCategory(state,action: PayloadAction<number>)
		{
			state.category=action.payload
		},

		setCategoryClicked(state )
		{
			state.categoryClicked= !(state.categoryClicked)
		},
		setSearchInput(state,action:PayloadAction<string>)
		{
			state.searchInput= action.payload
		}
	}
})

export const selectFilter=(state:RootState)=>state.filter
export const { setSort , setSortClicked , setDesc , setCategory , setCategoryClicked, setSearchInput} = filterSlice.actions
export default filterSlice.reducer