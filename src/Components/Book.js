function Book ({books , changeShelf}){

    return(
      <ol className="books-grid">
      <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url(${books.imageLinks.thumbnail})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={(e)=>
                  {changeShelf(books, e.target.value)}} value={books.shelf ? books.shelf : "none"}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{books.title}</div>
            <div className="book-authors">{books.authors}</div>
          </div>
        </li>
        
      </ol>
      )
}
export default Book;