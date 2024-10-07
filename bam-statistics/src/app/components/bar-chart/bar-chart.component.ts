import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ClienteService } from '../../services/cliente.service';
import { IBarChart } from '../../interfaces/IBarChart';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements AfterViewInit {
  @Input() data: IBarChart | null = null;

  @ViewChild('') barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: any;

  constructor () {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createBarChart();
  }

  async createBarChart() {
    if (this.data) {
      const { id, title, labels, data } = this.data!;
      const canvas = document.getElementById(id)! as HTMLCanvasElement;
      this.barChart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Color de las barras
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
