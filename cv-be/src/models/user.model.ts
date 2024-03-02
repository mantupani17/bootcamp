import { InjectModel } from "@nestjs/mongoose";
import { BaseModel } from ".";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";

export class UserModel extends BaseModel{
    constructor(@InjectModel(User.name, 'primary') model: Model<UserDocument>){
        super(model)
    }
}