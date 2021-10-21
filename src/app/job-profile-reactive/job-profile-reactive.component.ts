import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-profile-reactive',
  templateUrl: './job-profile-reactive.component.html',
  styleUrls: ['./job-profile-reactive.component.css']
})
export class JobProfileReactiveComponent implements OnInit {

  displayEmail: any; 
  displayComp: any;
  displayLoc: any;
  displayJob: any;
  displayPos: any;
  
  getValue(val: any[],val2: any[],val3: any[],val4: any[],val5: any[]){


   
        console.warn(val)
    
      this.displayEmail=val
      this.displayComp=val2
      this.displayLoc=val3
      this.displayJob=val4
      this.displayPos=val5


      


  }
  
  
  //  email= new FormControl('',{

  //   validators: [Validators.required, Validators.email]
  //   });

  //   location= new FormControl('',{

  //   validators: [Validators.required]
  //   });
  //   company= new FormControl('',{

  //   validators: [Validators.required]
  //   });
  //   jobtitle= new FormControl('',{

  //   validators: [Validators.required]
  //   });
  //   position= new FormControl('',{

  //   validators: [Validators.required]
  //   });
        
      
    
  
  
  // form = new FormGroup ({

  //     email:this.email,
  //     company:this.company,
  //     location:this.location,
  //     jobtitle:this.jobtitle,
  //     position:this.position,
          

  // });
  form = this.fb.group({

    email:[
      '',
      {
      validators: [Validators.required, Validators.email]
      }
      ],
    company:[
      '',
      {
        validators: [Validators.required]
      }
      ],
      location:[
        '',
      {
      validators: [Validators.required]
      }
      ],
      jobtitle:[
      '',
      {
      validators: [Validators.required]
      }
      ],
      position:[
      '',
      {
      validators: [Validators.required]
      }
      ],

 
 
  })
  
  
  
  
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.controls.email.value);
    console.log(this.form.controls.company.value);
    console.log(this.form.controls.location.value);
    console.log(this.form.controls.jobtitle.value);
    console.log(this.form.controls.position.value);


  }

  get email(){
    return this.form.controls['email'];
  }
  get company(){
    return this.form.controls['company'];
  }
  get location(){
    return this.form.controls['location'];
  }
  get jobtitle(){
    return this.form.controls['jobtitle'];
  }
  get position(){
    return this.form.controls['position'];
  }
  get valid(){
    return this.form.controls;

  }

}
