import style from './SortingPart.module.scss'
import { useRef , useState , useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { BiSearch , BiX} from 'react-icons/bi'
import { setCategory, setCategoryClicked, selectFilter, setSort, setSortClicked, setDesc , setSearchInput} from '../../redux/slices/filterSlice'
//@ts-ignore
import {useDebounce} from 'use-debounce-custom-hook'


const SortingPart=()=>{

const searchRef=useRef<HTMLInputElement>(null)
const [inputValue , setInputValue] = useState('')
const debouncedValue = useDebounce(inputValue , 250)

const filter = useSelector(selectFilter)
const dispatch=useDispatch()



const categoriesClick=(i:number)=>{
	dispatch(setCategory(i)); dispatch(setCategoryClicked())    ; 
}

const sortClick=(i:number)=>{
	dispatch(setSort(i));  dispatch(setSortClicked()) ;  
}


useEffect(()=>{ dispatch (setSearchInput(debouncedValue)) },[debouncedValue])


return(

<div className={style.categoriesSearch}>
<div className={style.categoriesPart}>
<div className={style.buttons} >
<div className={style.categoriesButton} onClick={()=> dispatch(setCategoryClicked()) }>Categories: {filter.categoryArray[filter.category]}</div>
<div style={{display:'flex'}} >
<div className={style.sortButton} onClick={()=>dispatch(setSortClicked())}>Sort by: {filter.sortArray[filter.sort]}</div>
{filter.sort!=0 &&<div className={style.desc} onClick={()=> dispatch(setDesc())}><div  style={{transition:'.3s',rotate:`${filter.desc?'180deg':''}`}} >▲</div><span>{filter.desc?'DESC':'ASC'}</span></div>}
</div>
</div>
</div>
{filter.categoryClicked &&
<>
<ul className={style.categories} >
	{filter.categoryArray.map((item,i)=>{return(

<li key={'category'+Math.random()} onClick={()=> categoriesClick(i)}>{item}</li>		
		)})}
</ul>
 <div className="overBar"  onClick={()=> dispatch( setCategoryClicked())} ></div> 
</>
}


{filter.sortClicked &&
<>
<ul className={style.sort} >
	{filter.sortArray.map((item,i)=>{return(

<li  key={'sort'+Math.random()} onClick={()=>sortClick(i)}>{item}</li>		
		)})}
</ul>



 <div className="overBar"  onClick={()=>dispatch(setSortClicked())} ></div> 
</>
}

<div className={style.search} onClick={()=>searchRef?.current?.focus()}>
<BiSearch/>
<input value={inputValue} ref={searchRef} onChange={(e)=>setInputValue(e.target.value)} className={style.searchInput}/>

{filter.searchInput.length>0 && <BiX onClick={()=>{setInputValue('')  }} className={style.clearSearch}/>}
</div>	



</div>

	)}

export default SortingPart