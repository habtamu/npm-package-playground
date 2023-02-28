// Declaration merging

window.foo

declare global {
    interface Window {
        foo: string
    }
}

export {}
