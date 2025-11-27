// Q3 Library Management System
class Book{
 constructor(title,author,isbn,isIssued=false){
  this.title=title; this.author=author; this.isbn=isbn; this.isIssued=isIssued;
 }
 issueBook(){ this.isIssued=true; }
 returnBook(){ this.isIssued=false; }
}
let books=[new Book("A","X",11), new Book("B","Y",22,true)];
console.log(books.filter(b=>!b.isIssued));
