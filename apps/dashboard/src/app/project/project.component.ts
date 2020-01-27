import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '@mdv-seven/core-data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-seven-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  selectedProject: Project;
  projects$;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  deleteProject(project: Project) {
    this.projectService.delete(project).subscribe((r) => {
      this.getProjects();
    })
  }

}
