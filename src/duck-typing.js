function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParameter(parameter) {
  throw new Error(`${parameter} es un parametro obligatorio`)
}

function createLeaningPath({
  name = requiredParameter('name'),
  courses = []
}) {
  const private = {
    _name: name,
    _courses: courses
  }

  const public = {
    
    get _name() {
      return private._name
    },

    set _name(newName) {
      newName.length >= 3
        ? private._name = newName
        : console.warn('Tu nombre debe tener 3 caracteres o mas')
    },

    get _courses() {
      return private._courses
    },
  }
  return public
}

function createStudent({
  name = requiredParameter('name'),
  email = requiredParameter('email'),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths
  };

  const public = {
    age: age,
    email: email,
    approvedCourses: approvedCourses,
    socialMedia: {
      twitter: twitter,
      instagram: instagram,
      facebook: facebook,
    },

    get name() {
      return private._name
    },

    set name(newName) {
      newName.length >= 3
        ? private._name = newName
        : console.warn('Tu nombre debe tener 3 caracteres o mas')
    },

    get learningPaths() {
      return private._learningPaths
    },

    set learningPaths(newLearningPath) {
      !newLearningPath.name
        ? console.warn('Tu Learning Path no tiene nombre')
        : !newLearningPath.courses
          ? console.warn('Tu Learning Path no tiene cursos')
          : !isArray(newLearningPath.courses)
            ? console.warn('Tu Learning Path no es un array (de cursos)')
            : private._learningPaths.push(newLearningPath)

    }
  };

  return public
}
const juandc = createStudent({
  name: 'Juanito',
  age: 18,
  email: 'juanito@proton.me',
  instagram: 'fjuandc',
  twitter: 'fjuandc'
})