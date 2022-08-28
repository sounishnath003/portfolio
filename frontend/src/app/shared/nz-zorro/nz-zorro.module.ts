import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const modules = [
  CommonModule,
  NzButtonModule,
  NzTypographyModule,
  FlexModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzIconModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class NzZorroModule {}
