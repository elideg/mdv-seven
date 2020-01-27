import { Router } from '@angular/router';
import { Project, ProjectService } from '@mdv-seven/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-seven-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  @Input() projects: Project[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;
  @Output() created = new EventEmitter;

  constructor(
    private router: Router,
    private projectsService: ProjectService
  ) { }

  ngOnInit() {
    this.projectsService.all();

  }

  select(project: Project) {
    this.selected.emit(project);
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }

  createProjectReroute() {
    this.router.navigate(['/create']);
  }
}
