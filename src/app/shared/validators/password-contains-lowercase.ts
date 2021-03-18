import { FormControl } from '@angular/forms';

export function passwordContainsLowerCaseValidator(password: FormControl) : {[key: string]: any} | null {
  const regex = /[a-z]/g

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ lowerCase : true });
  }
}
