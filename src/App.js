import logo from './logo.png'
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import AboutBook from "./pages/AboutBook";
import NotFound from "./pages/NotFound";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import notsData from "./nots.json";


 // import data from './data.json'

export const AppContext = createContext({});

function App() {
	let categoryArray = ["All","Memories","Psychology","Romance","ArtBooks","Letters&Journals","Food&Drink","Fantasy","Children's","Manga","Crime"];
	let sortArray = ["None", "Rating", "Price", "Alphabet"];

	const [isLoaded, setIsLoaded] = useState(false);

	const [addressAccept, setAddressAccept] = useState(false);
	const [addressInput, setAddressInput] = useState("");
	const [cityInput, setCityInput] = useState("");

	const [submitIsError, setSubmitIsError] = useState([...new Array(4)].fill(false));
	const [values, setValues] = useState([...new Array(4)].fill(null));
	const [registered, setRegistered] = useState(false);

	const [userClicked, setUserClicked] = useState(false);
	const [cartClicked, setCartClicked] = useState(false);
	const [likesClicked, setLikesClicked] = useState(false);

	const [categoriesClicked, setCategoriesClicked] = useState(false);
	const [sortClicked, setSortClicked] = useState(false);
	const [desc, setDesc] = useState(false);
	const [sort, setSort] = useState(0);
	const [categories, setCategories] = useState(0);
	const [searchInput, setSearchInput] = useState("");

	const [allBooks, setAllBooks] = useState(0);
	const [books, setBooks] = useState([...new Array(6)].fill(0));

	const [about, setAbout] = useState(0);

	const [cartItems, setCartItems] = useState([]);
	const [likedCard, setLikedCard] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [orders, setOrders] = useState([]);

	const [darkMode, setDarkMode] = useState();

	const [page, setPage] = useState([]);
	const [booksInPage, setBooksInPage] = useState([]);
	const [pageClick, setPageClick] = useState(1); 

	const [nots, setNots] = useState(notsData);




useEffect(() => {
	setIsLoaded(false);
	const Data = async () => {
		try {
			let allData = await axios.get(
				"https://64267886d24d7e0de470a14c.mockapi.io/bookshop");

			let forBooks = await allData.data[1].items;
			let forDarkMode = await allData.data[0].darkMode;

			setAllBooks([...forBooks]);
			setBooks([...forBooks]);
			setDarkMode(forDarkMode);


			// 	 setAllBooks([...data[1].items] )
			// 	 setBooks ([...data[1].items] )
			// 	 setDarkMode(data[0].darkMode)

		setTimeout(()=>setIsLoaded(true),200)
			
		} catch (error) {
		

			console.log(error);
		}
	};

	Data()
}, []);

	useEffect(() => {
		if (isLoaded) {
			if (darkMode) 
			{
				let obj = { darkMode: true };

				document.documentElement.style.setProperty("--Dark", "rgb(250, 163, 86)");
				document.documentElement.style.setProperty("--Pink", "rgb(250, 121, 112)");
				document.documentElement.style.setProperty("--Light", "rgb(33, 38, 45)");
				document.documentElement.style.setProperty("--White", "rgb(22, 27, 34)");
				document.documentElement.style.setProperty("--Grey", "rgb(60,60,70)");

				axios.put("https://64267886d24d7e0de470a14c.mockapi.io/bookshop/1", obj);
			}

			else 
			{
				let obj = { darkMode: false };

				document.documentElement.style.setProperty("--Dark", "rgb(125,45,70)");
				document.documentElement.style.setProperty("--Pink", "rgb(250,60,100)");
				document.documentElement.style.setProperty("--Light", "rgb(250,220,230)");
				document.documentElement.style.setProperty("--White", "rgb(250,250,250)");
				document.documentElement.style.setProperty("--Grey", "rgb(155,155,155)");

				axios.put("https://64267886d24d7e0de470a14c.mockapi.io/bookshop/1", obj);
			}
		}
	}, [darkMode , isLoaded]);

const searchFunction = () => {
	if (isLoaded) {
		let bookUpdating = [...allBooks].filter(
			(book) =>
				book.title
					.toLowerCase().split("'").join("").includes(searchInput.toLowerCase()) |
				book.author.toLowerCase().includes(searchInput.toLowerCase())
		);
		if (categories != 0)
			bookUpdating = bookUpdating.filter(
				(book) => book.categories == categories
			);
		setBooks([...bookUpdating]);
	}
};


const sortingFunction = () => {
if (sort == 1) {
	//rating
	desc
		? books.sort((x, y) => y.rate - x.rate)
		: books.sort((x, y) => x.rate - y.rate);
} else if (sort == 2) {
	//price
	desc
		? books.sort((x, y) => y.price - x.price)
		: books.sort((x, y) => x.price - y.price);
} else if (sort == 3)
	//alphabet

	desc
		? books.sort((x, y) => {
				if (x.title > y.title) return -1;
				else return 1;
		  })
		: books.sort((x, y) => {
				if (x.title > y.title) return 1;
				else return -1;
		  });
};


const AddToCartClick = (title) => {
	let book = books.filter((e) => e.title == title)[0];
	if (cartItems.some((e) => e.title == title))
		setCartItems([...cartItems.filter((e) => e.title != title)]);
	else setCartItems([book, ...cartItems]);
};

const cartDelete = (title) => {
	setCartItems([...cartItems.filter((e) => e.title != title)]);
};

const orderClick = () => {
	if (addressAccept) {
		let newOrder = { id: `${orders.length}`, items: cartItems };
		setOrders([...orders, newOrder]);
		setCartItems([]);
	}
};

const deleteLiked = (title) => {
	let array = [...likedCard];
	array = array.filter((e) => e.title != title);
	setLikedCard([...array]);
};

const totalPriceCalc = () => {
	let priceCalc = 0;
	if (cartItems.length > 0) {
		cartItems.forEach((el) => (priceCalc += el.price));
		setTotalPrice(priceCalc);
	}
};

const pageCount = () => {
	let pageArray = [...new Array(Math.ceil(books.length / 6))];
	pageArray.forEach((el) => pageArray.indexOf(el));
	setPage([...pageArray]);
};

	useEffect(() => {
		searchFunction();
	}, [searchInput, categories, sort, desc]);

	useEffect(() => {
		sortingFunction();
	}, [sort, categories, desc, books]);

	useEffect(() => {
		setBooksInPage(
			books.filter(
				(a, i) => i >= (pageClick - 1) * 6 && i <= pageClick * 6 - 1
			)
		);
	}, [books, pageClick, searchInput]);

	useEffect(() => {
		pageCount();
	}, [books]);

	useEffect(() => {
		totalPriceCalc();
	}, [cartItems]);


	return (
		<>
			<div className="container">
				<AppContext.Provider
					value={{
						books,
						setBooks,
						booksInPage,
						page,
						setPageClick,
						AddToCartClick,
						pageClick,
						setCartClicked,
						cartItems,
						userClicked,
						registered,
						values,
						setUserClicked,
						cartClicked,
						orders,
						orderClick,
						totalPrice,
						cartDelete,
						addressAccept,
						submitIsError,
						setSubmitIsError,
						setRegistered,
						setAddressAccept,
						addressInput,
						setAddressInput,
						cityInput,
						setCityInput,
						searchInput,
						setSearchInput,
						about,
						setAbout,
						categories,
						setCategories,
						categoriesClicked,
						setCategoriesClicked,
						sort,
						setSort,
						sortClicked,
						setSortClicked,
						desc,
						setDesc,
						categoryArray,
						sortArray,
						allBooks,
						isLoaded,
						likedCard,
						setLikedCard,
						likesClicked,
						setLikesClicked,
						deleteLiked,
						setDarkMode,
						darkMode,
						logo
					}}
				>
					<Header />
					
					<Routes>
						<Route path="/react-bookshop/" element={<Home />} />;
						<Route path="/react-bookshop/aboutbook" element={<AboutBook />} />;
						<Route path="/react-bookshop/orders" element={<Orders orders={orders} />} />;
						<Route path="/react-bookshop/notifications" element={<Notifications nots={nots} setNots={setNots} />}/>;
						<Route path="/react-bookshop/support" element={<Support />} />;
						<Route path="/react-bookshop/settings" element={<Settings />} />;
						<Route path="*" element={<NotFound />} />;
					</Routes>
				</AppContext.Provider>
			</div>
		</>
	);
}

export default App;
