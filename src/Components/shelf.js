import Book from './Book'

function BookShelf ({title , books , category , changeShelf}){
   const bookCategory = books.filter((book)=>book.shelf === category)
    return(
       <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {bookCategory.map((book)=>(
         <Book books={book} key={book.id} changeShelf={changeShelf}/>
          ))}
     </ol>
     
    </div>
    </div>
)
}
export default BookShelf;