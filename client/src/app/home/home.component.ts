//Affichage de page d'utilisateur pour manipuler les documents et les dossiers
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifierFolderComponent } from '../modifier-folder/modifier-folder.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 export class HomeComponent implements OnInit {

   userFolders: any;
   constructor(private router: Router,private service: UserService,private dialog: MatDialog,private toastr: ToastrService) {}

   ngOnInit(): void {
    this.service.getUserFolders().subscribe(
      folders => {
        this.userFolders = folders;
        console.log('Documents récupérés avec succès',this.userFolders);
      },
      error => {
        console.error('Erreur lors de la récupération des documents', error);
      
      }
    );
  }
  folder:any;
LoadFolder(){
  this.service.getUserFolders().subscribe(res => {
    this.folder= res;
  });
}
  updateFolder(code: any) {
    this.openEditFolderDialog('1000ms', '600ms', code);
  }
  openEditFolderDialog(enteranimation: any, exitanimation: any, code: string): void {
    const dialogRef = this.dialog.open(ModifierFolderComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '400px', 
      data: { id: code },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.LoadFolder()
    });
  }
  deleteFolder(folderId: string): void {
    this.service.deleteFolders(folderId).subscribe(
      () => {
        this.toastr.success('Folder supprimé avec succès');
        this.service.getUserFolders().subscribe(
          folders => {
            this.userFolders = folders;
          },
          error => {
            this.toastr.error('Erreur lors de la suppression');
          }
        );
      }
    );
  }
  onButtonClicked() {
    this.router.navigate(['/manipuler-documents']);
  }

}
  





















