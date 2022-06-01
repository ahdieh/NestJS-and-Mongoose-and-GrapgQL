import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreateHobbyInput,
  ListHobbyInput,
  UpdateHobbyInput,
} from './hobby.input';
import { Hobby, HobbyDocument } from './hobby.model';

@Injectable()
export class HobbyService {
  constructor(
    @InjectModel(Hobby.name) private hobbymodel: Model<HobbyDocument>,
  ) {}

  create(payload: CreateHobbyInput) {
    const createdHobby = new this.hobbymodel(payload);
    return createdHobby.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.hobbymodel.findById(_id).exec;
  }

  list(filters: ListHobbyInput) {
    return this.hobbymodel.find({ ...filters }).exec();
  }

  update(payload: UpdateHobbyInput) {
    return this.hobbymodel.findByIdAndUpdate(payload._id, { new: true }).exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.hobbymodel.findByIdAndDelete(_id).exec();
  }
}
