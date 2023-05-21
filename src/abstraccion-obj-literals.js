function isObject(subject) {
  return typeof subject == 'object';
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    keyIsObject
      ? copySubject[key] = deepCopy(subject[key])
      : subjectIsArray
        ? copySubject.push(subject[key])
        : copySubject[key] = subject[key]
  }

  return copySubject;
}

// Deep Copy
// const obj2 = deepCopy(obj1)

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
}

const juandc = deepCopy(studentBase);
// Object.defineProperty(juandc, 'name', {
//   value: 'Juanito',
//   configurable: false,
// });

Object.seal(juandc) // Todas sus propiedades ahora tienen 'configurable: false'
Object.isSealed(juandc)