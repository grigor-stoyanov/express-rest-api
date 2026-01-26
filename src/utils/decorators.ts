import { logger } from "./logger";

export function Perf():MethodDecorator{
    return (target:any, propertyKey:string, descriptor:PropertyDescriptor) =>{
        const originalFunction:Function = descriptor.value;
        descriptor.value = function (...args: any[]){
            const start = Date.now();
            const result = originalFunction.apply(this,args);
            logger.debug("Elapsed Time:" + (Date.now() - start) + "ms");
            return result
        }
        return descriptor;
    }
}

export function SealClass():ClassDecorator{
    return (constructor: Function) =>{
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
}

