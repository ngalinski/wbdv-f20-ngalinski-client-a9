import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
