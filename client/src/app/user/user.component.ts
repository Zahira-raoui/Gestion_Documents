//affichage d'un liste d'utilisateur pour gerer cette liste
import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivationComponent } from '../activation/activation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {

  constructor(private router: Router,private builder: FormBuilder, private service: UserService, private dialog: MatDialog,private toastr:ToastrService) {
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
  }
  
  LoadUser() {
    this.service.GetAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['username', 'name', 'email', 'status', 'role', 'action'];

  updateuser(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }
  removeuser(code:any){
    this.service.removeUser(code).subscribe(res => {
      this.LoadUser();
      this.toastr.success('Supression effectuée avec succès');

    });
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(ActivationComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {
        usercode: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.LoadUser();
    });
  }
 }
