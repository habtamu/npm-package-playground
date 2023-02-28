const omitFromObject = <TObj extends object, TOmitted extends keyof TObj>(
    obj: TObj,
    omittedKeys: Array<TOmitted>
) => {
    for (const omittedKey of omittedKeys) {
        delete obj[omittedKey]
    }

    return obj as Omit<TObj, TOmitted>
}

const obj = omitFromObject(
    {
        a: 1,
        b: 2,
        c: 3
    },
    ['a', 'b']
)

obj.c

//  // for..in loop:
// const obj = { a: 1, b: 2, c: 3 }

// for (const prop in obj) {
//     console.log(prop) // prints 'a', 'b', 'c'
// }

// // for..of loop:
// const arr = ['a', 'b']

// for (const element of arr) {
//     console.log(element) // prints 'a', 'b'
// }
