//type ReturnValue<T> = T extends (...args: any[]) => infer R ? R : never;

type ReturnValue<TFunc> = TFunc extends (...args: any[]) => infer TReturnValue ? TReturnValue : never;