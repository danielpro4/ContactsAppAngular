export class Contact {
	
	private id: number;
	private name: string;
	private address: string;
	private email: string;
	private phone: string;

	constructor(id: number, name: string, email: string, phone: string, adddress: string='') {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = adddress;
	}
}