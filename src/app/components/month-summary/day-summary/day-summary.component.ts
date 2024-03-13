import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrl: './day-summary.component.scss'
})
export class DaySummaryComponent {
  @Input()
  dayData;
}
