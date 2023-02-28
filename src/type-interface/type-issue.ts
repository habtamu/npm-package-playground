type UserWithStringId = {
    id: string
    name: string
}

type UserWithNumberId = {
    id: number
    name: string
}

type UserInfo = UserWithStringId & UserWithNumberId

const user: UserInfo = {} as any

// id is never
user.id

// But interface shows an compile time error
/*
interface UserWithStringId  {
    id: string
    name: string
}

interface UserWithNumberId  {
    id: number
    name: string
}

/Interface 'UserInfo' cannot simultaneously extend types 'UserWithStringId' and 'UserWithNumberId'.
/Named property 'id' of types 'UserWithStringId' and 'UserWithNumberId' are not identical.

interface UserInfo extends UserWithStringId, UserWithNumberId {}
*/
