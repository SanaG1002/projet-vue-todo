
class Todo {
	constructor(
		id,
		createdAt,
		updatedAt,
		title, 
		content, 
		done, 
		user, 
		timeLimit, 
		doneAt
	) {
		this.id = id;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.title = title;
		this.content = content;
		this.done = done;
        this.user = user;
        this.timeLimit = timeLimit;
        this.doneAt = doneAt;
    }

	static Builder = class {
		static done = null;
        static user = null;
        static doneAt = null;

		static withDone(done) {
			this.done = done;
			return this;
        }

        static withUser(user) {
			this.user = user;
			return this;
        }

        static withDoneAt(doneAt) {
            this.doneAt = doneAt;
            return this;
		}

        static build(
			id,
			createdAt,
			updatedAt,
			title, 
			content, 
			timeLimit
		) {
        	return new Todo(
				id,
				createdAt,
				updatedAt,
				title, 
				content,
				this.done,
				this.user, 
				timeLimit, 
				this.doneAt
			);
        }
    }
}

export default Todo;