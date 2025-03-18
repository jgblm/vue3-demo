import config from "../config/index.js";
export default {
    setItem(key, value) {
        let storage = this.getStorage();
        storage[key] = value;
        localStorage.setItem(config.namespace, JSON.stringify(storage));
    },
    getItem(key) {
        let storage = this.getStorage();
        return storage[key];
    },
    removeItem(key) {
        let storage = this.getStorage();
        delete storage[key];
        localStorage.setItem(config.namespace, JSON.stringify(storage));
    },
    getStorage(){
        return JSON.parse(localStorage.getItem(config.namespace)||'{}');
    },
    clear(){
        localStorage.clear();
    }
}