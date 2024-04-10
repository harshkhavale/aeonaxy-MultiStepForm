import {
  lifelonglearner,
  other,
  professional,
  student,
  teacher,
  parent,
  linechart,
  globe,
  vector,
  target,
  eyes,
  arithematic,
  algebra1,
  algebra2,
  calculus,
} from "./assets";

export const roles = [
  {
    image: student,
    role: "Student",
    tagline: "or soon to be enrolled",
  },
  {
    image: professional,
    role: "Professional",
    tagline: "persuing a career",
  },
  {
    image: parent,
    role: "Parent",
    tagline: "of a school-age child",
  },
  {
    image: lifelonglearner,
    role: "Lifelong learner",
  },
  {
    image: teacher,
    role: "Teacher",
  },
  {
    image: other,
    role: "Other",
  },
];
export const interests = [
  {
    image: linechart,
    desc: "Learning specific skills to advance my career in",
  },
  {
    image: globe,
    desc: "Exploring new topics I'm interested in",
  },
  {
    image: vector,
    desc: "Refreshing my math foundation",
  },
  {
    image: target,
    desc: "Exercising my brain to stay sharp",
  },
  {
    image: eyes,
    desc: "Something else",
  },
];

export const mathOptions = [
  {
    image: arithematic,
    title: "Arithmetic",
    level: "Introductory",
  },
  {
    image: algebra1,
    title: "Basic Algebra",
    level: "Foundational",
  },
  {
    image: algebra2,
    title: "Intermediate Algebra",
    level: "Intermediate",
  },
  {
    image: calculus,
    title: "Calculus",
    level: "Advanced",
  },
];
