import { mongoose } from ".";

// Skills Schema
export const Skills = mongoose.model("Skills", new mongoose.Schema({
  skill: {type: String, required: true},
  parentSkillId: {type: String, default: null},
}))


// Project Schema
export const Project = mongoose.model("Projects", new mongoose.Schema({
    photo: {type: String, required: true},
    title: {type: String, required: true},
    summary: {type: String, required: true},
    description: {type: String, required: true}
}))

// Project Type Schema
export const ProjectType = mongoose.model(
  "ProjectTypes",
  new mongoose.Schema({
    tags: { type: [String], default: [] },
    projectType: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
  })
);

// Blog Schema
export const Blog = mongoose.model(
  "Blogs",
  new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedOn: { type: Date, required: true },
  })
);
