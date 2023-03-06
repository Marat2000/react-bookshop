import Card from './components/Card'
import {useState } from 'react'

function App() {
const [books,setBooks]=useState( [
{imageUrl:"./img/book1.jpg", 
"title":"I Don't Need Therapy",  
"author":"Toni Lodge",
"price":34.87, 
},

{imageUrl:"./img/book2.jpg", 
"title":"Atomic Habitsy",  
"author":"James Clear",
"price":29.22, 
},

{imageUrl:"./img/book3.jpg", 
"title":"Things We Hide From The Light",  
"author":"Lucy Score",
"price":20.10, 
},

{imageUrl:"./img/book4.jpg", 
"title":"How to Paint Without a Brush",  
"author":"Red Hong Yi",
"price":40.45, 
},

{imageUrl:"./img/book5.jpg", 
"title":"The Letters I Will Never Send",  
"author":"Isabella Dorta",
"price":18.85, 
},


{imageUrl:"./img/book6.jpg", 
"title":"Me vs Brain",  
"author":"Hayley Morris",
"price":24.96, 
}
])



let sortBooks=[], newBooks=[], i=0, j=0;

sortBooks.length=books.length;
newBooks.length=books.length;

for( i=0;i<books.length;i++)
{sortBooks[i]=books[i].price;
newBooks[i]=books[i];}

sortBooks.sort((x,y)=>x-y);


for( i=0;i<books.length;i++)
{for( j=0;j<books.length;j++)

	{
		if(books[j].price==sortBooks[i])
			newBooks[i]=books[j];
					
	}
		j=0;
}






const priceDown=()=>
{
	setBooks([...newBooks])
}


const priceUp=()=>
{
	setBooks([...newBooks.reverse()])
}


  return (
  	<>
  	<h1>BookShop</h1>
<div className="container">  	
<button onClick={priceDown}>Price ▼</button>
<button onClick={priceUp}>Price ▲</button>
<div className="books">

{books.map((book)=>{
	return(
		<Card 
				key={book.title}
				title={book.title} 
				imageUrl={book.imageUrl}
				author={book.author}
				about={book.about}
				price={book.price}
 />
		)
})}

</div>
</div>
</>
  );}


export default App;
