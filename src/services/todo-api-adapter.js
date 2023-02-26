import Todo from "../services/todo";

class TodoApiAdapter {
	formatRecipe(recipe) {
		const todo = Todo.Builder
			.withDone(recipe.done)
			.withUser(recipe.user)
			.withDoneAt(recipe.doneAt)
			.build(
				recipe._id,
				recipe.createdAt,
				recipe.updatedAt,
				recipe.title,
				recipe.content,
				recipe.timeLimit
			);

		return todo;
	}

	apiRecipesToRecipes(recipes) {
		return recipes.map(
			this.formatRecipe.bind(this)
		)
	}

	static instance = null;

	static getInstance() {
		if (!this.instance) {
			this.instance = new this();
		}

		return this.instance;
	}
}

export default TodoApiAdapter.getInstance();