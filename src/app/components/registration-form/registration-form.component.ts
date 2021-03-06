import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationRequestModel } from 'src/app/models/registrationModel';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  
  public registrationForm:FormGroup;
 
 

  get passwordField():FormControl{
    return this.registrationForm.get('password') as FormControl;
  }

  get favouriteHexCodeValue():string{
    return this.registrationForm.get('favouriteHexCode')?.value;
  }

  constructor() { }

  ngOnInit(): void {
    this.generateRegistrationForm();
  }

  
  
  public generateRegistrationForm (): void {
		this.registrationForm =
			new FormGroup( {
				name: new FormControl(
					'Hakan',
					{
						validators: [Validators.required]}),

				email: new FormControl('Hakan@hotmail.com',{validators: [Validators.required,]}),

				password: new FormControl('password',{validators: [Validators.required]}),
				favouriteHexCode: new FormControl( '#efefef' )
			});
	}

	public submitRegistrationForm (): void {
		if ( this.registrationForm.valid ) {
			const registrationRequest: RegistrationRequestModel = {
				...this.registrationForm.value
			};

			// Success 🎉
			console.log( { registrationRequest } );
		}
	}

	




}
