import { Project, ProjectService } from '@mdv-seven/core-data';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mdv-seven-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  private _project;

  public get project() {
    return this._project;
  }

  public set project(value)  {
    this._project = value;
  }

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) { }


  ngOnInit() {
    this.initForm();
    const projectId = this.route.snapshot.params && this.route.snapshot.params.id;
    this._project = this.projectService.findOne(projectId);
    this._project.pipe(
      tap((project: Project) => this.form.patchValue(project))
    ).subscribe();
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }

  saveForm(formDirective: NgForm) {
    this.saveProject(formDirective.value)
    formDirective.resetForm();
    this.router.navigate(['/']);
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      return;
    }
  }

  updateProject(project: Project) {
    this.projectService.update(project).subscribe((r) => {
      this.cancel();
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      title: [''],
      details: ['']
    })
  }
}
