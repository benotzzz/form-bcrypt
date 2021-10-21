import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-profile-template',
  templateUrl: './user-profile-template.component.html',
  styleUrls: ['./user-profile-template.component.css']
})
export class UserProfileTemplateComponent implements OnInit {
  displayEmail: any; 
  displayPass: any;
  displayID: any;
  displayName: any;
  displayGender: any;
  

  
  
  
  
  
  getValue(val: any[],val2: any[],val3: any[],val4: any[],val5: any[]){


   
        console.warn(val)
    
      this.displayEmail=val

      const salt = bcrypt.genSaltSync(10);
      this.displayPass=val2
      this.displayPass=bcrypt.hashSync('displayPass',10)
      this.displayID=val3
      this.displayName=val4
      this.displayGender=val5


      


  }
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(v: NgForm){
    console.log(v.value, v.valid);


  }

}
