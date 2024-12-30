/* eslint-disable @typescript-eslint/no-namespace */
import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express{
        interface Request{
            user: JwtPayload
        }
    }
}

// declare module 'express' {
//   interface Request {
//     user: JwtPayload;
//   }
// }
