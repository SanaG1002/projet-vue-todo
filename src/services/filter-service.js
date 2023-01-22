
class FilterService {

	filteredTodosDepasse(todos, dateRef) {
        var filteredTodos = [];

        for (i = 0; i < todos.length; i++) {
            var todo = todos[i];
            var timeLimit = todo.timeLimit;
            var doneAt = todo.doneAt;
            var filtered = (doneAt == null) && (timeLimit != null) && (dateRef > timeLimit);

            if(filtered) {
                filteredTodos.push(todo);
            }
        } 

        return filteredTodos;
    }

    filteredTodosPasDeLimite (todos) {
        var filteredTodos = [];

        for (i = 0; i < todos.length; i++) {
            var todo = todos[i];
            var doneAt = todo.doneAt;
            var filtered = (doneAt == null);

            if(filtered) {
                filteredTodos.push(todo);
            }
        } 

        return filteredTodos;
    }

    filteredTodosEncoreDansLesTemps (todos, dateRef) {
        var filteredTodos = [];

        for (i = 0; i < todos.length; i++) {
            var todo = todos[i];
            var timeLimit = todo.timeLimit;
            var doneAt = todo.doneAt;
            var filtered = (doneAt == null) && (timeLimit != null) && (dateRef < timeLimit);

            if(filtered) {
                filteredTodos.push(todo);
            }
        } 

        return filteredTodos;
    }

    filteredTodosAccompliesDansLesTemps (todos, dateRef) {
        var filteredTodos = [];

        for (i = 0; i < todos.length; i++) {
            var todo = todos[i];
            var timeLimit = todo.timeLimit;
            var doneAt = todo.doneAt;
            var filtered = (doneAt != null) && (timeLimit != null) && (doneAt < timeLimit);

            if(filtered) {
                filteredTodos.push(todo);
            }
        } 

        return filteredTodos;
    }

    filteredTodosAccompliesHorsDesTemps (todos, dateRef) {
        var filteredTodos = [];

        for (i = 0; i < todos.length; i++) {
            var todo = todos[i];
            var timeLimit = todo.timeLimit;
            var doneAt = todo.doneAt;
            var filtered = (doneAt != null) && (timeLimit != null) && (doneAt > timeLimit);

            if(filtered) {
                filteredTodos.push(todo);
            }
        } 

        return filteredTodos;
    }
}

export default FilterService;