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
  public passwordFieldType:string='password';
  get nameField():FormControl{
    return this.registrationForm.get('name') as FormControl;
  }

  get emailField():FormControl{
    return this.registrationForm.get('email') as FormControl;
  }

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
					'',
					{
						validators: [Validators.required,	]}),

				email: new FormControl('',{validators: [Validators.required,]}),

				password: new FormControl('',{validators: [Validators.required]}),
				favouriteHexCode: new FormControl( '' )
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

	public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}




}
