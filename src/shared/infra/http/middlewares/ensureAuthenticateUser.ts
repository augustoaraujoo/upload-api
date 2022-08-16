import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';
interface IPayload {
    sub: string
}
export async function ensureAuthenticatedUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT token is missing');
    }
    const [, token] = authHeader.split(' ');


    try {
        const { sub } = verify(token, `${process.env.JWT_KEY_USER}`) as IPayload

        req.id_user = sub

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token invalid' })
    }

}