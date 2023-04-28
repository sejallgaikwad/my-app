import resumeSejal from "./CV/Sejal's CV.pdf"


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sejallgaikwad.github.io/portfolio',
  title: 'SG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sejal Gaikwad',
  role: 'Sys Admin',
  description:
    "A recent computer science graduate with a strong interest in IT, specifically in Docker, Kubernetes, and systems administration. I'm skilled in Linux basics and RHCSA. Solving complex problems in a team-oriented environment is my passion. I enjoy listening to podcasts, traveling, and programming in languages such as C, C++, Java, Python, and Bash.",
  resume: resumeSejal,
  social: {
    linkedin: 'https://www.linkedin.com/in/sejal-gaikwad-365367266',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Linux',
  'Bash',
  'Windows',
  'HTML',
  'CSS',
  'C',
  'C++',
  'Python',
  'JavaScript',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sejalgaikwad1310@gmail.com',
}

export { header, about, projects, skills, contact }
