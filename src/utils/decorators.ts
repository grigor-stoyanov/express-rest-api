import { logger } from "./logger";

export function Perf():MethodDecorator{
    return (target:any, propertyKey:string|symbol, descriptor:PropertyDescriptor) =>{
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


import { SelectQueryBuilder } from "typeorm";

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export function Paginate(defaultLimit = 10) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const request = args[args.length - 1] || {};
      const page = Number(request.pageNo) > 0 ? Number(request.pageNo) : 1;
      const limit =
        Number(request.limit) > 0 ? Number(request.limit) : defaultLimit;

      const query: SelectQueryBuilder<any> = await original.apply(this, args);

      if (!query || typeof query.getManyAndCount !== "function") {
        throw new Error(
          "@Paginate() expects the decorated method to return a TypeORM QueryBuilder"
        );
      }

      const [data, total] = await query
        .skip((page - 1) * limit)
        .take(limit)
        .getManyAndCount();

      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      } as PaginatedResult<any>;
    };

    return descriptor;
  };
}