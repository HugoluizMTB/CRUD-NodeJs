import passport from 'passport'
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

///tempo de expiração do token
const EXPIRATION_TIME = 60 *60 * 4 ///4hrs

const JWT_SECRET_KEY = process.env.JWT_KEY || 'batata'

export const initializePassport = () => {
    const opts: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET_KEY
    }

    const strategy = new Strategy(opts, (payload, done) => {
        try {
            if (payload.email)
            return done(null, payload)
        } catch (error) {
            return done(error, false)
        }
    })  
    passport.use(strategy)
    passport.initialize()


}

export const authenticate = () => passport.authenticate('jwt', { session: false})
export const generateTokenJWT = async (payload: any, expiresIn: number = EXPIRATION_TIME) => {
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn})
}