import { Router } from '@angular/router';
import { ProjectService } from '@mdv-seven/core-data';
import { Component, OnInit } from '@angular/core';
import { Project } from '@mdv-seven/core-data';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'mdv-seven-project-create-item',
  templateUrl: './project-create-item.component.html',
  styleUrls: ['./project-create-item.component.scss']
})
export class ProjectCreateItemComponent implements OnInit {
  form: FormGroup

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  createProject(project: Project) {
    this.projectService.create(project).subscribe((r) => {
      this.router.navigate(['/'])
    })
  }

  saveForm(formDirective: NgForm) {
    this.createProject(formDirective.value);
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      title: [''],
      details: ['']
    })
  }

}
