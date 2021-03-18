import { FormControl } from '@angular/forms';

export function passwordContainsNumberValidator(password: FormControl) : {[key: string]: any} | null {
  const regex = /[0-9]/g

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ hasNumber : true });
  }
}
