import TodosService from "../services/todos-service";

class TodosServiceBuilder {
	build() {
	    return new TodosService();
	}
}

export default TodosServiceBuilder;