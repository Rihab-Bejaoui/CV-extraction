import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {environment} from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  base_url;

  constructor(private  userService: UserService) {

    this.base_url = environment.base_url + '/users/images';
  }


  ngOnInit() {

    this.getAll();
  }


  getAll() {

    this.userService.allUser().subscribe(res => {

      this.users = res['data'];

    });
  }


  remove(id) {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {


        this.userService.removeUser(id).subscribe(res => {

          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          );

          this.getAll();
        });


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });

  }

}
