import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class UserService {
    constructor(private readonly userModel: UserModel){}
    async create(body:any): Promise<any> {
        return this.userModel.create(body)
    }

    async getAllUsers(query:any, project:any, skip:number, limit:number, sort: any) {
        return this.userModel.findAll(query, project, skip, limit, sort)
    }

    async getCalculatedUsers(query:any = {}, skip:number = 0, limit:number = 10, sort: any = {createdAt: -1}) {
        return this.userModel.aggregate([
            {
              $match: query
            },
            {$sort: sort},
            {$skip: Number(skip) },
            {$limit: Number(limit) },
            {
              $project: {
                name: { $concat: ["$firstname", " ", "$lastname"]},
                username:1,
                status: {
                 $switch:{
                   branches: [
                     { case: {$eq:["$status", 1]}, then: 'Active##green' },
                     { case: {$eq:["$status", 0]}, then: 'Deleted##red' }
                   ],
                   default: 'In-Active##red'
                 }
                },
                createdAt: 1,
                updatedAt: 1
              }
            }
        ])
    }

    async removeUser(id: string): Promise<any> {
        return this.userModel.deleteById(id)
    }

}
