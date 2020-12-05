import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  public courseTitle;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseServiceClient) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.cid;
      if (courseId !==  undefined) {
        this.courseService.findCourseById(courseId).then(course =>
          this.courseTitle = course.title);
      }
    });
  }

}
