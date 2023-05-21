function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParameter(parameter) {
  throw new Error(`${parameter} es un parametro obligatorio`)
}

function LearningPath({
  name = requiredParameter('name'),
  courses = []
}) {
  name;
  courses;
}

function Student({
  name = requiredParameter('name'),
  email = requiredParameter('email'),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: []
  }

  Object.defineProperty(this, 'learningPaths', {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
        newLP instanceof LearningPath
          ? private._learningPaths.push(newLP)
          : console.warn('learningPath no es un verdadero LearningPath')
    },
  })

  if (isArray(learningPaths)) {
    private._learningPaths = [];

    for (let learningPath of learningPaths) {
      this.learningPaths = learningPath
    }
  } else {
    console.warn('Tus learningPaths no son un array')
    private._learningPaths = [];
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
  ]
})
