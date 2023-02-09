import {Link} from 'react-router-dom';
import '../App.css';
import { search } from "../BooksAPI";
import Book from '../Components/Book';
import { useEffect, useState } from 'react';

function Search({changeShelf}){
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    search(query).then(async (res) => {
      if (!res) {
        setLoading(false);
      } else {
        console.log();
        setData(res);
        setLoading(true);
        }
    });
  
  }, [query]);

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
            {loading && data.length   ? (
            data.map((book) => (
              <Book key={book.id} books={book} changeShelf={changeShelf} />
            ))
          ) : (
            <h1>No Result</h1>
          )}
            </ol>
          </div>
        </div>
    )
}
export default Search;