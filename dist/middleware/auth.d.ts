import express, { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
declare const auth: (req: AuthRequest, res: Response, next: NextFunction) => express.Response<any, Record<string, any>> | undefined;
export default auth;
