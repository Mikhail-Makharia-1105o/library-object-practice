import { bookArray } from "./bookarray.js";
import rds from "readline-sync";

export default function viewBooks() {
  const usAnswerVB = rds.question(
    "View by: \n1: Name \n2: Name + Author \n3: Name + Author + Genre \n4: Name + Genre \n5: Full JS objects \n: "
  );
  const usAnswerOB = rds.question(
    "Organize by: \n1: Alphabetical order (Name) \n2: Word count \n3: Page count \n: "
  );
  const organizedArray = [...bookArray];
  switch (usAnswerOB) {
    case "1":
      //name
      organizedArray.sort((a, b) => {
        if (a.name[0] > b.name[0]) {
          return 1;
        }
        if (a.name[0] === b.name[0]) {
          return 0;
        }
        return -1;
      });
      console.log(organizedArray);
      break;
    case "2":
      organizedArray.sort((a, b) => {
        //wordcount
        if (a.wordcount > b.wordcount) {
          return 1;
        }
        if (a.wordcount === b.wordcount) {
          return 0;
        }
        return -1;
      });
      console.log(organizedArray);
      break;
    case "3":
      organizedArray.sort((a, b) => {
        //pagecount
        if (a.pagecount > b.pagecount) {
          return 1;
        }
        if (a.pagecount === b.pagecount) {
          return 0;
        }
        return -1;
      });
      console.log(organizedArray);
      break;
    default:
      break;
  }
  function viewByChoice(selector, array) {
    switch (selector) {
      //name
      case "1":
        array.forEach((value) => {
          console.log(value.name);
        });
        break;
      //name + author
      case "2":
        array.forEach((value) => {
          console.log(value.name + " by " + value.author);
        });
        break;
      //name + author + genre
      case "3":
        array.forEach((value) => {
          console.log(
            value.name + ", a " + value.genre + " novel by " + value.author
          );
        });
        break;
      //name + genre
      case "4":
        array.forEach((value) => {
          console.log(value.name + ", a " + value.genre + " novel");
        });
        break;
      //full objects
      case "5":
        array.forEach((value) => {
          console.log(value);
        });
    }
  }
  viewByChoice(usAnswerVB, organizedArray);
}
