import * as express from "express";


declare global {
  namespace Express {
    interface Request {
      headers: { authorization?: string } & Headers;
      cookies: { token?: string };
      userId?: string;
      isSeller?: boolean;
    }
  }
}