import { bookArray } from "./bookarray.js";
import rds from "readline-sync";

export default function changeBooks() { 
    const nameList = [];
    let toChange;
    bookArray.forEach((value) => {nameList.push(value.name)});
    const nameUs = rds.question('Name of the book: ');
    let usAnswer;
    if (!(nameList.includes(nameUs))) {
        console.log('Invalid name!');
        return;
    }
    bookArray.forEach((value) => {
        if (usAnswer !== 'y') {
            if (value.name === nameUs) {
                console.log('Is this the book?');
                console.log(value);
                usAnswer = rds.question('y/n: ');
                if (usAnswer === 'y') {
                    toChange = value;
                }
            }
        }
    })
    if (toChange === undefined) {
        console.log('No object selected.');
        console.log('Aborting...');
        return;
    }
    if (usAnswer && usAnswer === 'y') {
        const usChange = rds.question('What would you like changed? \n name \n author \n genre \n wordcount \n pagecount \n: ');
        const usValue = rds.question('Input the new value \n Value must be numerical for word count or page count \n: ');
        if (usValue === undefined || usChange !== 'name' && usChange !== 'author' && usChange !== 'genre' && usChange !== 'wordcount' && usChange !== 'pagecount' || usChange === undefined) {
            console.log('Input value is undefined or change keyword is missing / wrong.');
            console.log(usValue);
            console.log(usChange);
            console.log('Aborting...');
            return;
        }
        switch (usChange) {
            case 'name':
                toChange.name = usValue;
                break;
            case 'author':
                toChange.author = usValue;
                break;
            case 'genre':
                toChange.genre = usValue;
                break;
            case 'wordcount':
                if (isNaN(+usValue)) {
                    console.log('Value is not a number.');
                    console.log('Aborting...');
                    return;
                } else {
                    toChange.wordcount = +usValue;
                }
                break;
            case 'pagecount':
                if (isNaN(+usValue)) {
                    console.log('Value is not a number.');
                    console.log('Aborting...');
                    return;
                } else {
                    toChange.pagecount = +usValue;
                }
                break;
            default:
                console.log('Aborting...');
                return;
        }
        console.log(toChange);
        return;
    } else {
        console.log('Error.');
        console.log('Aborting...');
        return;
    }
}