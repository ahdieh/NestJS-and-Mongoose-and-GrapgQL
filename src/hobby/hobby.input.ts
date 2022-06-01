import { Schema as MongooseSchema } from 'mongoose';

export class CreateHobbyInput {
  name: string;
}

export class ListHobbyInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
}

export class UpdateHobbyInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
}
