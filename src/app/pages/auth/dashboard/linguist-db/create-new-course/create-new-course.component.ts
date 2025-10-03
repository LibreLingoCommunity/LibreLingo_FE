import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-create-new-course',
  imports: [
    ReactiveFormsModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputTextModule,
    ToggleButtonModule,
    NgClass,
  ],
  templateUrl: './create-new-course.component.html',
  styleUrl: './create-new-course.component.css',
})
export class CreateNewCourseComponent {
  activeIndex = 0;

  name = '';
  email = '';
  password = '';
  option1 = false;
  option2 = false;
  option3 = false;
  option4 = false;
  option5 = false;
  option6 = false;
  option7 = false;
  option8 = false;
  option9 = false;
  option10 = false;

  goToNextStep() {
    this.activeIndex++;
  }

  goToPrevStep() {
    this.activeIndex--;
  }

  onSubmit() {}
}
