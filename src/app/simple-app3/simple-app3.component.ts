import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, XhrFactory } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-app3',
  templateUrl: './simple-app3.component.html',
  styleUrls: ['./simple-app3.component.css']
})
export class SimpleApp3Component implements OnInit {
  registerForm: FormGroup;
   FirstName: string;
   LastName: string;
   byId: string;

   //Email
   Flag: Boolean;
   To: string;
   Subject: string;
   Body: string;

   getall: object[];

   public  BASE_URL = "http://localhost:52052/api/student/";
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private https: HttpClientModule,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      byId: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.FirstName = this.registerForm.get("FirstName").value;
    this.LastName = this.registerForm.get("LastName").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post(this.BASE_URL, {
        FirstName: this.FirstName,
        LastName: this.LastName,
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Submitted");
          resolve(userResponse.data);
        }
      })
    })
    alert(this.FirstName+" added succesfully");
    return promise;
  }

  onDelete() {
    this.byId = this.registerForm.get("byId").value;
    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.delete(this.BASE_URL+this.byId, {
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
    alert(this.byId+" Deleted succesfully");
    return promise;
  }

  onSearch() {
    this.byId = this.registerForm.get("byId").value;


    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(this.BASE_URL+this.byId, {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
       // console.log(userResponse);
        console.log(userResponse.FirstName);
        this.FirstName = userResponse[0].FirstName;
        this.LastName = userResponse[0].LastName;
        if (userResponse.status == true) {
          console.log("Recieved");
          //alert(userResponse.data[0].name+" "+userResponse.data[0].name)
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

    this.FirstName = this.registerForm.get("FirstName").value;
    this.LastName = this.registerForm.get("LastName").value;

    let promise = new Promise<any>((resolve, reject) => {
      this.http.put(this.BASE_URL+this.byId, {
        FirstName: this.FirstName,
        LastName: this.LastName,
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Updated");
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.result);
        }
      })
    })
    return promise;
  }

  onSearchAll() {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(this.BASE_URL, {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        //alert(userResponse);
        // this.name = userResponse.data.name;
        // this.language = userResponse.data.language;
        this.getall = Object.values(userResponse);
        //this.getall = Object.values(this.getall);
        if (userResponse.status == true) {
         
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

  EmailSend() {
    this.Flag = true;
    // this.To = this.registerForm.get("To").value;
    // this.Subject = this.registerForm.get("Subject").value;
    // this.Body = this.registerForm.get("Body").value;

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post(this.BASE_URL, {
       Flag: this.Flag,
       To: this.To,
       Subject: this.Subject,
       Body: this.Body
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Flag Sent");
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

}
