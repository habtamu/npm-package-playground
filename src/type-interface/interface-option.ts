// Interface advantages:  Merge declarations

interface Shape {
    color: string
}

interface Square {
    sideLength: number
}

interface ColoredSquare extends Shape, Square {}

const shape: ColoredSquare = {} as any

//usage example
let coloredSquare: ColoredSquare = {
    sideLength: 10,
    color: 'red'
}

export {}
