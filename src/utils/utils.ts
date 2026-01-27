import { RequestHandler } from "express";
import {ParsedQs} from 'qs';
import { getMetadataArgsStorage, Entity } from "typeorm";

export function isInteger(input: unknown):input is string{
    return (typeof input === "number" && Number.isInteger(input)) ||
    (typeof input === "string" && /^\d+$/.test(input));
}
export function hasStatus(
  err: unknown
): err is { status: string | number } {
  return (
    err !== null &&
    typeof err === "object" &&
    "status" in err &&
    (typeof (err as { status: unknown }).status === "string" ||
     typeof (err as { status: unknown }).status === "number")
  );
}
export const asyncHandler = <
  P extends Record<string, string> = {},
  ResBody = any,
  ReqBody = any,
  ReqQuery = ParsedQs
>(
  fn: RequestHandler<P, ResBody, ReqBody, ReqQuery>
): RequestHandler<P, ResBody, ReqBody, ReqQuery> => 
(req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};


export function mapToEntity<T extends Object>(entityClass: new () => T, dto: Partial<T>): T {
  const entity = new entityClass();

  const columns = getMetadataArgsStorage()
    .columns
    .filter(col => col.target === entityClass)
    .map(col => col.propertyName as keyof T);

  for (const key of columns) {
    if (key === "id") continue;
    if (dto[key] !== undefined) {
      entity[key] = dto[key];
    }
  }

  return entity;
}

