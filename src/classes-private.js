function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParameter(parameter) {
  throw new Error(`${parameter} es un parametro obligatorio`)
}

class LearningPath {
  constructor ({
    name = requiredParameter('name'),
    courses = []
  }) {
  name;
  courses;
  }
}

class Student {
  #learningPaths;
  constructor({
    name = requiredParameter('name'),
    email = requiredParameter('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.#learningPaths = learningPaths;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };


    if (isArray(learningPaths)) {
      this.#learningPaths = [];
      for (let learningPath of learningPaths) {
        this.learningPaths = learningPath
      }
    } else {
      console.warn('Tus learningPaths no son un array')
      this.#learningPaths = [];
    }
  }

  get learningPaths() {
    return this.#learningPaths
  }

  set learningPaths(newLP) {
    newLP instanceof LearningPath
      ? this.#learningPaths.push(newLP)
      : console.warn('learningPath no es un verdadero LearningPath')
  }
}


const webDev = new LearningPath({
  name: 'Escuela de Desarollo Web'
})

const dataCience = new LearningPath({
  name: 'Escuela de Data Cience'
})

const escuelaSUS = {
  name: 'Escuela del Impostor',
  courses: []
}

const juandc = new Student({
  name: 'Juanito',
  age: 18,
  email: 'juanito@proton.me',
  instagram: 'fjuandc',
  twitter: 'fjuandc',
  learningPaths: [
    webDev,
    dataCience,
    escuelaSUS,
  ]
})
