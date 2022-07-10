import {Link} from 'react-router-dom';
import '../App.css';
import { search } from "../BooksAPI";
import Book from '../Components/Book';
import { useEffect, useState } from 'react';

function Search({changeShelf, books}){
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (query === "") {console.log(books); return setData([]);}
    
    search(query).then(async (res) => {
      if (res.error) {
        setData([]);
        setLoading(false);
      } else {
        setData(await res);
        setLoading(true);
        res.map((e) => {
          return books.forEach((item) => {
            e.id === item.id && (e.shelf = item.shelf);
          });
        });
      }
    });
  }, [books, query]);

    return(
        <div className="search-books">
          <div className="search-books-bar">
         <Link  className="close-search" to={'/'}>Close</Link>
            <div className="search-books-input-wrapper">
              <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {loading ? (
            data.map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))
          ) : (
            <h1>Book not found</h1>
          )}
            </ol>
          </div>
        </div>
    )
}
export default Search;