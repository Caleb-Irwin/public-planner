import { model, Schema, Document, Types, Model } from "mongoose";

type ID = Types.ObjectId;

interface IKitten {
  name: string;
}

interface IKittenDoc extends IKitten, Document {
  //   getEmployees(): Promise<IKittenDoc[]>;
  speak(): void;
}

interface IKittenModel extends Model<IKittenDoc> {
  //   findYoungerThan(age: number): Promise<IKittenDoc[]>;
}

const KittenSchemaFields: Record<keyof IKitten, any> = {
  name: String,
};

const KittenSchema = new Schema(KittenSchemaFields);

// KittenSchema.static("findYoungerThan", function (age: number) {
//   const minimumBirthDate = new Date(Date.now() - age * 365 * 24 * 3600 * 1000);
//   return Kitten.find().where("birthdate").gt(minimumBirthDate);
// });

KittenSchema.method("speak", function (this: IKittenDoc) {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
});

const Kitten = model<IKittenDoc, IKittenModel>("Kitten", KittenSchema);

export { Kitten, IKitten };
