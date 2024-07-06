import { Request } from 'express';
declare const router: import("express-serve-static-core").Router;
export interface IProfile {
    user: string;
    school: string;
    status: string;
    bio?: string;
    name: string;
    email: string;
}
export interface IGetUserAuthInfoRequest extends Request {
    user: string;
}
export interface AuthenticatedRequest extends Request {
    user: {
        id: string;
    };
}
export default router;
