import { bookArray } from "./bookarray.js";
import rds from "readline-sync";

export default function deleteBook() {
    console.log('! --- Deletion is permanent --- !');
    const nameList = [];
    bookArray.forEach((value) => {nameList.push(value.name)});
    const nameUs = rds.question('Name of the book: ');
    if (!(nameList.includes(nameUs))) {
        console.log('Invalid name!');
        return;
    }
    bookArray.forEach((value, index) => {
            if (value.name === nameUs) {
                console.log('Is this the book?');
                console.log(value);
                if (rds.question('y/n: ') === 'y') {
                    console.log('Deleting at ' + index);
                    bookArray.splice(index, 1);
                }
            }
    })
    return;
}