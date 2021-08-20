import { mongoose } from ".";

export const ProjectType = mongoose.model(
  "ProjectTypes",
  new mongoose.Schema({
    tags: { type: [String], default: [] },
    projectType: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
  })
);

export const Blog = mongoose.model(
  "Blogs",
  new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedOn: { type: Date, required: true },
  })
);
