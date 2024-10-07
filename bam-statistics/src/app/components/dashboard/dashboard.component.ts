import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { ScatterChartComponent } from "../scatter-chart/scatter-chart.component";
import { ClienteService } from '../../services/cliente.service';
import { IBarChart } from '../../interfaces/IBarChart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarChartComponent, ScatterChartComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  is_loading = false;
  transaction_by_amount: IBarChart | null = null;
  top_clientes: IBarChart | null = null;

  constructor (
    private readonly _clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.CreateDashboard();
  }

  private CreateDashboard () {
    this.is_loading = true;
    this._clienteService.GetDashboard()
      .then(result => {
        const chart_1 = result!.transaction_by_category;
        const chart_2 = result!.top_clientes;

        const labels_1 = chart_1.filter(x => x.categoria !== 'OTROS').map(x => x.categoria);
        const data_1: number[] = chart_1.filter(x => x.categoria !== 'OTROS').map(x => x.mnt_trx_mm);

        this.transaction_by_amount = {
          id: 'transation-by-amount',
          title: 'Transacciones por Monto',
          labels: labels_1,
          data: data_1
        };

        const labels_2 = chart_2.map(x => x.id.toString());
        const data_2: number[] = chart_2.map(x => x.mnt_trx_mm);

        this.top_clientes = {
          id: 'top-clientes',
          title: 'Top Clientes por Monto',
          labels: labels_2,
          data: data_2
        };
      })
      .catch(e => console.error(e))
      .finally(() => this.is_loading = false);
  }
}
