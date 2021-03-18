import { FormControl } from '@angular/forms';

export function passwordContainsUpperCaseValidator(password: FormControl) : {[key: string]: any} | null {
  const regex = /[A-Z]/g
  console.log(password.value);

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ upperCase : true });
  }
}
