import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private toastr : ToastrService,private http: HttpClient) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }

  login(){
    let form = new FormData();
    form.append('email', this.email!.value!);
    form.append('password', this.password!.value!);
    this.http.post('http://kadirkuzu.42web.io/login.php', form)
      .subscribe(response => {
        console.log(response);
        
      });
  }
}
