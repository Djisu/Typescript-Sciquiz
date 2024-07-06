import { Response, NextFunction } from 'express';
import { AuthRequest, IUser } from './types';
export declare const generateToken: (user: IUser) => string;
export declare const isAuth: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const isAdmin: (req: AuthRequest, res: Response, next: NextFunction) => void;
