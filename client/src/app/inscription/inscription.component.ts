//inscription des utilisateur en remplissant une formulaire
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {



  Inscriptionform = this.builder.group({
        id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
        name: this.builder.control('', Validators.required),
        password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
        email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
        gender: this.builder.control('male'),
        role: this.builder.control('user'),
        isactive: this.builder.control(false)
      });

  constructor(private builder: FormBuilder, private service: UserService, private router: Router,
    private toastr: ToastrService) { }

  proceedregister() {
    if (this.Inscriptionform.valid) {
      this.service.RegisterUser(this.Inscriptionform.value).subscribe(result => {
        this.toastr.success("Veuillez contacter l'administrateur pour activer l'accès", 'Inscription avec succès');
        this.router.navigate(['authentification']);
      });
    } else {
      this.toastr.warning('Veuillez entrer des données valides');
    }
  }
}
