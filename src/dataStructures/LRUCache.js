https://www.youtube.com/watch?v=6NGIx1vfZR4

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key) {
        if (!this.cache.has(key)) return -1
        const v = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, v)
        return this.cache.get(key)
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next.value)
        }
    }
}