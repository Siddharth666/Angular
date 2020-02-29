import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, XhrFactory } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-app2',
  templateUrl: './simple-app2.component.html',
  styleUrls: ['./simple-app2.component.css']
})
export class SimpleApp2Component implements OnInit {
  registerForm: FormGroup;
   name: string;
   language: string;
   byname: string;
   getall: object[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private https: HttpClientModule,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      language: ['', [Validators.required]],
      byname: ['', [Validators.required]],
    });
    
  }

  onRegister() {
    this.name = this.registerForm.get("name").value;
    this.language = this.registerForm.get("language").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/framework', {
        name: this.name,
        language: this.language,
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
    this.name = this.registerForm.get("byname").value;
    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.delete('http://127.0.0.1:5000/framework/'+this.name, {
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
    this.byname = this.registerForm.get("byname").value;


    //this.emailid = this.registerForm.get("emailid").value;
    //alert(this.name);

    let promise = new Promise<any>((resolve, reject) => {
      this.http.get('http://127.0.0.1:5000/framework/'+this.byname, {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse.result.name);
        this.name = userResponse.result.name;
        this.language = userResponse.result.language;
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
    this.byname = this.registerForm.get("byname").value;

    this.name = this.registerForm.get("name").value;
    this.language = this.registerForm.get("language").value;

    let promise = new Promise<any>((resolve, reject) => {
      this.http.put('http://127.0.0.1:5000/framework/'+this.byname, {
        name: this.name,
        language: this.language,
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
      this.http.get('http://127.0.0.1:5000/framework', {
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        //alert(userResponse);
        // this.name = userResponse.data.name;
        // this.language = userResponse.data.language;
        this.getall = Object.values(userResponse.result);
        //this.getall = Object.values(this.getall);
        if (userResponse.status == true) {
         
          resolve(userResponse.data);
        }
      })
    })
    return promise;
  }

  //Speech Recognition

    onSaySomething() {
    alert("Say something")

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/VoiceMessage', {
        
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        alert('You said'+userResponse.result);
          this.name = userResponse.result
        if (userResponse.status == true) {
          console.log(userResponse.result);
          alert('You said '+userResponse.result);
          this.name = userResponse.result
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.result);
        }
      })
    })
    return promise;
  }

  onSayName() {
    alert("Say Name")

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/SayName', {
        
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        alert('You said '+userResponse.result);
          this.name = userResponse.result
        if (userResponse.status == true) {
          console.log(userResponse.result);
          alert('You said'+userResponse.result);
          this.name = userResponse.result
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.result);
        }
      })
    })
    return promise;
    
  }

  onSayLanguage() {
    alert("Say Language")

    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/SayName', {
        
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        alert('You said'+userResponse.result);
          this.language = userResponse.result
        if (userResponse.status == true) {
          console.log(userResponse.result);
          alert('You said'+userResponse.result);
          this.language = userResponse.result
          // this.onLogin.next(userResponse.data);
          // this.toastr.success(userResponse.message);
          resolve(userResponse.result);
        }
        //this.onRegister();
      })
    })
    return promise;
  }

}
