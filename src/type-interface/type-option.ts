type A<T extends Record<string, unknown>> = T

interface User {
    name: string
}

// interface not fit Record<string, unknown>?
// @ts-expect-error
type B = A<User>

type Student = {
    name: string
}

type C = A<Student>
