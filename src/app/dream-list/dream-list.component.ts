import { Component, OnInit } from '@angular/core';
import { DreamService } from '../dream.service';

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {
  dreams: any[] = [];

  constructor(private dreamService: DreamService) {}

  ngOnInit(): void {
    this.dreamService.getDreams().subscribe((data: any[]) => {
      this.dreams = data;
    });
  }
}
