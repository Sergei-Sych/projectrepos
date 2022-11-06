import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../shared/styles/auth-form.css']
})
export class RegistrationComponent implements OnInit{
  infoText = "If you do not have an account you can";
  iconName = faEye;

  submitted = false;
  registerForm!: FormGroup;

  constructor(private register: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.register.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {return;}

    alert('SUCCESS!!');
    console.log(this.registerForm.value);
  }
}
