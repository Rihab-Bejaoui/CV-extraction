import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  formUser: FormGroup;


  files: FileList;
  

  constructor(private formbuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {

    this.formUser = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  addUser() {

    console.log(this.formUser.value);

    if (this.formUser.invalid) {

      return;
    }

    console.log(this.formUser.value);

    const formaData = new FormData();

    formaData.append('file', this.files.item(0));
    formaData.append('firstName', this.formUser.get('firstName').value);
    formaData.append('lastName', this.formUser.get('lastName').value);
    formaData.append('phone', this.formUser.get('phone').value);
    formaData.append('email', this.formUser.get('email').value);
    formaData.append('password', this.formUser.get('password').value);
    formaData.append('photo', this.files.item(0).name);


    this.userService.addUser(formaData).subscribe(res => {


      console.log(res);

    });


  }

  getPhoto(e) {


    this.files = e.target.files;

    console.log(this.files.item(0));

  }
}
