import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const modules = [CommonModule, NzButtonModule, NzTypographyModule, FlexModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class NzZorroModule {}
