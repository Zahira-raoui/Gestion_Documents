//ajouter un document dans la liste des documents en remplissant un formulaire
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit{
  constructor(private builder: FormBuilder, private service: UserService, private router: Router,
    private toastr: ToastrService, private dialogref: MatDialogRef<AddDocumentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      if (this.data.id != '' && this.data.id != null) {
        this.loadFolderdata(this.data.id); } }

  addDocumentForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    chemain: this.builder.control(''),
    type: this.builder.control(''),
    size: this.builder.control(''),
  });

editdata:any;

  loadFolderdata(code: any) {
    this.service.getFolderById(code).subscribe(res => {
      this.editdata = res;

      this.addDocumentForm.setValue({
        id: this.editdata.id,
        name: this.editdata.name,
        chemain: this.editdata.chemain,
        type:this.editdata.type,
        size:this.editdata.size
       
      });
    });
  }

  
  proceedregister() {
    if (this.addDocumentForm.valid) {
      console.log(this.addDocumentForm.value);
      this.service.addDocument(this.addDocumentForm.value).subscribe(() => {
        this.toastr.success('Mise à jour effectuée avec succès');
      });
      this.dialogref.close();
    } else {
      this.toastr.warning('Veuillez entrer des données valides');
    }
  }
}




 


  