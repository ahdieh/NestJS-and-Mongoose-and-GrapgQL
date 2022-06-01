import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MonggoseSchema } from 'mongoose';
import { Hobby } from 'src/hobby/hobby.model';

@Schema()
export class Person {
  _id: MonggoseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  hobbies: Hobby[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
