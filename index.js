import rds from 'readline-sync';
import makeAppendBook from './makebook.js';
import { bookArray } from './bookarray.js';
import viewBooks from './printbooks.js';

function startCommandLibrary() {
    let exit = false;
    console.log("Greetings, curious reader! \n Enter w to write a new book \n Enter v to view our catalogue \n Enter d to delete a book by its name \n Enter c if youou want to change an existing book \n Enter q to quit the program");
    switch(rds.question(': ')) {
        case "q":
            exit = true;
            break;
        case "w":
            makeAppendBook(rds.question("Name: "), rds.question("Author: "), rds.question("Genre: "), rds.question("Word count: "), rds.question("Page count: "));
            break;
        case "v":
            viewBooks();
        default:
            break;
    }
    if (!exit) {
        startCommandLibrary();
    }
}

startCommandLibrary();