import { Schema, Document, model } from "mongoose"; // Install mongoose (npm i mongoose, yarn add mongoose, etc.) and import variables.

interface Example extends Document {
  exampleString: string;
  exampleNumber: number;
}

const ExampleSchema: Schema = new Schema<Example>({
  exampleString: { type: String, default: "Hello, this is the default string value." },
  exampleNumber: { type: Number, default: 0 } // This is the default number.  
});

const EXAMPLES = model<Example>("Example", ExampleSchema);

export { EXAMPLES, ExampleSchema }; // Exports the Schema.