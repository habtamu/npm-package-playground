const omitFromObject1 = (obj: any, omittedKeys: Array<string>) => {
    for (const omittedKey in omittedKeys) {
        delete obj[omittedKey]
    }
    return obj
}

// const obj = omitFromObject1(
//     {
//         a: 1,
//         b: 2,
//         c: 3
//     },
//     ['a', 'b']
// )

// obj.c
