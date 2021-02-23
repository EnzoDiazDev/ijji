type KeysThatAreNotMethodsOf<T> = {[K in keyof T]: T[K] extends Function ? never : K}[keyof T];

/*type InstanceOf<C> = InstanceType<ConstructorOf<C>>*/

/**
 * Represents a constructable type, that is, a class.
 */
export type ConstructorOf<C> = {new(...args:any):C}

/**
 * Represents the non-method properties of an object.
 */
export type PropertiesOf<T> = Pick<T, KeysThatAreNotMethodsOf<T>>;

/**
 * Creates a new instance from an object.
 * @param json An object that matches the properties of the class.
 * @param Clazz Any class.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function json_to_instance<_, AnyClass>(json:PropertiesOf<AnyClass>, Clazz:ConstructorOf<AnyClass>):AnyClass {
    try {
        return Object.assign(new Clazz(), json);
    } catch(e) {
        throw new Error(e);
    }
}

/**
 * Creates an object from an instance.
 * @param instance any instance.
 */
export function instance_to_json<any_instance>(instance:any_instance):PropertiesOf<any_instance> {
    try {
        return {...instance};
    } catch(e) {
        throw new Error(e);
    }
}
