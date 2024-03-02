import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CognitoHelper, JwkService } from 'src/utils/cognito';
@Injectable()
export class CognitoGroupService {
    cognitoService = null
    ClientId = null
    constructor(private readonly configService: ConfigService) {
        this.cognitoService = CognitoHelper(this.configService.get('cognitoConfig'))
        this.ClientId = this.configService.get('cognitoClientId')
    }

    /**
     * @description Signup with cognito
     * @param data 
     * @returns 
     */
    async signup(data) {
        const clientId = this.ClientId
        return new Promise((_, __)=>{
            const params = {
                clientId,
                Username: data?.username,
                Password: data?.password,
                UserAttributes: [
                    {
                        Name: 'email',
                        Value: data?.email
                    },
                    {
                        Name: 'family_name',
                        Value: data?.family_name
                    },
                    {
                        Name: 'middle_name',
                        Value: data?.middle_name
                    },
                    {
                        Name: 'given_name',
                        Value: data?.given_name
                    },
                    {
                        Name: 'name',
                        Value: data?.name
                    },
                    {
                        Name: 'phone_number',
                        Value: data?.phone_number
                    }
                ],
                // SecretHash: this.hashSecret(data?.username).toString()
            }
            this.cognitoService.signUp(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            });
        })  
    }

    /**
     * @description Confirm the signup
     * @param username 
     * @param confirmationCode 
     * @returns 
     */
    async confirmSignup(username, confirmationCode) {
        const params = {
            ClientId: this.ClientId, /* required */
            ConfirmationCode: confirmationCode, /* required */
            Username: username, /* required */
            // SecretHash: this.hashSecret(data?.username)
        }
        return new Promise((_, __)=>{
            this.cognitoService.confirmSignUp(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    /**
     * @description Signin with cognito
     * @param username 
     * @param password 
     * @returns 
     */
    async signin(username, password) {
        const params = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: this.ClientId,
            AuthParameters: {
              USERNAME: username,
              PASSWORD: password,
            //   SecretHash: this.hashSecret(data?.username)
            }
        };
        return new Promise((_, __)=>{
            this.cognitoService.initiateAuth(params, (err, data) => {
                if (err) return __(err)
                return _(data.AuthenticationResult)
            })
        })
    }

    /**
     * @description Signout with cognito
     * @param token 
     * @returns 
     */
    async signout(token) {
        const params = {
            AccessToken: token /* required */
        };
        return new Promise((_, __)=>{
            this.cognitoService.globalSignOut(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    /**
     * @description Get the profile
     * @param token 
     * @returns 
     */
    async profile(token) {
        const cognitoClientId = this.configService.get('cognitoClientId')
        const jwkUri = this.configService.get('jwkUrI')
        const issuer = this.configService.get('issuer')
        const jwk = new JwkService({cognitoClientId, jwkUri, issuer})
        const userData = await jwk.verifyToken(token) 
        return userData
    }

    async hashSecret(username) {
        // const hash = crypto.createHmac('SHA256', this.secretHash)
        // .update(username + ClientId)
        // .digest('base64')
        // console.log(hash)
        // return hash
    }

    /**
     * @description Remove user from cognito
     * @param username 
     * @returns 
     */
    async removeUser(username) {
        const params = {
            UserPoolId: this.configService.get('cognitoUserPoolId'),
            Username: username
        }
        return new Promise((_, __)=>{
            this.cognitoService.adminDeleteUser(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async createGroup(groupName, description, precedence) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
            Description: description,
            Precedence: precedence,
        };
        return new Promise((_, __)=>{
            this.cognitoService.createGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async removeGroup(groupName) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
        };
        return new Promise((_, __)=>{
            this.cognitoService.deleteGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async getGroup(groupName) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
        };
        return new Promise((_, __)=>{
            this.cognitoService.getGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async listGroups(limit) {
        const params = {
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
            Limit: Number(limit),
            // NextToken: 'STRING_VALUE'
        };
        return new Promise((_, __)=>{
            this.cognitoService.listGroups(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async updateGroup(groupName, description, precedence) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
            Description: description,
            Precedence: precedence,
            // RoleArn: 'STRING_VALUE'
        };
        return new Promise((_, __)=>{
            this.cognitoService.updateGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async addUserToGroup(groupName, username) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
            Username: username /* required */
        }
        return new Promise((_, __)=>{
            this.cognitoService.adminAddUserToGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async removeUserFromGroup(groupName, username) {
        const params = {
            GroupName: groupName, /* required */
            UserPoolId: this.configService.get('cognitoUserPoolId'), /* required */
            Username: username /* required */
        }
        return new Promise((_, __)=>{
            this.cognitoService.adminRemoveUserFromGroup(params, (err, data) => {
                if (err) return __(err)
                return _(data)
            })
        })
    }

    async changePassword(token, body) {
        const { previousPassword, newPassword, username } = body
        const signinRes = await this.signin(username, previousPassword)
        return signinRes
        // var params = {
        //     AccessToken: token, /* required */
        //     PreviousPassword: previousPassword, /* required */
        //     ProposedPassword: newPassword /* required */
        // };
        // return new Promise((_, __)=>{
        //     cognitoService.changePassword(params, function(err, data) {
        //         console.log(err)
        //         if (err) return __(err)
        //         console.log(data)
        //         return _(data)  // successful response
        //     });
        // })
    }
}
