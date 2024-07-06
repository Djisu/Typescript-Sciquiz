import express, { Request, Response, NextFunction } from 'express';
declare const checkObjectId: (idToCheck: string) => (req: Request, res: Response, next: NextFunction) => express.Response<any, Record<string, any>> | undefined;
export default checkObjectId;
