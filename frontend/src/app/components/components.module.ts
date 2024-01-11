import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzZorroModule } from '../shared/nz-zorro/nz-zorro.module';
import { IntlDatetimePipe } from '../shared/pipes/intl-datetime.pipe';
import { MarkdownParserPipe } from '../shared/pipes/markdown-parser.pipe';
import { CardHolderComponent } from './card-holder/card-holder.component';
import { NoDataComponent } from './no-data/no-data.component';
import { CardTitlePipe } from './quick-thoughts/recommend-card/card-title.pipe';

const COMPONENTS: any[] = [
  NoDataComponent,
  CardHolderComponent,
  IntlDatetimePipe,
  CardTitlePipe,
  MarkdownParserPipe,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, NzZorroModule],
})
export class ComponentsModule {}
