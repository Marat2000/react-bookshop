import {AppContext} from "../App"
import Card from '../components/Card'
import {useContext , useState} from 'react'

const Home=()=>
{

const [btnClicked, setBtnClicked]=useState(0)

const {books,
			CardRate,
			priceDown,
			booksInPage,
			priceUp,
			page,
			setPageClick,
			pageClick } =useContext(AppContext)


return(

<>

{btnClicked==1 ?  
<button onClick={()=>{priceDown() ; setBtnClicked(1)} } style={{backgroundColor:'red'}} >Price ▲</button> : 
<button onClick={()=>{priceDown() ; setBtnClicked(1)} } style={{backgroundColor:'white'}}>Price ▲</button> }

{btnClicked==2 ?  
<button onClick={()=>{priceUp() ; setBtnClicked(2)}} style={{backgroundColor:'red'}}>Price ▼</button>:
<button onClick={()=>{priceUp() ; setBtnClicked(2)}} style={{backgroundColor:'white'}}>Price ▼</button>}


<div className="books">

{booksInPage.map((book)=>{
	return(<Card 
				index={books.indexOf(book)}	
				key={book.title}
				title={book.title} 
				imageUrl={book.imageUrl}
				author={book.author}
				price={book.price}
				CardRate={CardRate}
				rate={book.rate}
				cartAdded={book.cartAdded}
			 />)
					 })

}


</div>



{page.length>1&&

	page.map((i)=>{
		
			return(page.indexOf(i)+1==pageClick? <button  key={page.indexOf(i)+1} onClick={()=> {    setPageClick(page.indexOf(i)+1) }} style={{backgroundColor:"red"}} > {page.indexOf(i)+1} </button>

		:

		 <button  key={page.indexOf(i)+1} onClick={()=> {    setPageClick(page.indexOf(i)+1) }} style={{backgroundColor:"white"}} > {page.indexOf(i)+1} </button>)
		
	


	})
}
</>)}

export default Home