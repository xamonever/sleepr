import {Injectable, Logger} from "@nestjs/common";
import {AbstractRepository} from "@app/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserDocument} from "@app/common/models/user.schema";

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
    protected readonly logger = new Logger('auth');

    constructor(
        @InjectModel(UserDocument.name)
        userModel: Model<UserDocument>
    ) {
        super(userModel);
    }
}