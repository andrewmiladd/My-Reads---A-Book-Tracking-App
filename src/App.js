/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import * as BookAPI from './BooksAPI';
import Main from './Pages/main'
import Search from './Pages/Search'

function App (){ 
const [books, setBooks]=useState([]);
useEffect(()=>{
  const getAllBooks = async()=>{
    const res = await BookAPI.getAll();
    setBooks(res);
   }
   getAllBooks();
  
},[])
const changeShelf = async (book, shelf) => {
  await BookAPI.update(book, shelf);
  await BookAPI.getAll().then((res) => {
    setBooks(res);
  });
};


 return (
<div className="app">
    <Routes>
      <Route exact path={'/'} element={<Main books={books} changeShelf={changeShelf}/>}></Route>
      <Route exact path={'/search'} element={<Search changeShelf={changeShelf}/>}></Route>
    </Routes>
    </div>
);
}
export default App;