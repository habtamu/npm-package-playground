export const YesNo = {
    YES: 'YES',
    NO: 'NO'
} as const

//output
//type YesNo = "YES" | "NO"
export type YesNo = typeof YesNo[keyof typeof YesNo]
//or
//export type type YesNo = keyof typeof YesNo

export const func1 = (yesNo: YesNo) => {}

// 1. Autocomplete features
// 2. It support function call using string argument
func1('NO') //okay
func1(YesNo.NO) //okay
func1('YES') //okay
func1(YesNo.YES) //okay
