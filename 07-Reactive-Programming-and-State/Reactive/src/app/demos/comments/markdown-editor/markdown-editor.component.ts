import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../comment.model';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  constructor() {}

  comments: CommentItem[] = [];
  editorEdit = true;

  ngOnInit() {}

  saveComment() {}
}
