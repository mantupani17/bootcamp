import * as AWS from 'aws-sdk'
export function CognitoHelper(cognitoCfg) {
    return new AWS.CognitoIdentityServiceProvider(cognitoCfg)
}