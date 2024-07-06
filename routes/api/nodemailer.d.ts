// File: nodemailer.d.ts
declare module 'nodemailer' {
    // Declare the types for the nodemailer module here
    // Example:
    export interface SendMailOptions {
      from: string;
      to: string;
      subject: string;
      text: string;
    }
  
    export function createTransport(options: any): {
      sendMail(options: SendMailOptions, callback?: (error: any, info?: any) => void): void;
    };
  }