function BooksList() {

    const books = 
        [{bookName : "iliad", pages : 500},
        {bookName : "Ploponsian Wars", pages : 450},
        {bookName : "Historia", pages : 1000},
        {bookName : "Desiree", pages : 600}];

    const listbooks = books.map(books => <li>{books.bookName}:&nbsp;{books.pages}</li>);

    return(<ul>{listbooks}</ul>)

}
export default BooksList