import { Request } from 'express';
//import { IProfile } from './your-interface-file';

export interface IProfile {
    user: string; 
    school: string;
     status: string;
     bio?: string;
     name: string; 
     email: string;
  }

  interface CustomRequest extends Request {
    user: {
      id: string;
      // Add any other properties you need from the user object
    };
    body: IProfile;
  }