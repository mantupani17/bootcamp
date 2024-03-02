import { JwtRsaVerifier } from "aws-jwt-verify";
export class JwkService {
    config = null
    constructor(config) {
        this.config = config
    }
    async verifyToken(token) {
        const verifier = JwtRsaVerifier.create({
            issuer: this.config.issuer, // set this to the expected "iss" claim on your JWTs
            audience: this.config.cognitoClientId, // set this to the expected "aud" claim on your JWTs
            jwksUri: this.config.jwkUri, // set this to the JWKS uri from your OpenID configuration
        });
        try {
            const { given_name, middle_name, name, family_name, email, phone_number, email_verified } =  await verifier.verify(token);
            return { given_name, middle_name, name, family_name, email, phone_number, email_verified }
        } catch(error){
            console.log(error)
            console.log("Token not valid!");
            return {}
        }
    }

    async getPublicKey(token) {
        // const jwkResult = await axios.get(process.env.COGNITO_JWK_URL)
        // const jwks = jwkResult?.data
        // const decodedToken = decode(token, { complete: true })
        // // console.log(decodedToken)
        // const kid = decodedToken.header.kid
        // const jwk = jwks.keys.find(key => key.kid === kid)
        // // console.log(kid, jwk)
        // const publicKey = jwkToPem({kty: jwk.kty, n: jwk.n, e: jwk.n})
        // // console.log(publicKey)
        // return publicKey
    }
}