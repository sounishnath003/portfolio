import { genSaltSync, hashSync } from "bcrypt";
import environment from "dotenv";
import {
  NextFunction,
  Request as RQ,
  Response as RS,
} from "express-serve-static-core";
import createHttpError from "http-errors";
import { v4 } from "uuid";

environment.config();

/** Required Types for Express.TS */
export type RequestInterface = RQ;
export type ResponseInterface = RS;
export type Next = NextFunction;
export const createError = createHttpError;

/** Utility functions */
export const SUCCESS = { status: true, statusCode: 200 };
export const uuid = v4;

/** Auth Environment Token SECRETS */
export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET as string;
export const JWT_REFRESH_SECRET = process.env
  .JWT_REFRESH_TOKEN_SECRET as string;

export async function generate_api_key(payload: any) {
  const today: string = new Date().toLocaleDateString();
  console.log({today});
  if (today !== payload)
    throw new Error(`You are not authorized person!. Go back`);
  return hashSync(payload, genSaltSync(10));
}

export * from "./skill.utils";
