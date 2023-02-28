enum Shape {
    circle = 'circle',
    square = 'square'
}

export const shapes = {
    [Shape.circle]: {
        shape: ['x', 'y', 'radius']
    },
    [Shape.square]: ['x', 'y', 'width', 'height']
} as const

const resolveShape = <T extends Shape>(shape: T): typeof shapes[T] => {
    return {} as any
}

// output: getShape
const getShape = resolveShape(Shape.square)
