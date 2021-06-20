import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testform';

  productForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      hobbies: this.fb.array([]) ,
    });
  }

  

  hobbies() : FormArray {

    return this.productForm.get("hobbies") as FormArray

  }

  newHobby(): FormGroup {

    return this.fb.group({

      qty: '',

    })

  }

  addHobby() {

    this.hobbies().push(this.newHobby());

  }

 
  removeHobby(i:number) {

    this.hobbies().removeAt(i);

  }

 
  onSubmit() {

    console.log('form submitted');

  }

}

