import style from './SortingPart.module.scss'
import {useContext} from 'react'
import {AppContext} from '../../App'
import { BiSearch , BiX} from 'react-icons/bi'


const SortingPart=()=>{

const {
setCategoriesClicked,
categoriesClicked,
categoryArray,
categories,
setSortClicked,
sortClicked,
sortArray,
sort,
setSort,
setDesc,
desc,
setCategories,
setPageClick,
searchInput,
setSearchInput,

}=useContext(AppContext)

const categoriesClick=(i)=>{
	setCategories(i); setPageClick(1) ; setCategoriesClicked(!categoriesClicked)
}

const sortClick=(i)=>{
	setSort(i);  setSortClicked(!sortClicked)
}


	return(


<div  className={style.categoriesSearch}>
<div className={style.categoriesPart}>
<div className={style.buttons} >
<div className={style.categoriesButton} onClick={()=>setCategoriesClicked(!categoriesClicked)}>Categories: {categoryArray[categories]}</div>
<div style={{display:'flex'}} >
<div className={style.sortButton} onClick={()=>setSortClicked(!sortClicked)}>Sort by: {sortArray[sort]}</div>
{sort!=0 &&<div className={style.desc} onClick={()=>setDesc(!desc)}><div  style={{transition:'.3s',rotate:`${desc?'180deg':''}`}} >▲</div><span>{desc?'DESC':'ASC'}</span></div>}
</div>
</div>
</div>
{categoriesClicked &&
<>
<ul className={style.categories} >
	{categoryArray.map((item,i)=>{return(

<li onClick={()=> categoriesClick(i)}>{item}</li>		
		)})}
</ul>
 <div className="overBar"  onClick={()=>setCategoriesClicked(false)} ></div> 
</>
}


{sortClicked &&
<>
<ul className={style.sort} >
	{sortArray.map((item,i)=>{return(

<li onClick={()=>sortClick(i)}>{item}</li>		
		)})}
</ul>



 <div className="overBar"  onClick={()=>setSortClicked(false)} ></div> 
</>
}

<div className={style.search}>
<BiSearch/>
<input value={searchInput}  onChange={(e)=>{setSearchInput(e.target.value) ; setPageClick(1) }} className={style.searchInput}/>

{searchInput.length>0 && <BiX onClick={()=>setSearchInput('')} className={style.clearSearch}/>}
</div>	



</div>

	)}

export default SortingPart