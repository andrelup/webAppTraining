import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLogingMode = true;
  isLoading = false;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLogingMode = !this.isLogingMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    if (this.isLogingMode) {
    } else {
      this.authService.signup(email, password).subscribe( resData => {
        console.log(resData);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
    }
    authForm.resetForm();
  }
}
