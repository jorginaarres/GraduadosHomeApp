import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'list-dialog',
    templateUrl: './list-dialog.component.html',
    styleUrls: ['./list-dialog.component.scss']
})

export class ListDialogComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<ListDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    ngOnInit(): void {}
}