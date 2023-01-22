import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

    create(user: User) {
        return this.model.create(user);
    }

    findAll() {
        return this.model.find();
    }

    findOne(id: string) {
        return this.model.findById(id);
    }

    update(id: string, user: User) {
        return this.model.findByIdAndUpdate(id, user, { new: true });
    }
    delete(id: string) {
        return this.model.findByIdAndRemove(id);
    }
}
