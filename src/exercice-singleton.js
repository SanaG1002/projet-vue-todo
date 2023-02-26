class MySingleton {
    static instance = null;
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
    myData = {}
    updateData(data) {
        this.myData = data;
    }
}

export default MySingleton.getInstance();