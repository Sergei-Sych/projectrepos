import { Component } from '@angular/core';
import { Login } from './login';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../shared/styles/auth-form.css']
})
export class LoginComponent {
  infoText = "If you do not have an account you can";
  formModal = new Login();
  iconName = faEye;

  onSubmit(){
    alert(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
    );
    console.log(this.formModal);
  }
}
