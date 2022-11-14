import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  courseDuration!:number;
  courseAuthors!: string[];

  submitted = false;

  constructor(private form: FormBuilder) {}

  ngOnInit() {
    this.courseForm = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      creationAt: [new Date(), Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      newAuthor: [''],
      authors: this.form.array([this.form.control('', Validators.required)])

    });
  }

  get f() { return this.courseForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.courseForm.invalid) {return;}

    alert('SUCCESS!!');
    console.log(this.courseForm.value);
  }
}
