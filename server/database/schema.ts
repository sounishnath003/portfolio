import { mongoose } from ".";

// Timeline Schema
export const Timeline = mongoose.model(
  "Timelines",
  new mongoose.Schema(
    {
      location: { type: String, required: true },
      roleOffered: { type: String, required: true },
      organization: { type: String, required: true },
      timeDuration: { type: String, required: true },
      workDescription: { type: String, required: true },
    },
    { timestamps: true }
  )
);

// Skills Schema
export const Skills = mongoose.model(
  "Skills",
  new mongoose.Schema(
    {
      skill: { type: String, required: true },
      parentSkillId: { type: String, default: null },
    },
    { timestamps: true }
  )
);

// Project Schema
export const Project = mongoose.model(
  "Projects",
  new mongoose.Schema(
    {
      photo: { type: String, required: true },
      title: { type: String, required: true },
      summary: { type: String, required: true },
      description: { type: String, required: true },
    },
    { timestamps: true }
  )
);

// Project Type Schema
export const ProjectType = mongoose.model(
  "ProjectTypes",
  new mongoose.Schema(
    {
      tags: { type: [String], default: [] },
      projectType: { type: String, required: true },
      logo: { type: String, required: true },
      description: { type: String, required: true },
    },
    { timestamps: true }
  )
);

// Blog Schema
export const Blog = mongoose.model(
  "Blogs",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      publishedOn: { type: Date, required: true },
    },
    { timestamps: true }
  )
);
