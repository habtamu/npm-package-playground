export const shapes = {
    circle: {
        shape: ['x', 'y', 'radius']
    },
    square: ['x', 'y', 'width', 'height']
} as const

//output:
//type Shape = "circle" | "square"
export type Shape = keyof typeof shapes

const resolveShape = <T extends Shape>(shape: T): typeof shapes[T] => {
    return {} as any
}

// output: getShape
// const getShape: readonly ["x", "y", "width", "height"]
const getShape = resolveShape('square')
