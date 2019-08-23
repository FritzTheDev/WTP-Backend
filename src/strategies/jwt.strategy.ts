import { Authenticator  } from "passport";
import { ExtractJwt, Strategy, StrategyOptions, VerifyCallback } from "passport-jwt";

export const jwtStrategy = (passport: Authenticator) => {
  // Gets Secret For Signing JWT From Env Vars
  const jwtSecret = process.env.JWT_SECRET;
  // Throws if environment variable isn't set.
  if (jwtSecret === undefined) {
    throw new Error("Missing JWT Secret. Check your Environment Configuration");
  }
  // Extracts the Web Token From The Request's Auth Header
  const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  // Set options for the JWT Strategy
  const strategyOptions: StrategyOptions = { secretOrKey: jwtSecret, jwtFromRequest };

  passport.use(new Strategy(strategyOptions, (jwtPayload, done) => {

  }));
};
