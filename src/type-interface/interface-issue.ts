interface UserWithStringId {
    id: string
    name: string
}

interface UserWithNumberId {
    id: number
    name: string
}

// Error: cannot declaration merge done with different data types
// @ts-expect-error
interface IUser extends UserWithStringId, UserWithNumberId {}

const user: IUser = {} as any

//output
//id: never
user.id

export {}
