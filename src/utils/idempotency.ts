import { Request } from "express";

export function extractIdempotencyKey(req: Request): string | undefined {
  const k = req.headers?.["idempotency-key"];
  return typeof k === "string" ? k : undefined;
}
