//Manipuler la liste des documents(Supprimer, Modifier, Ajouter un document)
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { Router } from '@angular/router';
import { ModifierDocumentComponent } from '../modifier-document/modifier-document.component';
@Component({
  selector: 'app-manipuler-documents',
  templateUrl: './manipuler-documents.component.html',
  styleUrls: ['./manipuler-documents.component.css']
})
export class ManipulerDocumentsComponent implements OnInit{
  constructor(private service: UserService,private dialog: MatDialog,private toastr: ToastrService) {}
  userDocuments: any;

  ngOnInit(): void {
    this.service.getDocuments().subscribe(
      documents => {
        this.userDocuments = documents;
        console.log('Documents récupérés avec succès',this.userDocuments);
      },
      error => {
        console.error('Erreur lors de la récupération des documents', error);
      }
    );
  }
Document:any;
LoadDocuments(){
  this.service.getDocuments().subscribe(res => {
    this.Document= res;
  });
}


deleteDocument(documentId: string): void {
  this.service.deleteDocument(documentId).subscribe(
    () => {
      this.toastr.success('document supprimé avec succès');
      this.service.getDocuments().subscribe(
        folders => {
          this.userDocuments = folders;
        },
        error => {
          this.toastr.error('Erreur lors de la suppression');
        }
      );
    }
  );
}



openAddDocumentModal(): void {
  this.OpenDialog('100ms', '100ms');
        }

        OpenDialog(enteranimation: any, exitanimation: any): void {
      
      const dialogRef = this.dialog.open(AddDocumentComponent, {
        enterAnimationDuration: enteranimation,
        exitAnimationDuration: exitanimation,
        width: '25%',
        // height: '90vh',
        panelClass: 'center-dialog' 
  
      });
      dialogRef .afterClosed().subscribe(res => {
        dialogRef.close();
        this.LoadDocuments();

      });
    }
    
  updatDocument(code: any) {
    this.openEditDocument('300ms', '600ms', code);
  }
  openEditDocument(enteranimation: any, exitanimation: any, code: string): void {
    const dialogRef = this.dialog.open(ModifierDocumentComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '250px', 
      data: { id: code },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.LoadDocuments()
    });
  }


}
