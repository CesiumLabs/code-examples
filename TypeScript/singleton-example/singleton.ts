// instance symbol
export const InstanceK = Symbol("instance");

type SingletonClass<T extends new (...args: any[]) => any> = T & {
    [InstanceK]: T extends new (...args: any[]) => infer I ? I : never;
};

// singleton decorator, create only one instance
export default function singleton() {
    return <T extends new (...args: any[]) => any>(targetClass: T) => {
        return new Proxy(targetClass, {
            construct: (target: SingletonClass<T>, argumentsList, newTarget) => {
                if (target.prototype !== newTarget.prototype) return Reflect.construct(target, argumentsList, newTarget);
                if (!target[InstanceK]) target[InstanceK] = new target(...argumentsList);
                return target[InstanceK];
            }
        });
    };
}

export { singleton };