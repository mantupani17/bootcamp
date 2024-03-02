import { Logger } from '@nestjs/common'
import * as aws from 'aws-sdk'
interface AWSConfigI {
    secretAccessKey: string
    accessKeyId: string
    region: string
}
export function AwsConfig(cfgOpts: AWSConfigI) {
    Logger.log(`AWS configured`)
    aws.config.update(cfgOpts)
}