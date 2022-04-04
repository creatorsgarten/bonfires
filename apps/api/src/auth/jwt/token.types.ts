export interface JwtToken {
  /** User id (subject) */
  sub: number

  /** Email of the user */
  email: string

  /** Issued at */
  iat: number

  /** Expires at */
  exp: number
}
