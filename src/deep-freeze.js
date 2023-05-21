// Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados de forma recursiva
// para así realmente lograr bloquear todo el objeto. A esto se le conoce comunmente como deepFreeze.

function deepFreeze(obj) {
  // Tu código aquí 👈
  function isObject(subject) {
    return typeof subject == 'object';
  }

  isObject ? Object.freeze(obj) : obj

  for (let key in obj) {
    const keyIsObject = isObject(obj[key]);

    keyIsObject
      ? deepFreeze(obj[key])
      : Object.freeze(obj[key])
  }

  return obj;
}