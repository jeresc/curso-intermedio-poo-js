class SuperObject {

  static isObject(subject) {
    return Array.isArray(subject) || subject === null
      ? false
      : typeof subject == 'object';
  }
  
  static isArray(subject) {
    return Array.isArray(subject);
  }
  
  static deepCopy(subject) {
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
}

console.log(SuperObject.isObject({}))