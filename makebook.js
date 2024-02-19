import rds from "readline-sync";
import crypto from "crypto";
import { appendBookArray } from "./bookarray.js";
export default function makeAppendBook(
  name = "",
  author = "",
  genre = "",
  wordcount = 0,
  pagecount = 0
) {
  const encoder = `${name}${author}${wordcount}`;
  const hash = crypto.createHmac("sha256", encoder).update(genre).digest("hex");
  const bookObject = {
    name: name,
    author: author,
    genre: genre,
    wordcount: +wordcount,
    pagecount: +pagecount,
    ID: hash,
  };
  console.log(bookObject);
  for (let i = 0; i < 3; i += 1) {
    const usAnswer = rds.question(
      "Is this correct? (You can change the book entry later) - y/n: "
    );
    if (usAnswer === "y") {
      appendBookArray(bookObject);
      return;
    } else if (usAnswer === "n") {
      return;
    }
  }
  console.log("Aborting...");
  return;
}
