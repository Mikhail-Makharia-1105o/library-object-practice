export const bookArray = [];

export function removeBookArray(object) {
    if (bookArray.indexOf(object) !== -1) {
        return bookArray.splice(bookArray.indexOf(object), 1)
    } else {
        return "-1"
    }
}

export function appendBookArray(object = {}) {
    bookArray.push(object);
    return 1;
}