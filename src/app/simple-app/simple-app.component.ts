import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, XhrFactory } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import axios from 'axios';


@Component({
  selector: 'app-simple-app',
  templateUrl: './simple-app.component.html',
  styleUrls: ['./simple-app.component.css']
})

export class SimpleAppComponent implements OnInit {
   registerForm: FormGroup;
   name: string;
   emailid: string;
   byId: string;
   ff: object[];

   //Send Email
   To: string;
   Subject: string;
   Body: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private https: HttpClientModule,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      byId: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.name = this.registerForm.get("name").value;
    this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/api/contacts', {
        name: this.name,
        email: this.emailid,
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Submitted");
          resolve(userResponse.data);
        }
      })
    })
    alert(this.name+" added succesfully");
    return promise;
  }

  onDelete() {
    this.name = this.registerForm.get("byId").value;
    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.delete('http://localhost:8080/api/contacts/'+this.name, {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Deleted");
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.data);
        }
      })
    })
    alert(this.name+" Deleted succesfully");
    return promise;
  }
  onSearch() {
    this.byId = this.registerForm.get("byId").value;
    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:8080/api/contacts/'+this.byId, {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        this.name = userResponse.data.name;
        this.emailid = userResponse.data.email;
        if (userResponse.status == true) {
          console.log("Recieved");
          alert(userResponse.data[0].name+" "+userResponse.data[0].name)
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

  onUpdate() {
    this.byId = this.registerForm.get("byId").value;

    this.name = this.registerForm.get("name").value;
    this.emailid = this.registerForm.get("emailid").value;

    let promise = new Promise<any>((resolve, reject) => {
      this.http.put('http://localhost:8080/api/contacts/'+this.byId, {
        name: this.name,
        email: this.emailid,
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Updated");
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

  onSearchAll() {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:8080/api/contacts/', {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
       // this.SearchAllss = userResponse;
        var fullObject = Object.values(userResponse);
        this.ff = Object.values(fullObject[2]);
        //alert(this.ff);
        this.name = userResponse.data.name;
        this.emailid = userResponse.data.email;
        if (userResponse.status == true) {
         
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

  EmailSend() {
    axios.post('http://localhost:8080/api/Email', {
      To: this.To,
      Subject: this.Subject,
      Body: this.Body
    })
    .then( (response)=> {
      console.log(response);
    })
    .catch( (err)=> {
      console.log(err);
    })

    this.To = "";
    this.Subject = "";
    this.Body = "";
  }


}
