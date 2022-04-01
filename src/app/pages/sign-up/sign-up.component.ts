import { Component  } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent{

  user:User = {
    email : '',
    password  : '',
    fullName  : '',
    address : '',
    cellPhone : ''
  };

  registerForm: FormGroup;

  constructor(  private userService:  UserService) { 
    this.registerForm  = new FormGroup({
      fullName  : new FormControl(''),
      email : new FormControl(''),
      password  : new FormControl(''),
      address : new FormControl(''),
      cellPhone : new FormControl(''),
    })

    console.log(this.registerForm);
    
  }

  onSubmit(formDirective:FormGroupDirective){
    
    console.log(this.registerForm);
    
    this.user  = this.registerForm.value;
    
    console.log(this.user);
    formDirective.resetForm();
    this.registerForm.reset();
    
    /* this.userService
      .register(this.user).subscribe( resp =>  {
        console.log(resp);
        this.registerForm.reset(); 
       }); */
  }


}