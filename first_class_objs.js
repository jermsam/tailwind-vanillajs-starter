
export function add(x,y) {
  return x + y;
}

function genderCompose(gender) {
  return function sayGender(name) {
    return `${name} is ${gender}`;
  }
}

export const male = genderCompose("male");
export const female = genderCompose("female");




