// 1. Класс Book должен иметь следующие свойства:
//    - title (название книги)
//    - author (автор книги)
//    - year (год выпуска)
  
//    И методы:
//    - getInfo() — возвращает строку, содержащую информацию о книге в формате: "Название: 'Название книги', Автор: 'Автор книги', Год: 'Год выпуска'".

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getInfo() {
        return `
        Название: '${this.title}', 
        Автор: '${this.author}', 
        Год: ${this.year}
        `
    }

    set newTitle(newTitle) {
        this.title = newTitle
    }
}

let book1 = new Book("1984", "Дж. Оруэлл", 1984)
let book2 = new Book("Преступление и наказание", "Ф.М. Достоевский", 1880)

console.log(book1.getInfo())
console.log(book2.getInfo())

book2.newTitle = "Идиот"
console.log(book2.getInfo())
