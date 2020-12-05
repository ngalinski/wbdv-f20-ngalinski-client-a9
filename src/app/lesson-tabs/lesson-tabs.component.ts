import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons = [];
  moduleId = '';
  courseId = '';
  lessonId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private lessonService: LessonServiceClient) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.lessonService.findLessonsForModule(this.moduleId).then(lessons => {
        this.lessons = lessons;
      });
    });
  }
}
