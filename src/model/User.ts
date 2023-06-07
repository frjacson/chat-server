import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "users" } })
export class UserClass {
  @prop({ required: true })
  username!: string;

  @prop()
  password!: string;

  @prop()
  email?: string;

  @prop({ default: "male" })
  sex?: string;

  @prop()
  birthday?: Date;

  @prop()
  phone?: string;

  @prop()
  motto?: string;

  @prop()
  imgUrl?: string;
}

export const UserModel = getModelForClass(UserClass);
