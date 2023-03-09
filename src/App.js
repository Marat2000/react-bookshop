import Card from './components/Card'
import React,{useState, useEffect } from 'react'

function App() {

const [page,setPage]=useState([]);
let pageNum=[0];
const [booksInPage,setBooksInPage]=useState([]);
const [pageClick,setPageClick]=useState(1)
const [books,setBooks]=useState( [


{imageUrl:"./img/book1.jpg", 
"title":"I Don't Need Therapy",  
"author":"Toni Lodge",
"price":34.87,
"rate":3
},

{imageUrl:"./img/book2.jpg", 
"title":"Atomic Habitsy",  
"author":"James Clear",
"price":29.22,
"rate":4
},

{imageUrl:"./img/book3.jpg", 
"title":"Things We Hide From The Light",  
"author":"Lucy Score",
"price":20.10,
"rate":2
},

{imageUrl:"./img/book4.jpg", 
"title":"How to Paint Without a Brush",  
"author":"Red Hong Yi",
"price":40.45,
"rate":1
},

{imageUrl:"./img/book5.jpg", 
"title":"The Letters I Will Never Send",  
"author":"Isabella Dorta",
"price":18.85,
"rate":5
},


{imageUrl:"./img/book6.jpg", 
"title":"Me vs Brain",  
"author":"Hayley Morris",
"price":24.96,
"rate":3
},

{imageUrl:"./img/book7.jpg", 
"title":"The Body Keeps the Score",  
"author":"Bessel van der Kolk",
"price":25.22,
"rate":4
},




{imageUrl:"./img/book8.jpg", 
"title":"Cleopatra and Frankenstein",  
"author":"Coco Mellors",
"price":21.84,
"rate":2
},


{imageUrl:"./img/book9.jpg", 
"title":"Of Cabbages and Kimchi",  
"author":"James Read",
"price":36.88,
"rate":3
},


{imageUrl:"./img/book10.jpg", 
"title":"A Day of Fallen Night",  
"author":"Samantha Shannon",
"price":47.00,
"rate":5
},

{imageUrl:"./img/book11.jpg", 
"title":"Drama Free",  
"author":"Nedra Glover Tawwab",
"price":22.62,
"rate":1
},

{imageUrl:"./img/book12.jpg", 
"title":"The Glucose Goddess Method",  
"author":"Jessie Inchauspe",
"price":25.08,
"rate":4
},

{imageUrl:"./img/book13.jpg", 
"title":"The Invisible String",  
"author":"Patrice Karst",
"price":16.14,
"rate":3
},
{imageUrl:"./img/book14.jpg", 
"title":"12 Rules for Life	",  
"author":"Jordan B. Peterson",
"price":22.15,
"rate":5
},

{imageUrl:"./img/book15.jpg", 
"title":"Food for Life",  
"author":"Tim Spector",
"price":41.98,
"rate":3
},

]
)



let sortBooks=[],  newBooks=[], i=0, j=0;

sortBooks.length=books.length;
newBooks.length=books.length;

for( i=0;i<books.length;i++)
{sortBooks[i]=books[i].price;
sortBooks.sort((x,y)=>x-y);
newBooks[i]=books[i];}



i=0;
while ( i<books.length)
{for( j=0;j<books.length;j++)

	{
		if(books[j].price===sortBooks[i])
			{newBooks[i]=books[j];
						i++;}
	}
		j=0;
}







const priceDown=()=>
{
	 setBooks([...newBooks])
	   	 setPageClick(1);
	   	  console.log(books);
}


const priceUp=()=>
{
	 setBooks([...newBooks.reverse()])
	 setPageClick(1); 
	 console.log(books);
}

const PageBtn=()=>
{	 i=1;
	 let pages=[0];
	while(i<Math.ceil(books.length/6))
	{ pages.push(i);
		 i++;}
		 setPage([...pages])
	
}

useEffect(()=>{PageBtn()},[]);





const CardRate=(title, star)=>
{
	let forRate=[];
	 forRate=books;
for (let i=0;i<books.length;i++)
	{if(forRate[i].title==title)
	{ forRate[i]['rate']=star
	 setBooks(forRate);
	 console.log(forRate[i]  , books[i]);	}}
	
}

useEffect(()=>{
setBooksInPage(books.filter((book)=> books.indexOf(book)>=((pageClick-1)*6) && books.indexOf(book)<= pageClick*6-1 ))},[books, pageClick ]
)




  return (
  	<>
  	<h1>BookShop</h1>
<div className="container">  	
<button onClick={priceDown}>Price ▲</button>
<button onClick={priceUp}>Price ▼</button>
<div className="books">

{booksInPage.map((book)=>{
	return(



		<Card 
				index={books.indexOf(book)}	
				key={book.title}
				title={book.title} 
				imageUrl={book.imageUrl}
				author={book.author}
				price={book.price}
				CardRate={CardRate}
				rate={book.rate}


 />
 
		)
})

}

</div>

{page.length>1&&

	page.map((i)=>{
		return(
		 <button  key={page.indexOf(i)+1} onClick={()=> {    setPageClick(page.indexOf(i)+1)    }} > {page.indexOf(i)+1} </button>)
	})
}
</div>
</>
  );}


export default App;
