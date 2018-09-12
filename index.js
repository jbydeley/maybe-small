export class Maybe {
    constructor(value) {
        if (value instanceof Maybe) {
            return value
        }
        this.__value = value
    }

    static of(value) {
        return new Maybe(value)
    }

    isNothing() {
        return (this.__value === null || this.__value === undefined)
    }

    isJust() {
        return !this.isNothing()
    }

    map(f) {
        return this.isJust()
            ? Maybe.of(f(this.__value))
            : Maybe.of(null)
    }

    chain(...fns) {
        return fns.reduce((output, fn) => {
            return Maybe.of(output).map(fn)
        }, this.__value)
    }

    orElse(defaultValue) {
        return this.isNothing()
            ? Maybe.of(defaultValue)
            : this
    }

    ap(other) {
        return this.isJust()
            ? other.map(this.__value)
            : Maybe.of(null)
    }
}