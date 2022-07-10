import BookShelf from "../Components/shelf";
import {Link} from 'react-router-dom';

function Main({books , changeShelf})
{return(
<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <BookShelf title='Currently Reading' books={books} category='currentlyReading'changeShelf={changeShelf}/>
            <BookShelf title='Want to read' books={books} category='wantToRead'changeShelf={changeShelf}/>
            <BookShelf title='Read' books={books} category='read' changeShelf={changeShelf}/>
             </div>
          </div>
            <div className="open-search">
          <Link  className="close-search" to={'/search'}>Search</Link>
          </div>
        </div>
  )
}
export default Main;

