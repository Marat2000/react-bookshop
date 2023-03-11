import User from './components/User'
import Drawer from './components/Drawer'
import {BiUserCircle, BiCartAlt} from 'react-icons/bi'
import Notifications from './pages/Notifications'
import Address from './pages/Address'
import Support from './pages/Support'
import Settings from './pages/Settings'
import Home from './pages/Home'
import React,{useState, useEffect , createContext} from 'react'
import { Routes, Route, Link} from  'react-router-dom'


export const AppContext=createContext({})

function App() {

const [page,setPage]=useState([]);
const [userClicked,setUserClicked]=useState(false);
const [cartClicked,setCartClicked]=useState(false);
const [totalPrice,setTotalPrice]=useState(0);
const [cartItems,setCartItems]=useState([]);
const [booksInPage,setBooksInPage]=useState([]);
const [pageClick,setPageClick]=useState(1)
const [books,setBooks]=useState( [


{imageUrl:"./img/book1.jpg", 
"title":"I Don't Need Therapy",  
"author":"Toni Lodge",
"price":34.87,
"rate":3,
"cartAdded":false
},

{imageUrl:"./img/book2.jpg", 
"title":"Atomic Habitsy",  
"author":"James Clear",
"price":29.22,
"rate":4,
"cartAdded":false
},

{imageUrl:"./img/book3.jpg", 
"title":"Things We Hide From The Light",  
"author":"Lucy Score",
"price":20.10,
"rate":2,
"cartAdded":false
},

{imageUrl:"./img/book4.jpg", 
"title":"How to Paint Without a Brush",  
"author":"Red Hong Yi",
"price":40.45,
"rate":1,
"cartAdded":false
},

{imageUrl:"./img/book5.jpg", 
"title":"The Letters I Will Never Send",  
"author":"Isabella Dorta",
"price":18.85,
"rate":5,
"cartAdded":false
},


{imageUrl:"./img/book6.jpg", 
"title":"Me vs Brain",  
"author":"Hayley Morris",
"price":24.96,
"rate":3,
"cartAdded":false
},

{imageUrl:"./img/book7.jpg", 
"title":"The Body Keeps the Score",  
"author":"Bessel van der Kolk",
"price":25.22,
"rate":4,
"cartAdded":false
},




{imageUrl:"./img/book8.jpg", 
"title":"Cleopatra and Frankenstein",  
"author":"Coco Mellors",
"price":21.84,
"rate":2,
"cartAdded":false
},


{imageUrl:"./img/book9.jpg", 
"title":"Of Cabbages and Kimchi",  
"author":"James Read",
"price":36.88,
"rate":3,
"cartAdded":false
},


{imageUrl:"./img/book10.jpg", 
"title":"A Day of Fallen Night",  
"author":"Samantha Shannon",
"price":47.00,
"rate":5,
"cartAdded":false
},

{imageUrl:"./img/book11.jpg", 
"title":"Drama Free",  
"author":"Nedra Glover Tawwab",
"price":22.62,
"rate":1,
"cartAdded":false
},

{imageUrl:"./img/book12.jpg", 
"title":"The Glucose Goddess Method",  
"author":"Jessie Inchauspe",
"price":25.08,
"rate":4,
"cartAdded":false
},

{imageUrl:"./img/book13.jpg", 
"title":"The Invisible String",  
"author":"Patrice Karst",
"price":16.14,
"rate":3,
"cartAdded":false
},
{imageUrl:"./img/book14.jpg", 
"title":"12 Rules for Life	",  
"author":"Jordan B. Peterson",
"price":22.15,
"rate":5,
"cartAdded":false
},

{imageUrl:"./img/book15.jpg", 
"title":"Food for Life",  
"author":"Tim Spector",
"price":41.98,
"rate":3,
"cartAdded":false
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
}


const priceUp=()=>
{
	 setBooks([...newBooks.reverse()])
	 setPageClick(1); 
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
	
for (let i=0;i<books.length;i++)
	{if(books[i].title==title)
	{ books[i]['rate']=star
	 setBooks([...books]);
	 // console.log(books[i] );	
	}}
	
}



const AddToCartClick=(title)=>
{
	let index=books.indexOf(books.filter(el=>el.title==title)[0])
	books[index].cartAdded=!books[index].cartAdded
	setBooks([...books])
}

const cartBooks=()=>
{

	let addToCart= books.filter(el=>el.cartAdded)
	setCartItems([...addToCart])


}

const cartDelete=(title)=>
{
	let index=books.indexOf(books.filter(el=>el.title==title)[0]);

	books[index].cartAdded=false;
	setBooks([...books]);
}



useEffect(()=>
{

let price=0;
if(cartItems.length>0)
{
	for(let i=0;i<cartItems.length;i++)
		price=price+cartItems[i].price;
	setTotalPrice(price)
	console.log(totalPrice)}


},[books,cartItems]);


useEffect(()=>{ cartBooks();
setBooksInPage(books.filter((book)=> books.indexOf(book)>=((pageClick-1)*6) && books.indexOf(book)<= pageClick*6-1 ))},[books, pageClick ]
);





  return (
  	<>

  <Link to="/react-bookshop"  className="link"><h1>BookShop</h1> </Link>
<div className="container" >  
<div className="header">
<BiCartAlt  onClick={()=>setCartClicked(!cartClicked)}  className="headerIcon"   />

<BiUserCircle onClick={()=>setUserClicked(!userClicked)} className="headerIcon"/>
</div>	
{userClicked && <>	<User setUserClicked={setUserClicked}/> <div className="overBar"  onClick={()=>setUserClicked(false)} ></div> </>	}

{cartClicked && <>	<Drawer totalPrice={totalPrice} cartItems={cartItems} cartDelete={cartDelete} /> <div className="overBar"  onClick={()=>setCartClicked(false)} ></div> </>	}

<AppContext.Provider 
	value={{books,
			CardRate,
			priceDown,
			booksInPage,
			priceUp,
			page,
			setPageClick,
			AddToCartClick

			
			


	}}>

<Routes>

<Route path='/react-bookshop' exact  element={ <Home/> }/>
<Route path='/react-bookshop/notifications' exact element={ <Notifications/> }/>
<Route path='/react-bookshop/address' exact element={ <Address/> }/>
<Route path='/react-bookshop/support' exact element={ <Support/> }/>
<Route path='/react-bookshop/settings' exact element={ <Settings/> }/>
</Routes>
</AppContext.Provider>
</div>
</>
  );}


export default App;
