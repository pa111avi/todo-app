const expect = require("chai").expect;
const Todo = require("../src/todo");

describe("Todo Class", () => {

    // Arrange
    let todo;
    beforeEach(() => {
        todo = new Todo();   // creates new object before asserting so when we add item in it() function, 
    })                            // at every new it() function only 1 element is present in array
    

    afterEach(()=>{
        todo.resetTodoList();
    })

    it("Should add new item in TodoList", () => {
        // Act
        todo.addItem({label : "grocery"});

        // // Assert
        // expect(todo.getItems()).to.be.an("Array");
        expect(todo.getItems()).to.have.lengthOf(1);
    })

    it("Should remove item from TodoList based on Index value", () =>{
        todo.addItem({label : "shopping"})
        todo.removeItem(0)
        expect(todo.getItems()).to.have.lengthOf(0)
    })

})