import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MonggoseSchema } from 'mongoose';
import { Hobby } from 'src/hobby/hobby.model';

@Schema()
export class Person {
  _id: MonggoseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [MonggoseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MonggoseSchema.Types.ObjectId[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
