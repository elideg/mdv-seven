import { NotifyService } from '@mdv-seven/core-data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mdv-seven-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfo = { email: 'e@e.com', password: 'pass'}
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notify: NotifyService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser = this.form.value
    this.notify.notify('Invalid User')
    if (this.form.invalid) {
      return false;
    } else {
      if(inputedUser.email === this.userInfo.email && inputedUser.password === this.userInfo.password) {
        this.notify.notify('Successfully Logged In')
        this.router.navigate(['/projects'])
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }


}
