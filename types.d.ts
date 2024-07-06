import { Request, Response, NextFunction } from 'express';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface AuthRequest extends Request {
  user?: IUser;
}