import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // We can get the token from the "access_token" query
	// param, available in the browsers "location" global
	const query = window.location.search.substring(1)
  const token = query.split('access_token=')[1]

	// Call the user info API using the fetch browser library
	fetch('https://api.github.com/user', {
			headers: {
				// Include the token in the Authorization header
				Authorization: 'token ' + token
			}
		})
		// Parse the response as JSON
		.then(res => res.json())
		.then(res => {
			// Once we get the response (which has many fields)
			// Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
			// Write "Welcome <user name>" to the documents body
			const nameNode = document.createTextNode(`Welcome, ${res.name}`)
			document.body.appendChild(nameNode)
		})
  }

}
