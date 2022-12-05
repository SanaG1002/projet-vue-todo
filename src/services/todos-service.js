
class TodosService {
    url = "https://vue-todo-a5b4cf.can.canonic.dev/api/todos/_id";
    accessToken = "637aa7d3e0a20b0008881c3c-b5e5c8af-dec1-40c2-ae81-071a662e96cb"

    async getTodos() {
    try {
            const response = await fetch(this.url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": this.accessToken
            }
            });

            if (!response.ok) throw new Error(response.statusText);
            return await response.json();
        } catch (e) {
        console.error(e)
        }
    }
}

export default TodosService;