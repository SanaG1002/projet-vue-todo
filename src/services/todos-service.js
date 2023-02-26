
import constants from '../constants';
import AuthService from './auth-service';
import TodoApiAdapter from "../services/todo-api-adapter";

class TodosService {
	url = constants.apiUrl;
	apiKey = constants.apiKey;
	authService = new AuthService();

	async getTodos() {
		const endpoint = "todos/all";
		const id = this.authService.getUserId();

		if (!id) throw new Error("User ID not found");

		try {
			const response = await fetch(`${this.url}/${endpoint}/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': this.apiKey,
				}
			});

			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}

			const json = await response.json();

			if (json.success) {
				return TodoApiAdapter.apiRecipesToRecipes(json.data);
			} else {
				throw new Error(`Could not fetch ${this.endpoint}, received ${json.message}`);
			}
		} catch (error) {
			console.error(error);

			return [];
		}
	}

	async getTodo(id) {
		const endpoint = "todos";
		
		try {
			const response = await fetch(`${this.url}/${endpoint}/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': this.apiKey,
				}
			});
			
			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}
			
			const json = await response.json();

			return TodoApiAdapter.formatRecipe(json.data);
		} catch (error) {
			console.error(error);

			return null;
		}
	}

	async createTodo(todo) {
		const endpoint = "todos";

		delete todo.id;
		delete todo.createdAt;
		delete todo.updatedAt;

		try {
			const response = await fetch(`${this.url}/${endpoint}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': this.apiKey,
				},
				body: JSON.stringify({ input: todo })
			});

			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}

			const json = await response.json();

			return TodoApiAdapter.formatRecipe(json.data);
		} catch (error) {
			console.error(error);

			return null;
		}
	}

    async updateTodo(todo) {
		const endpoint = "todos";

		delete todo.createdAt;
		delete todo.updatedAt;

		try {
			const response = await fetch(`${this.url}/${endpoint}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': this.apiKey,
				},
				body: JSON.stringify({ input: todo })
			});

			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}

			const json = await response.json();

			return json;
		} catch (error) {
			console.error(error);

			return null;
		}
	}

	async deleteTodo(id) {
		const endpoint = "todos";

		try {
			const response = await fetch(`${this.url}/${endpoint}/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': this.apiKey,
				}
			});

			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}

			const json = await response.json();

			return TodoApiAdapter.formatRecipe(json.data);
		} catch (error) {
			console.error(error);

			return null;
		}
	}

	static instance = null;

	static getInstance() {
		if (!this.instance) {
			this.instance = new this();
		}

		return this.instance;
	}
}

export default TodosService.getInstance();