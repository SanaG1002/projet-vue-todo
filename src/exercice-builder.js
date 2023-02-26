// function Todo(title, user, content, timeLimit, doneAt){
//     this.title = title;
//     this.user = user;
//     this.content = content;
//     this.timeLimit = timeLimit;
//     this.doneAt = doneAt;
// }

// function TodoBuilder(user, timeLimit, doneAt){
//     this.user = user;
//     this.timeLimit = timeLimit;
//     this.doneAt = doneAt;

//     this.withUser = function(user) {
//         this.user = user;
//         return this;
//     }

//     this.withTimeLimit = function(timeLimit) {
//         this.timeLimit = timeLimit;
//         return this;
//     }

//     this.withDoneAt = function(doneAt) {
//         this.doneAt = doneAt;
//         return this;
//     }

//     this.build = function(title, content) {
//         return new Todo(title, this.user, content,  this.timeLimit, this.doneAt);
//     }
// }

// const TodoBuilder = new TodoBuilder('63c8bd0cc77ef3000872294b',null,null);

// todo1 = TodoBuilder.build('TodoSg3', 'sqdfgeftrh');
// todoN = TodoBuilder.build('TodoSgN', 'sqdfgeftrh');



class Todo {
    constructor( user, timeLimit, doneAt) {
        this.user = user;
        this.timeLimit = timeLimit;
        this.doneAt = doneAt;
    }
    static TodoBuilder = class {

        static user = null;
        static timeLimit = null;
        static doneAt = null;

        static withUser(user) {
        this.user = user;
        return this;
        }

        static withTimeLimit(timeLimit) {
        this.timeLimit = timeLimit;
        return this;
        }

        static withDoneAt(doneAt) {
            this.doneAt = doneAt;
            return this;
            }

        static build() {
        return new Todo(this.user, this.timeLimit, this.doneAt)
        }


    }
}

const todo = Todo.Builder
            .withUser("639f7d592ba5cb0").withTimeLimit("2023-12-23T14:52:00.000Z").withDoneAt("2023-12-23T20:45:03.845Z")