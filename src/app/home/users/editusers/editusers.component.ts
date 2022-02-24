import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {


  formUser: FormGroup;


  files: FileList;

  id;

  constructor(private formbuilder: FormBuilder, private router: Router, private userService: UserService, private  activateRouter: ActivatedRoute) {
  }

  ngOnInit() {

    this.formUser = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      id: ['']
    });

    this.id = this.activateRouter.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(res => {

      this.formUser.get('firstName').setValue(res.firstName);
      this.formUser.get('lastName').setValue(res.lastName);
      this.formUser.get('email').setValue(res.email);
      this.formUser.get('phone').setValue(res.phone);
      this.formUser.get('password').setValue(res.password);
      this.formUser.get('id').setValue(res.id);



    });


  }


  editUser() {

    console.log(this.formUser.value);

    if (this.formUser.invalid) {

      return;
    }

    console.log(this.id);
    console.log(this.formUser.value);

    const formaData = new FormData();

    formaData.append('file', this.files.item(0));
    formaData.append('firstName', this.formUser.get('firstName').value);
    formaData.append('lastName', this.formUser.get('lastName').value);
    formaData.append('phone', this.formUser.get('phone').value);
    formaData.append('email', this.formUser.get('email').value);
    formaData.append('password', this.formUser.get('password').value);
    formaData.append('photo', this.files.item(0).name);
    formaData.append('id', this.id);


    this.userService.editUser(formaData).subscribe(res => {


      console.log(res);

    });


  }

  getPhoto(e) {


    this.files = e.target.files;

    console.log(this.files.item(0));

  }

}
