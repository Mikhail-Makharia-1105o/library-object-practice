import { bookArray } from "./bookarray.js";
import rds from 'readline-sync';

export default function viewBooks() {
    const usAnswerVB = rds.question('View by: \n1: Name \n2: Name + Author \n3: Name + Author + Genre \n4: Name + Genre \n5: Full JS objects \n: ');
    const usAnswerOB = rds.question('Organize by: \n1: Alphabetical order (Name) \n2: Word count \n3: Page count \n: ');
    const organizeObject = [...bookArray];
    switch (usAnswerOB) {
        
    }
}