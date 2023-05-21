const juandc = {
  name: 'Juanito',
  age: 18,
  approvedCourses: ['Curso 01'],
  addCourse(newCourse) {
    console.log('This', this)
    console.log('This', this.approvedCourses)
    this.approvedCourses.push(newCourse);
  }
}

// console.log(Object.keys(juandc));
// console.log(Object.getOwnPropertyNames(juandc));
// console.log(Object.entries(juandc));

Object.seal(juandc);
Object.freeze(juandc)

// Object.defineProperty(juandc, 'pruebaNASA', {
//   value: 'alien',
//   writable: false,
//   configurable: false,
//   enumerable: false,
// })

// Object.defineProperty(juandc, 'browser', {
//   value: 'Firefox',
//   writable: false,
//   configurable: true,
//   enumerable: true,
// })

// Object.defineProperty(juandc, 'editor', {
//   value: 'VSC',
//   writable: true,
//   configurable: false,
//   enumerable: true,
// })

// Object.defineProperty(juandc, 'terminal', {
//   value: 'WSL',
//   writable: true,
//   configurable: true,
//   enumerable: false,
// })

console.log(Object.getOwnPropertyDescriptors(juandc));