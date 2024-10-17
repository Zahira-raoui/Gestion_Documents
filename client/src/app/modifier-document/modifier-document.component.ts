//Modifier les informations d'un document
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { UserService } from '../service/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-document',
  templateUrl: './modifier-document.component.html',
  styleUrls: ['./modifier-document.component.css']
})
export class ModifierDocumentComponent implements OnInit{
  constructor(private folderService: UserService,private builder: FormBuilder,  private toastr: ToastrService,
    private dialogref: MatDialogRef<ModifierDocumentComponent>, @Inject(MAT_DIALOG_DATA) public data: any){} 
    ngOnInit(): void {
      if (this.data.id != '' && this.data.id != null) {
        this.loadDocumentdata(this.data.id); } }
  editdata: any;
  documentForm  = this.builder.group({
    id: this.builder.control(''),
            name: this.builder.control(''),
            chemain: this.builder.control(''),
            type: this.builder.control(''),
            size: this.builder.control(''),
  });


  loadDocumentdata(code: any) {
    this.folderService.getDocumentById(code).subscribe(res => {
      this.editdata = res;
  
      this.documentForm.setValue({
        id: this.editdata.id,
        name: this.editdata.name,
        chemain:this.editdata.chemain,
        type: this.editdata.type,
        size:this.editdata.size
       
      });
    });
  }
  updatedocument() {
    const documentId = this.documentForm.value.id; 
    const newDocumentData = this.documentForm.value;
  console.log(documentId,newDocumentData);
    this.folderService.updateDocument(documentId, newDocumentData).subscribe(() => {
      this.toastr.success('Mise à jour effectuée avec succès');
      this.dialogref.close();
    });
  }
  
}
