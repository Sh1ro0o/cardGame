import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function passwordRepeatMatchValidator(fg: FormGroup) : {[key: string]: any} | null {
  const password = fg.get('password').value;
  const rePassword = fg.get('rePassword').value;

  if(password === rePassword) {
    return null;
  } else {
    return ({ match : true });
  }
}
