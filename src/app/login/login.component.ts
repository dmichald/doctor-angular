import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  loading = false;
  submitted = false;
  error = '';


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/manage/office']);
    }
  }

  // tslint:disable-next-line:typedef
  async ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {

          const returnUrl = '/manage/office';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = "Niewłaśćiwy login lub hasło";
          this.loading = false;
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {});

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'forgot-password-dialog',
  templateUrl: 'forgot-password-dialog.html',
})
export class DialogOverviewExampleDialog {
  email = new FormControl('', [Validators.email, Validators.minLength(2)]);

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOk() {
    if (this.email.valid) {
      console.log('SEND TO:' + this.email.value);
      this.email.setValue('');
    }
  }
}
