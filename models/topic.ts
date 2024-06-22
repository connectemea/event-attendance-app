import mongoose, { Schema, Document, Model } from "mongoose";

interface ITopic extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const topicSchema: Schema<ITopic> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Topic: Model<ITopic> = mongoose.models.Topic || mongoose.model<ITopic>("Topic", topicSchema);

export default Topic;
