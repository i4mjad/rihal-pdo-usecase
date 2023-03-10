import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let modules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatDividerModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
