import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, XhrFactory } from '@angular/common/http';

@Component({
  selector: 'app-flask-email',
  templateUrl: './flask-email.component.html',
  styleUrls: ['./flask-email.component.css']
})
export class FlaskEmailComponent implements OnInit {
  public EmailTo: String;
  public MSG: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onEmail() {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/frameworkEmail', {
        EmailId: this.EmailTo,
        Messages: this.MSG,
      }).subscribe((res: Response) => {
        let userResponse = JSON.parse(JSON.stringify(res));
        console.log(userResponse);
        if (userResponse.status == true) {
          console.log("Submitted");
          resolve(userResponse.data);
        }
      })
    })
    alert("Email sent succesfully");
    return promise;
  }

}
