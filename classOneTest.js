class MassiveSum extends Array {
    sum(){
        return this.reduce ((el, acc) => acc += el, 0)
    }
}
const sumArray = new MassiveSum (4, 5 , 12 ,13)
console.log(sumArray.sum())
// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
const friends = [
    { name: ["Anna"], books: ["Bible", "Harry Potter"], age: 21 },
    { name: ["Bob"], books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: ["Alice"], books: ["The Lord of the Rings", "The Shining"], age: 18 }
    ]
    
    // allbooks - список, который будет содержать все книги друзей +
    // дополнительный список указанный в initialValue
    var allNames = friends.reduce(function(prev, curr) {
        return [...prev, ...curr.name]
    },[])

    var allbooks = friends.reduce(function(prev, curr) {
      return [...prev, ...curr.books];
    }, ["Alphabet"]);

    var allNamesTwo = friends.reduce(function(prev, curr){
        return [...prev, ...curr.name]
    },[])
    console.table(allNames)
    // allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
    // "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
    console.log(allbooks)
    console.log(allNamesTwo)
