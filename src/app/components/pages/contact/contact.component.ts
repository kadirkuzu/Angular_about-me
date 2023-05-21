import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    phone: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
  })
  get email() { return this.loginForm.get('email') }
  get phone() { return this.loginForm.get('phone') }
  get name() { return this.loginForm.get('name') }
  get notes() { return this.loginForm.get('notes') }

  editorConfig: AngularEditorConfig = {
    editable: true,
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: false,
    placeholder: 'Yazı girin.',
    defaultParagraphSeparator: '',
    defaultFontName: 'Roboto, sans-serif',
    sanitize: true,
    outline: false,
  };

  clear(){
    this.loginForm.reset()
  }
}
