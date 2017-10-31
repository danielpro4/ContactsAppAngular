import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './Contact';


declare var UIkit: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	private selectedContact: Contact = null;
	private headers: Headers;
	private title: String;
	private contacts: Array<Contact>;
	private loading: boolean = false;
	private oauthUrl = 'http://contacts.dev/oauth/token';
	private contactsUrl = 'http://contacts.dev/api/v1/contacts';
	private contact: Contact;

	constructor(private http: Http, private fb: FormBuilder) {
		this.title = 'Contacts App';

		this.headers = new Headers({
			'Accept': 'application/json',
			'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4Yzk4ZTYxNzk4YmM1NTQ4ZThlODI5NGFiZjkyMmIxMTQ3YjRjYzRlYTRkYzhiZjNiMTRmNzRmNTBiM2Q4MDQ2MDAwZmU0ZWE5N2Y5M2U5In0.eyJhdWQiOiIxIiwianRpIjoiNzhjOThlNjE3OThiYzU1NDhlOGU4Mjk0YWJmOTIyYjExNDdiNGNjNGVhNGRjOGJmM2IxNGY3NGY1MGIzZDgwNDYwMDBmZTRlYTk3ZjkzZTkiLCJpYXQiOjE1MDg2OTE5MTMsIm5iZiI6MTUwODY5MTkxMywiZXhwIjoxNTQwMjI3OTEzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.sgA1IqGX1_3BjKhXbHLYt_GtdrS0PL0XfKTXfgr8uU5Jt8x7DRkR9dzPVt9eBkIJlHHnWa20KtxFSsToh7vRsz3kENksynGIrX71HrFBDCWtXFH3wLN58qePiM5zMCPpJjSmtFXwa-KXy4jTqBcuiFz1hs05n797pqLo95qtE-uhIWuMVb1mvE-BixkXJIVO5cucke44lG0Yq02VQa3ZzHuL1zQTbUWfNQR2kN_bBwsSdDxd0V_0HC4kzX4yhLNO4jKli2rxLtjd3mrh9wTEcPr8Hnyq3r3cULJWHOGBVyofO1U2ApsTOSNUj5jzUb-I5R9GbtUvolq2viS9G1NdyLHBdelghmApRTlOkibqQxt-qR6QZNa-ZvqEi5va1sa3aSzjH_7dIW_OzK8AYFzh1FDmgEsDsb2MM7OiQylegVBbZKUqmvXFQp0Xk5vxqXIu2Q4n7oHZBNNeQy72mvcfV-WTR4_yyvQSU6JVpRKoOTMyXpgru8moEYV54uT7kXN4JKWeFxJBdDbPdWAshef-KE3gZNIQ1up3M4eEN-6Ca_Tby6ZAsSfDl4q6r4p3xoGnfR8FNP3iPZ4WMs7SOt-SuCIOKtMKbU0HxPB613VVGwdk6cYA4LFXFv0byKSrdhqoA5Zecl16c7cu-Eoa4m2nm4lYafffJsu-UaKoWM447xg',
			'Content-Type': 'application/json'
		});

		this.contacts = [];

		this.contact = new Contact(1, 'Daniel Pérez Atanacio', 'daniel@pagelab.io', '2225810011', 'Josefa O. de Doguez. No. 11 San Cristóbal Tepeteopan Tehuacan, Pue.');
	}

	getAccessToken(): Observable<Response> {
		let headers = new Headers({
			"Content-Type": "application/json",
			"Accept": "application/json"
		});

		let postData = {
			grant_type: "password",
			client_id: 1,
			client_secret: "ZJTFE49jzVRUoIDFjLo6836ZUpUBxqEwZFGSt3gg",
			username: "daniel.perez.atanacio@gmail.com",
			password: "123456",
			scope: ""
		}

		return this.http.post(this.oauthUrl, JSON.stringify(postData), {
			headers: headers
		});
	}

	getContacts(accessToken: string): Observable<Response> {
		let headers = new Headers({
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + accessToken,
			'Content-Type': 'application/x-www-form-urlencoded'
		});

		return this.http.get(this.contactsUrl, {
			headers: headers
		});
	}

	getToken() {
		this.getAccessToken().subscribe((response: Response) => {
			let oauthToken = response.json();

			this.getContacts(oauthToken.access_token).subscribe((response: Response) => {
				let json = response.json();

				if (json) {
					this.contacts = json.data;
				}
			});

		});
	}

	onCreate(form): void {
		form.reset();
	}

	ngOnInit(): void {

		const options = new RequestOptions({
			headers: this.headers
		});

		this.loading = true;

		this.http.get(this.contactsUrl, options).subscribe((response: Response) => {
			let json = response.json();

			if (json.data) {
				this.contacts = json.data;

				if (this.contacts.length > 0) {
					this.selectedContact = this.contacts[0];
				}
			}

			this.loading = false;
		});

	}

	onSubmit(form: NgForm) {

		const options = new RequestOptions({
			headers: this.headers
		});

		this.loading = true;

		this.http.post(this.contactsUrl, JSON.stringify(form.value), options).subscribe((response: Response) => {

			let json = response.json();

			if (json.data) {
				this.contacts = this.contacts.concat(json.data);
			}

			form.reset();

			this.loading = false;
		});
	}

	onSearch($event) {
		let query = String($event.target.value).length ?
			'/' + $event.target.value :
			'';

		const options = new RequestOptions({
			headers: this.headers
		});

		this.loading = true;

		this.http.get(this.contactsUrl + query, options).subscribe((response: Response) => {

			let json = response.json();

			if (json.data) {
				this.contacts = json.data;
			}

			this.loading = false;
		});
	}

	onSelect(contact: Contact): void {
		this.selectedContact = contact;
	}

}

// https://appdividend.com/2017/09/22/laravel-5-5-angular-4-tutorial-example-scratch/?utm_source=hashnode.com
// https://appdividend.com/2017/09/22/laravel-5-5-angular-4-tutorial-example-scratch/
// http://albanafmeti.com/2016/using-laravel-passport-with-an-angular2-client-app/
// https://blog.alex-miller.co/angular/2017/05/13/default-headers-in-angular.html
// http://itsolutionstuff.com/post/laravel-5-how-to-create-api-authentication-using-passport-example.html