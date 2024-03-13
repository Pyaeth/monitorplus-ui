import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AmountRepresentation } from 'src/app/models/amount-representation.model';
import { UserDashboardRepresentation } from 'src/app/models/user-dashboard-representation.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-month-summary',
  templateUrl: './month-summary.component.html',
  styleUrl: './month-summary.component.scss'
})
export class MonthSummaryComponent implements OnInit {
  @Input()
  index: number = 0;

  data: UserDashboardRepresentation = new UserDashboardRepresentation();
  tableData = [];

  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(private readonly httpService: HttpService,
    private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.httpService.getCurrentMonthlySummary(this.index).subscribe(
      {
        next: (data) => this.map(data),
        error: (err) => this.handleError(err)
      }
    );
  }
  map(data: any): void {
    this.data = data;
  }

  private handleError(err: any) {
    this.messageService.add({severity: 'warning', summary: 'Error:', detail: err });
  }
}
