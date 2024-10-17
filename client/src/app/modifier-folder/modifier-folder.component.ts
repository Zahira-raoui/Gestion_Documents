//modifier le nom d'un dossier
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { UserService } from '../service/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-folder',
  templateUrl: './modifier-folder.component.html',
  styleUrls: ['./modifier-folder.component.css']
})
export class ModifierFolderComponent implements OnInit {
  constructor(private folderService: UserService,private builder: FormBuilder,  private toastr: ToastrService,
    private dialogref: MatDialogRef<ModifierFolderComponent>, @Inject(MAT_DIALOG_DATA) public data: any){} 

    ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.loadFolderdata(this.data.id); } }

editdata: any;

folderForm  = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    documents: this.builder.array([
        this.builder.group({
            id: this.builder.control(''),
            name: this.builder.control(''),
            chemain: this.builder.control(''),
            type: this.builder.control(''),
            size: this.builder.control(0),
          }),
    ]) 
  });


  loadFolderdata(code: any) {
    this.folderService.getFolderById(code).subscribe(res => {
      this.editdata = res;

      this.folderForm.setValue({
        id: this.editdata.id,
        name: this.editdata.name,
        documents:this.editdata.documents
       
      });
    });
  }

  updateFolder() {
    const newId = this.folderForm.value.id;
    console.log(newId);
    const newFolderData = this.folderForm.value;
    this.folderService.updateFolder(newId, newFolderData)
      
    .subscribe(() => {
        this.toastr.success('Mise à jour effectuée avec succès');
        this.dialogref.close();

    });
  }
}