// Factory Pattern y RORO

function requiredParameters(parameter) {
  throw new Error(`${parameter} es un parametro obligatorio`)
}

function createStudent({
  name = requiredParameters('name'),
  email = requiredParameters('email'),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    age: age,
    email: email,
    approvedCourses: approvedCourses,
    learningPaths: learningPaths,
    socialMedia: {
      twitter: twitter,
      instagram: instagram,
      facebook: facebook,
    },

    get _name() {
      return private._name
    },
    // readName() {
    //   return private._name
    // },

    set _name(newName) {
      newName.length >= 3
        ? private._name = newName
        : console.warn('Tu nombre debe tener 3 caracteres o mas')
    }
    // changeName(newName) {
    //   private._name = newName
    // },
  };

  // Object.defineProperty(public, 'readName', {
  //   configurable: false,
  //   writable: false,
  // });
  // Object.defineProperty(public, 'changeName', {
  //   configurable: false,
  //   writable: false,
  // })

  return public
}
const juandc = createStudent({
  name: 'Juanito',
  age: 18,
  email: 'juanito@proton.me',
  instagram: 'fjuandc',
  twitter: 'fjuandc'
})