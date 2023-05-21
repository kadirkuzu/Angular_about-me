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
  error = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  constructor(private toastr : ToastrService,private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(data=>this.error = false)
  }

  login(){
    let form = new FormData();
    form.append('email', this.email!.value!);
    form.append('password', this.password!.value!);
    this.http.post('http://kadirkuzu.42web.io/login.php', form)
      .subscribe((response:any) => {
        if(response.result) this.toastr.success(response.message,'Success')
        if(!response.result){
          this.toastr.error(response.message,'Error')
          this.error = true
        } 
      });
  }
}
