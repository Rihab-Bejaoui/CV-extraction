import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    this.loginForm = this.formbuilder.group({

      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }

  get f() {


    return this.loginForm.controls;
  }

  go() {

    this.submitted = true;

    if (this.loginForm.invalid) {

      //  Swal.fire('Oops...', 'form invalid!', 'error');


      return;
    }


    console.log(this.loginForm.value);

    this.userService.login(this.loginForm.value).subscribe(res => {


      if (res != null) {

        sessionStorage.setItem('user', JSON.stringify(res));
        sessionStorage.setItem('etat', '1');
        this.router.navigate(['']);
      } else {

        Swal.fire('Oops...', 'user not found!', 'error');

      }
    }, err => {
      Swal.fire('Oops...', 'server not found!', 'error');


    });
  }
}


