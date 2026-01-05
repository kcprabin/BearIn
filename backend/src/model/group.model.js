import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    max: [10, "A group can have a maximum of 10 members"],

    groupID: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);


export const Group = mongoose.model("Group", groupSchema);
