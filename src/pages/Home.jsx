import {AppContext} from "../App"
import Card from '../components/Card'
import {useContext} from 'react'

const Home=()=>
{

const {books,
			CardRate,
			priceDown,
			booksInPage,
			priceUp,
			page,
			setPageClick  } =useContext(AppContext)


return(

<>

<button onClick={priceDown}>Price ▲</button>
<button onClick={priceUp}>Price ▼</button>
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
		return(
		 <button  key={page.indexOf(i)+1} onClick={()=> {    setPageClick(page.indexOf(i)+1)    }} > {page.indexOf(i)+1} </button>)
	})
}
</>)}

export default Home