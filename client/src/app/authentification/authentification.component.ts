//pour authentification de l'admin et l'utilisateur standard
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: UserService,
    private router: Router) {
      sessionStorage.clear();
  }
  result: any;
  authentform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });
  proceedlogin() {
    if (this.authentform.valid) {
      this.service.GetbyCode(this.authentform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.authentform.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            if (this.result.role === 'admin') {
              this.router.navigate(['user']);
            } else {
              this.router.navigate(['home']);
            }        
          } else {
            this.toastr.error("Veuillez contacter l'administrateur", 'Utilisateur inactif');
          }
        } else {
          this.toastr.error('password invalides');
        }
      });
    } else {
      this.toastr.warning('Veuillez entrer des données valides');
    }
  }}