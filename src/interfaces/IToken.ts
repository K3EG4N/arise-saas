export interface IJwtPayload {
  sub: string;
  email: string;
  jti: number;
  exp: number;
}
