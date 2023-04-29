import axios from "axios";
import MainLayout from "./components/MainLayout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import notsData from "./nots.json";
import { useSelector } from "react-redux";
import { fetchBook ,setBooks , selectBook , setPageClick , Book } from './redux/slices/bookSlice'
import { selectFilter } from "./redux/slices/filterSlice";
import { useAppDispatch, RootState } from "./redux/store";
import { getLikedCard } from './utils/getLikedCard'
import { Loading } from './pages/Loading'


 // import data from './data.json'


export type Nots={
	 id: number;
    author: string;
    title: string;
    unread: boolean;
}

const Home=React.lazy(()=>import('./pages/Home'))
const Orders=React.lazy(()=>import('./pages/Orders'))
const Notifications=React.lazy(()=>import('./pages/Notifications'))
const Support=React.lazy(()=>import('./pages/Support'))
const Settings=React.lazy(()=>import('./pages/Settings'))
const AboutBook=React.lazy(()=>import('./pages/AboutBook'))
const NotFound=React.lazy(()=>import('./pages/NotFound'))

function App() {

const [likedCard, setLikedCard] = React.useState<Book[]>(getLikedCard());
const [nots, setNots] = React.useState<Nots[]>(notsData);

const filter = useSelector(selectFilter);
const { allBooks, isLoaded, darkMode } = useSelector(selectBook);
const cart = useSelector((state: RootState) => state.cart);

const dispatch = useAppDispatch();

React.useEffect(()=>{

	localStorage.setItem('liked' , JSON.stringify(likedCard))
},[likedCard])

React.useEffect(() => {dispatch(fetchBook())}, []);

React.useEffect(() => { 
		if (darkMode) 
		{
			document.documentElement.style.setProperty("--Dark", "rgb(250, 163, 86)");
			document.documentElement.style.setProperty("--Pink", "rgb(250, 121, 112)");
			document.documentElement.style.setProperty("--Light", "rgb(33, 38, 45)");
			document.documentElement.style.setProperty("--White", "rgb(22, 27, 34)");
			document.documentElement.style.setProperty("--Grey", "rgb(60,60,70)");
			
		}
		else 
		{
			document.documentElement.style.setProperty("--Dark", "rgb(125,45,70)");
			document.documentElement.style.setProperty("--Pink", "rgb(250,60,100)");
			document.documentElement.style.setProperty("--Light", "rgb(250,220,230)");
			document.documentElement.style.setProperty("--White", "rgb(250,250,250)");
			document.documentElement.style.setProperty("--Grey", "rgb(155,155,155)");
			
		}
}, [darkMode , isLoaded]);


React.useEffect(() => {
const sortingSearchingFunction = () => {
	dispatch(setPageClick(1))
	let sortingBooks = [...allBooks];

if (filter.category != 0)
sortingBooks = sortingBooks.filter(
(book) => book.categories == filter.category
);
	if (filter.sort != 0) {
		if (filter.sort == 1) {
			//rating
			filter.desc
				? sortingBooks.sort((x, y) => y.rate - x.rate)
				: sortingBooks.sort((x, y) => x.rate - y.rate);
		} else if (filter.sort == 2) {
			//price
			filter.desc
				? sortingBooks.sort((x, y) => y.price - x.price)
				: sortingBooks.sort((x, y) => x.price - y.price);
		} else if (filter.sort == 3)
			//alphabet
			filter.desc
				? sortingBooks.sort((x, y) => {
						if (x.title > y.title) return -1;
						else return 1;
				  })
				: sortingBooks.sort((x, y) => {
						if (x.title > y.title) return 1;
						else return -1;
				  });
	}
	sortingBooks = sortingBooks.filter((book) => {
		if (
			book.title.toLowerCase().split("").filter((e) => e >= "A" && e <= "z").join("").includes(
			filter.searchInput.toLowerCase().split("").filter((e) => e >= "A" && e <= "z").join("")) ||
			book.author.toLowerCase().split("").filter((e) => e >= "A" && e <= "z").join("").includes(
			filter.searchInput.toLowerCase().split("").filter((e) => e >= "A" && e <= "z").join(""))
		)	return true});
			
	
	dispatch(setBooks([...sortingBooks]))
};
isLoaded && sortingSearchingFunction();
}, [filter.sort , filter.desc , filter.category , allBooks , filter.searchInput]);



	return (
		<>	<React.Suspense fallback={<Loading/>}>
					<Routes>
				
						<Route path='/' element={<MainLayout likedCard={likedCard} setLikedCard={setLikedCard} />}>
						
						<Route path="react-bookshop/" element={<Home likedCard={likedCard} setLikedCard={setLikedCard}/>} />;
						<Route path="react-bookshop/:id" element={<AboutBook />} />;
						<Route path="react-bookshop/orders" element={<Orders orders={cart.orders} />} />;
						<Route path="react-bookshop/notifications" element={<Notifications nots={nots} setNots={setNots} />}/>;
						<Route path="react-bookshop/support" element={<Support />} />;
						<Route path="react-bookshop/settings" element={<Settings />} />;
						<Route path="*" element={<NotFound />} />;
						</Route>
					
					</Routes>	</React.Suspense>
		</>
	);
}

export default App;
