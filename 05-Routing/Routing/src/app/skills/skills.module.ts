import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { SkillResolverService } from './skill-resolver.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const skillsRouters: Routes = [
  {
    path: '',
    component: SkillsListComponent,
  },
  {
    path: 'id',
    component: SkillsEditComponent,
    resolve: { skillData: SkillResolverService },
  },
];

@NgModule({
  declarations: [SkillsListComponent, SkillsEditComponent, SkillRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(skillsRouters),
    MaterialModule,
    FormsModule,
  ],
})
export class SkillsModule {}
