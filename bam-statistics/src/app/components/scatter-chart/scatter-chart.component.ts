import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.css'
})
export class ScatterChartComponent {
  @ViewChild('scatterCanvas') scatterCanvas!: ElementRef<HTMLCanvasElement>;
  scatterChart: any;

  constructor (
    private _clienteService: ClienteService
  ) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createScatterChart();
  }

  async createScatterChart() {
    const result = [
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.120000000000001,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14175104,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0153846153846153
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 7.89,
        "pct_num_trx_tot": 0.1978021978021978
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.579,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 7.85,
        "pct_num_trx_tot": 0.1733333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.9653163559,
        "pct_num_trx_tot": 0.1883561643835616
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.18325,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.35,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 6.199727561399999,
        "pct_num_trx_tot": 0.099236641221374
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.02091,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0924,
        "pct_num_trx_tot": 0.0114942528735632
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.47,
        "pct_num_trx_tot": 0.1397849462365591
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.53,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0178571428571428
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.00791,
        "pct_num_trx_tot": 0.0895522388059701
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.5,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.081081081081081
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.02497907,
        "pct_num_trx_tot": 0.9411764705882352
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 1.42580405,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.1847937299999999,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.0697674418604651
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 2.04,
        "pct_num_trx_tot": 0.4202898550724637
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.4042553191489361
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 9.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 5.765847999999998,
        "pct_num_trx_tot": 0.2538071065989847
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 60,
        "mnt_trx_mm": 27.57,
        "pct_num_trx_tot": 0.9836065573770492
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.3658290700000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 3.19,
        "pct_num_trx_tot": 0.5119047619047619
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 62,
        "mnt_trx_mm": 5.46,
        "pct_num_trx_tot": 0.96875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.15625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.13666705,
        "pct_num_trx_tot": 0.7647058823529411
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.8852799999999998,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.1384615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.1,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 3.05087,
        "pct_num_trx_tot": 0.0955882352941176
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 4.224812,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.403233,
        "pct_num_trx_tot": 0.1081081081081081
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 4.26,
        "pct_num_trx_tot": 0.1728395061728395
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.075,
        "pct_num_trx_tot": 0.073170731707317
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.3600000000000003,
        "pct_num_trx_tot": 0.1166666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.8,
        "pct_num_trx_tot": 0.0975609756097561
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 1.84,
        "pct_num_trx_tot": 0.1931818181818181
      },
      {
        "num_trx": 75,
        "mnt_trx_mm": 1.76468174,
        "pct_num_trx_tot": 0.7575757575757576
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.0797613505,
        "pct_num_trx_tot": 0.0443548387096774
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.209402,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 0.1103448275862069
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28634,
        "pct_num_trx_tot": 0.0273972602739726
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5128,
        "pct_num_trx_tot": 0.0104166666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.27483216,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 1.89109096,
        "pct_num_trx_tot": 0.7684210526315789
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.2309090400000001,
        "pct_num_trx_tot": 0.6170212765957447
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.15795,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 96,
        "mnt_trx_mm": 0.8107281700000001,
        "pct_num_trx_tot": 0.8205128205128205
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.7435897435897436
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 87,
        "mnt_trx_mm": 23.24,
        "pct_num_trx_tot": 0.4027777777777778
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.97612144,
        "pct_num_trx_tot": 0.9411764705882352
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 11.717989,
        "pct_num_trx_tot": 0.0189573459715639
      },
      {
        "num_trx": 71,
        "mnt_trx_mm": 0.7333727699999999,
        "pct_num_trx_tot": 0.7171717171717171
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.65065,
        "pct_num_trx_tot": 0.0341880341880341
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.025,
        "pct_num_trx_tot": 0.0042016806722689
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 15,
        "pct_num_trx_tot": 0.175438596491228
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0151515151515151
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 4.96,
        "pct_num_trx_tot": 0.68
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 4.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.67,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.76,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 0.0144230769230769
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 86,
        "mnt_trx_mm": 1.1169345,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 6.72,
        "pct_num_trx_tot": 0.2954545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0126582278481012
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 97,
        "mnt_trx_mm": 6.08210587,
        "pct_num_trx_tot": 0.3688212927756654
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.30076366,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36795,
        "pct_num_trx_tot": 0.0117647058823529
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 8.769,
        "pct_num_trx_tot": 0.3043478260869565
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0571428571428571
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0350877192982456
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 7.75,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 0.087719298245614
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.24
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.5476190476190477
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0256410256410256
      },
      {
        "num_trx": 125,
        "mnt_trx_mm": 974.4869084155002,
        "pct_num_trx_tot": 0.2470355731225296
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 5.59,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02689956,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.48,
        "pct_num_trx_tot": 0.5294117647058824
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 0.43373507,
        "pct_num_trx_tot": 0.7361111111111112
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 3.75,
        "pct_num_trx_tot": 0.231578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 5.83,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.18847428,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00002832,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 6.65,
        "pct_num_trx_tot": 0.9420289855072465
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 3.242773,
        "pct_num_trx_tot": 0.1065088757396449
      },
      {
        "num_trx": 99,
        "mnt_trx_mm": 2.96835673,
        "pct_num_trx_tot": 0.6226415094339622
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.526,
        "pct_num_trx_tot": 0.0210526315789473
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 66,
        "mnt_trx_mm": 0.4626198500000001,
        "pct_num_trx_tot": 0.9041095890410958
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.6363636363636364
      },
      {
        "num_trx": 215,
        "mnt_trx_mm": 9.97520748,
        "pct_num_trx_tot": 0.3916211293260473
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.32,
        "pct_num_trx_tot": 0.1607142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.26401545,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.3488109499999999,
        "pct_num_trx_tot": 0.9655172413793104
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.1481481481481481
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 0.0730593607305936
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.12
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.0297239915074309
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.7894736842105263
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.206,
        "pct_num_trx_tot": 0.0194805194805194
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 7.107801,
        "pct_num_trx_tot": 0.1483516483516483
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 6.3337214,
        "pct_num_trx_tot": 0.0654911838790932
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.510984806,
        "pct_num_trx_tot": 0.1756756756756756
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 0.33274494,
        "pct_num_trx_tot": 0.6027397260273972
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0188679245283018
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.15,
        "pct_num_trx_tot": 0.0634920634920634
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 5.533432024,
        "pct_num_trx_tot": 0.2981366459627329
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.73472,
        "pct_num_trx_tot": 0.09375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06046087,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 4.8312865,
        "pct_num_trx_tot": 0.23
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13125,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 6.34,
        "pct_num_trx_tot": 0.7804878048780488
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.13813832,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 0.36584074,
        "pct_num_trx_tot": 0.6410256410256411
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1224489795918367
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.71,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.5624,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 7.36,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 4.02,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.3000000000000005,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.6800287500000001,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 3.11,
        "pct_num_trx_tot": 0.1985294117647058
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.1,
        "pct_num_trx_tot": 0.0967741935483871
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 29.088348,
        "pct_num_trx_tot": 0.0479876160990712
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.454442,
        "pct_num_trx_tot": 0.1125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.10865599,
        "pct_num_trx_tot": 0.1118881118881118
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.70795,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.3044,
        "pct_num_trx_tot": 0.0571428571428571
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22800744,
        "pct_num_trx_tot": 0.008695652173913
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.28,
        "pct_num_trx_tot": 0.0943396226415094
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 8.695943,
        "pct_num_trx_tot": 0.029126213592233
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 129,
        "mnt_trx_mm": 5090.8788084087,
        "pct_num_trx_tot": 0.6615384615384615
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 7.06,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.19,
        "pct_num_trx_tot": 0.1041666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0458999999999999,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 81,
        "mnt_trx_mm": 1.2994508600000008,
        "pct_num_trx_tot": 0.6328125
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.22708,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.6,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.0730427958000002,
        "pct_num_trx_tot": 0.0153256704980842
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 6.33,
        "pct_num_trx_tot": 0.8723404255319149
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.1982209499999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.11,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.86,
        "pct_num_trx_tot": 0.1351351351351351
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.3620331,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 7.260000000000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 107,
        "mnt_trx_mm": 1.93771506,
        "pct_num_trx_tot": 0.7379310344827587
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 8.149999999999999,
        "pct_num_trx_tot": 0.1655172413793103
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6499,
        "pct_num_trx_tot": 0.0068965517241379
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 3.45069,
        "pct_num_trx_tot": 0.1774193548387097
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0718,
        "pct_num_trx_tot": 0.008695652173913
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.451536,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.71676,
        "pct_num_trx_tot": 0.0704225352112676
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 30.05,
        "pct_num_trx_tot": 0.5086206896551724
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0048543689320388
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.082612,
        "pct_num_trx_tot": 0.1020408163265306
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 1.658995,
        "pct_num_trx_tot": 0.115819209039548
      },
      {
        "num_trx": 88,
        "mnt_trx_mm": 6.28795813,
        "pct_num_trx_tot": 0.5751633986928104
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.5666089999999999,
        "pct_num_trx_tot": 0.0559440559440559
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.1727956399999999,
        "pct_num_trx_tot": 0.5263157894736842
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.398341908,
        "pct_num_trx_tot": 0.0125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.4560309999999999,
        "pct_num_trx_tot": 0.0185185185185185
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.28704,
        "pct_num_trx_tot": 0.1239669421487603
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0076923076923076
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.87,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.537344,
        "pct_num_trx_tot": 0.0044444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0287769784172661
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 7.119499579099999,
        "pct_num_trx_tot": 0.0523809523809523
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.08,
        "pct_num_trx_tot": 0.072463768115942
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0278,
        "pct_num_trx_tot": 0.0113636363636363
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.445,
        "pct_num_trx_tot": 0.7692307692307693
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.8999999999999999,
        "pct_num_trx_tot": 0.0681818181818181
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 7.48,
        "pct_num_trx_tot": 0.3934426229508196
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 1.44,
        "pct_num_trx_tot": 0.0195712954333644
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.31278733,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 0.0975609756097561
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.2,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 7.48,
        "pct_num_trx_tot": 0.0134228187919463
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0215,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.086,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 0.34986891,
        "pct_num_trx_tot": 0.7413793103448276
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.00625
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.2,
        "pct_num_trx_tot": 0.1351351351351351
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0085470085470085
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.0095517899999999,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 3.2148320000000004,
        "pct_num_trx_tot": 0.3103448275862069
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.1,
        "pct_num_trx_tot": 0.0306748466257668
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.28,
        "pct_num_trx_tot": 0.046875
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 6.38,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0002548799999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0294117647058823
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.8905000000000001,
        "pct_num_trx_tot": 0.0642201834862385
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 7.56,
        "pct_num_trx_tot": 0.1198156682027649
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.8461538461538461
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 23,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4049,
        "pct_num_trx_tot": 0.0142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 2.60557195,
        "pct_num_trx_tot": 0.17
      },
      {
        "num_trx": 70,
        "mnt_trx_mm": 0.2223026399999999,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 7.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.66688628,
        "pct_num_trx_tot": 0.609375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0128205128205128
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.685,
        "pct_num_trx_tot": 0.048076923076923
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 11.64,
        "pct_num_trx_tot": 0.0164835164835164
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 17.126213999999997,
        "pct_num_trx_tot": 0.2424242424242424
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 4.98,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42501,
        "pct_num_trx_tot": 0.0185185185185185
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 79,
        "mnt_trx_mm": 398.8055395200001,
        "pct_num_trx_tot": 0.7596153846153846
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 6.5246314000000005,
        "pct_num_trx_tot": 0.0887573964497041
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.7588270599999994,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 7.459433,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.0829,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.2068965517241379
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 28.5,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 4.88715781,
        "pct_num_trx_tot": 0.1006711409395973
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.305991,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 82,
        "mnt_trx_mm": 1.1486302300000002,
        "pct_num_trx_tot": 0.9318181818181818
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 2.4,
        "pct_num_trx_tot": 0.0604026845637583
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.2083333333333333
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 1.2130420599999985,
        "pct_num_trx_tot": 0.3684210526315789
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.15708081,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4639999999999999,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0123456790123456
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 11.5,
        "pct_num_trx_tot": 0.2195121951219512
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13537,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 8.52,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.1654676258992805
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.08299922,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 7.018894,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.15514179,
        "pct_num_trx_tot": 0.6944444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 14.340000000000002,
        "pct_num_trx_tot": 0.2755102040816326
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.6327200000000001,
        "pct_num_trx_tot": 0.0642857142857142
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.5988110000000001,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1514,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.99,
        "pct_num_trx_tot": 0.2941176470588235
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 2.7508,
        "pct_num_trx_tot": 0.090566037735849
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 6.92,
        "pct_num_trx_tot": 0.056910569105691
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0072463768115942
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11499339,
        "pct_num_trx_tot": 0.0121212121212121
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.2923288,
        "pct_num_trx_tot": 0.9210526315789472
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 8.0403820694,
        "pct_num_trx_tot": 0.2513966480446927
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 111,
        "mnt_trx_mm": 6.424076808800001,
        "pct_num_trx_tot": 0.3032786885245901
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.0820399799999999,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 0.1463414634146341
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.48202,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.13,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.5135060600000001,
        "pct_num_trx_tot": 0.0812182741116751
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0099009900990099
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.475
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 14.57,
        "pct_num_trx_tot": 0.1296296296296296
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 0.1753089599999999,
        "pct_num_trx_tot": 0.902439024390244
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.3694321,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.2171806,
        "pct_num_trx_tot": 0.96
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 10.24,
        "pct_num_trx_tot": 0.1692307692307692
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 0.21135845,
        "pct_num_trx_tot": 0.7288135593220338
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.386996,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 4.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.0786516853932584
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0698999999999999,
        "pct_num_trx_tot": 0.028169014084507
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 0.4089567899999999,
        "pct_num_trx_tot": 0.2596685082872928
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 9.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04245,
        "pct_num_trx_tot": 0.0130718954248366
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.8823,
        "pct_num_trx_tot": 0.1625
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.6000000000000001,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 13.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 3.78,
        "pct_num_trx_tot": 0.4186046511627907
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.04055147,
        "pct_num_trx_tot": 0.5238095238095238
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.242976,
        "pct_num_trx_tot": 0.1269841269841269
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 6.83,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.44,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.024390243902439
      },
      {
        "num_trx": 62,
        "mnt_trx_mm": 21.1157124764,
        "pct_num_trx_tot": 0.0926756352765321
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.1826923076923076
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.28,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.05,
        "pct_num_trx_tot": 0.1030927835051546
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 10.44,
        "pct_num_trx_tot": 0.4835164835164835
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.0294117647058823
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.7333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.189,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.1636363636363636
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.63287183,
        "pct_num_trx_tot": 0.1566265060240964
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.3378378378378378
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.175311,
        "pct_num_trx_tot": 0.1346153846153846
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.25918648,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.9028041877,
        "pct_num_trx_tot": 0.0253411306042884
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.2095,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 3.7923,
        "pct_num_trx_tot": 0.1344262295081967
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.0291970802919708
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 244,
        "mnt_trx_mm": 445.9668936460996,
        "pct_num_trx_tot": 0.4236111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 0.7117207699999999,
        "pct_num_trx_tot": 0.6896551724137931
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.09,
        "pct_num_trx_tot": 0.3043478260869565
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.27190791,
        "pct_num_trx_tot": 0.6274509803921569
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.93,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0044444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0048309178743961
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.6676993100000002,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.29202,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.423,
        "pct_num_trx_tot": 0.141025641025641
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.973,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 4.76,
        "pct_num_trx_tot": 0.134020618556701
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.054419,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.4044174016,
        "pct_num_trx_tot": 0.0797101449275362
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 5.561703552199998,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 6.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 7.399999999999999,
        "pct_num_trx_tot": 0.1914893617021276
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.21048,
        "pct_num_trx_tot": 0.1463414634146341
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.1214,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.0426540284360189
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0196078431372549
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.0257,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.05289924,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.16868181,
        "pct_num_trx_tot": 0.5833333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 4.5,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2085,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 0.6529943899999999,
        "pct_num_trx_tot": 0.73
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 2.98,
        "pct_num_trx_tot": 0.4736842105263157
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 3.068692,
        "pct_num_trx_tot": 0.0598503740648379
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.39998,
        "pct_num_trx_tot": 0.0168067226890756
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 4.057129,
        "pct_num_trx_tot": 0.1282051282051282
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.97599114,
        "pct_num_trx_tot": 0.0168067226890756
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.03,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.13009159,
        "pct_num_trx_tot": 0.9523809523809524
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1658,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 5.3500000000000005,
        "pct_num_trx_tot": 0.1360544217687075
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.448019,
        "pct_num_trx_tot": 0.0413793103448275
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 3.32,
        "pct_num_trx_tot": 0.6470588235294118
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 0.35467302,
        "pct_num_trx_tot": 0.8723404255319149
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.164331,
        "pct_num_trx_tot": 0.0030211480362537
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.6500000000000004,
        "pct_num_trx_tot": 0.1830985915492957
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.1030927835051546
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.13482,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0844941799999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0153846153846153
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.7e-7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 81.1206170411,
        "pct_num_trx_tot": 0.1421319796954314
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1066,
        "pct_num_trx_tot": 0.0219780219780219
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.3343799999999999,
        "pct_num_trx_tot": 0.180327868852459
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.5950945699999992,
        "pct_num_trx_tot": 0.3380281690140845
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.2629188799999995,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0396825396825396
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.56628,
        "pct_num_trx_tot": 0.09375
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 4.655518999999999,
        "pct_num_trx_tot": 0.2181818181818181
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4758,
        "pct_num_trx_tot": 0.0211267605633802
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.021551724137931
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 9.6,
        "pct_num_trx_tot": 0.12
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 0.0119760479041916
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0290456431535269
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 113,
        "mnt_trx_mm": 14.5717939467,
        "pct_num_trx_tot": 0.2950391644908616
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.2,
        "pct_num_trx_tot": 0.0298507462686567
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.921626,
        "pct_num_trx_tot": 0.4827586206896552
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1071428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0048309178743961
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 44.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0117647058823529
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 119,
        "mnt_trx_mm": 1.0124113299999995,
        "pct_num_trx_tot": 0.7041420118343196
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.31699642,
        "pct_num_trx_tot": 0.7586206896551724
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.4931821900000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 3.08,
        "pct_num_trx_tot": 0.3365384615384615
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0779,
        "pct_num_trx_tot": 0.0133333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.461,
        "pct_num_trx_tot": 0.1851851851851851
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 0.8345558399999998,
        "pct_num_trx_tot": 0.975609756097561
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.64,
        "pct_num_trx_tot": 0.1129032258064516
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0388,
        "pct_num_trx_tot": 0.0119047619047619
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1578947368421052
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.374,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.10879,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.0071942446043165
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 4.63,
        "pct_num_trx_tot": 0.9629629629629628
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.21,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.15,
        "pct_num_trx_tot": 0.0399061032863849
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 60,
        "mnt_trx_mm": 0.59425931,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.8125
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 2.37580407,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.8094999999999997,
        "pct_num_trx_tot": 0.2941176470588235
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.8680800000000003,
        "pct_num_trx_tot": 0.26
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0612244897959183
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.072217,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.59,
        "pct_num_trx_tot": 0.4137931034482758
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.28125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.09,
        "pct_num_trx_tot": 0.1304347826086956
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.83,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 9.8,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0172413793103448
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.89,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.068685,
        "pct_num_trx_tot": 0.0377358490566037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 18.71068,
        "pct_num_trx_tot": 0.1914893617021276
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 7.08,
        "pct_num_trx_tot": 0.272
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21606,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.856921355,
        "pct_num_trx_tot": 0.609375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6403000000000001,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 15.12,
        "pct_num_trx_tot": 0.3506493506493506
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.0925925925925925
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.806654,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.38,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.86,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.2068965517241379
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 8.11,
        "pct_num_trx_tot": 0.35
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.4610000000000003,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 0.1752577319587628
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.6608,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 7.700000000000001,
        "pct_num_trx_tot": 0.2935779816513761
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.6036979299999998,
        "pct_num_trx_tot": 0.782608695652174
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 11.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.86941,
        "pct_num_trx_tot": 0.0461538461538461
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.68177,
        "pct_num_trx_tot": 0.2105263157894736
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 22.512423561,
        "pct_num_trx_tot": 0.1372093023255814
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 25.1279161771,
        "pct_num_trx_tot": 0.1766917293233082
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.073170731707317
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.95,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.12
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 6.7,
        "pct_num_trx_tot": 0.9583333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0699,
        "pct_num_trx_tot": 0.0188679245283018
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.84,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.32,
        "pct_num_trx_tot": 0.0298507462686567
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.074074074074074
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03236409,
        "pct_num_trx_tot": 0.0076923076923076
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 2.67,
        "pct_num_trx_tot": 0.45625
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4318,
        "pct_num_trx_tot": 0.0113636363636363
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2051282051282051
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0153846153846153
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3774783899999999,
        "pct_num_trx_tot": 0.0098039215686274
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.029,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.40848,
        "pct_num_trx_tot": 0.0545454545454545
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.0404624277456647
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 0.37923119,
        "pct_num_trx_tot": 0.4177215189873418
      },
      {
        "num_trx": 67,
        "mnt_trx_mm": 4.22,
        "pct_num_trx_tot": 0.4855072463768116
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.031,
        "pct_num_trx_tot": 0.0039840637450199
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.65095,
        "pct_num_trx_tot": 0.0657894736842105
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.95,
        "pct_num_trx_tot": 0.3278688524590163
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.327598,
        "pct_num_trx_tot": 0.0120967741935483
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 3.29,
        "pct_num_trx_tot": 0.2014925373134328
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.2291666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0235294117647058
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 0.7597512499999999,
        "pct_num_trx_tot": 0.9365079365079364
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.42,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 6.9284,
        "pct_num_trx_tot": 0.009925558312655
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 20,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 109,
        "mnt_trx_mm": 0.5015460600000001,
        "pct_num_trx_tot": 0.5860215053763441
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.98,
        "pct_num_trx_tot": 0.4827586206896552
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 10.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0076335877862595
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.7,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.492105,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 9.28,
        "pct_num_trx_tot": 0.2818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 2.76,
        "pct_num_trx_tot": 0.3404255319148936
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 6.51,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 1.16466552,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 12.5892778293,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.28878968,
        "pct_num_trx_tot": 0.85
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0074626865671641
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 0.0301204819277108
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.12,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.0068965517241379
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0092592592592592
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.389,
        "pct_num_trx_tot": 0.0327868852459016
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03217985,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.5961538461538461
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.5464144824999999,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.5588235294117647
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.98,
        "pct_num_trx_tot": 0.3571428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 2.385706,
        "pct_num_trx_tot": 0.2413793103448276
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 5.82,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.8035,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 13.22,
        "pct_num_trx_tot": 0.3157894736842105
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.27567436,
        "pct_num_trx_tot": 0.8636363636363636
      },
      {
        "num_trx": 54,
        "mnt_trx_mm": 20.1711170093,
        "pct_num_trx_tot": 0.1184210526315789
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.3947368421052631
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 3.7,
        "pct_num_trx_tot": 0.4504504504504504
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.8,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.86,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17786,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.8634641,
        "pct_num_trx_tot": 0.8947368421052632
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.0172413793103448
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.11,
        "pct_num_trx_tot": 0.0655737704918032
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.0053333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.5062619999999995,
        "pct_num_trx_tot": 0.0272108843537414
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 0.25969,
        "pct_num_trx_tot": 0.7021276595744681
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.5306122448979592
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 19.08,
        "pct_num_trx_tot": 0.981132075471698
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.79,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 100,
        "mnt_trx_mm": 1.92017339,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.077,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.06278289,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.12936455,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.81,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.263,
        "pct_num_trx_tot": 0.188235294117647
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.947351,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 189,
        "mnt_trx_mm": 84.434332,
        "pct_num_trx_tot": 0.3921161825726141
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.7393814801,
        "pct_num_trx_tot": 0.0774193548387096
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 6.281652490000001,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 3.831517,
        "pct_num_trx_tot": 0.6097560975609756
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.94,
        "pct_num_trx_tot": 0.1142857142857142
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.08438641,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 49,
        "mnt_trx_mm": 1.83,
        "pct_num_trx_tot": 0.3712121212121212
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5811,
        "pct_num_trx_tot": 0.0701754385964912
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5592,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.0727272727272727
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 3.090953,
        "pct_num_trx_tot": 0.96
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.133,
        "pct_num_trx_tot": 0.0704225352112676
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 0.7431449388000532,
        "pct_num_trx_tot": 0.2145748987854251
      },
      {
        "num_trx": 104,
        "mnt_trx_mm": 8.50672016,
        "pct_num_trx_tot": 0.9454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 9.45,
        "pct_num_trx_tot": 0.7222222222222222
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 2.3,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.627345,
        "pct_num_trx_tot": 0.029126213592233
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.742116,
        "pct_num_trx_tot": 0.0066889632107023
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.078125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.42409753,
        "pct_num_trx_tot": 0.9666666666666668
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.89,
        "pct_num_trx_tot": 0.6875
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 1.1902,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0136986301369863
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1099,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.7948540000000001,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 4.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0166666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 51,
        "mnt_trx_mm": 0.98743564,
        "pct_num_trx_tot": 0.7083333333333334
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.5899,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 188,
        "mnt_trx_mm": 24.9004484575,
        "pct_num_trx_tot": 0.5371428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.4300000000000002,
        "pct_num_trx_tot": 0.0388349514563106
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.749523,
        "pct_num_trx_tot": 0.1372549019607843
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.08,
        "pct_num_trx_tot": 0.0294117647058823
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.0752742699999995,
        "pct_num_trx_tot": 0.2702702702702703
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0050761421319796
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.1282051282051282
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.88,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.1351351351351351
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.6923076923076923
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 3.31,
        "pct_num_trx_tot": 0.5625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1081359999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 5.03,
        "pct_num_trx_tot": 0.2916666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.9897822995,
        "pct_num_trx_tot": 0.0543478260869565
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 0.3277112499999997,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.6363636363636364
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0069930069930069
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.81,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 18.1192642596,
        "pct_num_trx_tot": 0.0609981515711645
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.73,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 82,
        "mnt_trx_mm": 52.5,
        "pct_num_trx_tot": 0.942528735632184
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.77,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0128205128205128
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.5609971200000001,
        "pct_num_trx_tot": 0.8214285714285714
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 10.98,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.5494560000000002,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.180327868852459
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.49,
        "pct_num_trx_tot": 0.1159420289855072
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.839,
        "pct_num_trx_tot": 0.036144578313253
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.10525,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.1025641025641025
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.9000000000000001,
        "pct_num_trx_tot": 0.0252525252525252
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 37.545767456,
        "pct_num_trx_tot": 0.1710526315789473
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 1.23,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 0.4641610100000002,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0101010101010101
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.45854717,
        "pct_num_trx_tot": 0.88
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.599,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.0941685,
        "pct_num_trx_tot": 0.4528301886792453
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 11.3,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 1630.4363998199965,
        "pct_num_trx_tot": 0.2549019607843137
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.5320695599999999,
        "pct_num_trx_tot": 0.8611111111111112
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.13277403,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.009009009009009
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 5.94,
        "pct_num_trx_tot": 0.4146341463414634
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0142857142857142
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.24
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.13,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.94,
        "pct_num_trx_tot": 0.0321100917431192
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.93,
        "pct_num_trx_tot": 0.188235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 2.728401,
        "pct_num_trx_tot": 0.1743119266055046
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 9.87,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.1444,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.486415,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.069,
        "pct_num_trx_tot": 0.1702127659574468
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 5.890037,
        "pct_num_trx_tot": 0.4029850746268656
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0178571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02595,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.68280414,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.4210526315789473
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 69,
        "mnt_trx_mm": 3.40876629,
        "pct_num_trx_tot": 0.2509090909090909
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 1.46,
        "pct_num_trx_tot": 0.6444444444444445
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.117552,
        "pct_num_trx_tot": 0.16
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 9.125032,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.7487,
        "pct_num_trx_tot": 0.02
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.30597771,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 36.29228434000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.28607325,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 24.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0027472527472527
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 5.611566,
        "pct_num_trx_tot": 0.2547169811320754
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.37367332,
        "pct_num_trx_tot": 0.8208955223880597
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 0.25661246,
        "pct_num_trx_tot": 0.6363636363636364
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.9693719127,
        "pct_num_trx_tot": 0.015625
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.87,
        "pct_num_trx_tot": 0.44
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7589,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.18688504,
        "pct_num_trx_tot": 0.8421052631578947
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 6.410738,
        "pct_num_trx_tot": 0.26875
      },
      {
        "num_trx": 75,
        "mnt_trx_mm": 0.91224662,
        "pct_num_trx_tot": 0.6521739130434783
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 7.52,
        "pct_num_trx_tot": 0.8421052631578947
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.06,
        "pct_num_trx_tot": 0.0816326530612244
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 10.951932997199972,
        "pct_num_trx_tot": 0.8125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.53113623,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.69,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.411951,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 12.956951999999996,
        "pct_num_trx_tot": 0.2261306532663316
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.0449438202247191
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 14,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 8.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 14.1627352285,
        "pct_num_trx_tot": 0.07
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.0337078651685393
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 4.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 0.2692307692307692
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.71,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.9199,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.025
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.2230632,
        "pct_num_trx_tot": 0.2452830188679245
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.4166666666666667
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.1514,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.81,
        "pct_num_trx_tot": 0.9375
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.023228,
        "pct_num_trx_tot": 0.3125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.174377,
        "pct_num_trx_tot": 0.6190476190476191
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 9.27,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 3.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 6.300000000000001,
        "pct_num_trx_tot": 0.4047619047619047
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.2912207899999999,
        "pct_num_trx_tot": 0.9411764705882352
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.14838891,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 30.12113,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0040485829959514
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 4,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.06,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.0298507462686567
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.98,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.074074074074074
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.1025641025641025
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.121233,
        "pct_num_trx_tot": 0.1265822784810126
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 64,
        "mnt_trx_mm": 23.85769746819908,
        "pct_num_trx_tot": 0.2084690553745928
      },
      {
        "num_trx": 62,
        "mnt_trx_mm": 1.0567349999999995,
        "pct_num_trx_tot": 0.3780487804878049
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.283859,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 3.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.073295,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.66,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.3430339999999998,
        "pct_num_trx_tot": 0.110091743119266
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.8602,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.26685576,
        "pct_num_trx_tot": 0.1969696969696969
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 5.24,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 4.1073215494,
        "pct_num_trx_tot": 0.058695652173913
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1861999999999999,
        "pct_num_trx_tot": 0.0253164556962025
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 5.1,
        "pct_num_trx_tot": 0.1944444444444444
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 7.772154,
        "pct_num_trx_tot": 0.108433734939759
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.0149253731343283
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 0.32932908,
        "pct_num_trx_tot": 0.7692307692307693
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42845,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.42,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.15039905,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.631578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 7.021381,
        "pct_num_trx_tot": 0.3898305084745763
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6832940000000001,
        "pct_num_trx_tot": 0.0816326530612244
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.871246,
        "pct_num_trx_tot": 0.0483870967741935
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0240963855421686
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.17774055,
        "pct_num_trx_tot": 0.78125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.82,
        "pct_num_trx_tot": 0.131578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.21,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.191602,
        "pct_num_trx_tot": 0.024390243902439
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.008
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 5.13756,
        "pct_num_trx_tot": 0.1515151515151515
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 3.824774,
        "pct_num_trx_tot": 0.3875968992248062
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1504,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.86,
        "pct_num_trx_tot": 0.4848484848484848
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 0.25762123,
        "pct_num_trx_tot": 0.7936507936507936
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.32494015,
        "pct_num_trx_tot": 0.9642857142857144
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.30075869,
        "pct_num_trx_tot": 0.1956521739130435
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 5.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 30.580866,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4098,
        "pct_num_trx_tot": 0.0612244897959183
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.2105263157894736
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 4.98,
        "pct_num_trx_tot": 0.2146596858638743
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.1159420289855072
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 6,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.0392156862745098
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 1.96345235,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0095238095238095
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 1.7609764176,
        "pct_num_trx_tot": 0.1401273885350318
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.37,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0044642857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.2962962962962963
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.96,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02957255,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.66942364,
        "pct_num_trx_tot": 0.1515151515151515
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.3586083999999999,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 79,
        "mnt_trx_mm": 20.840000000000003,
        "pct_num_trx_tot": 0.3708920187793427
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.89,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 38.2,
        "pct_num_trx_tot": 0.2678571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0016708699999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.404,
        "pct_num_trx_tot": 0.0176991150442477
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0075187969924812
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.14478415,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0104166666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.26919614,
        "pct_num_trx_tot": 0.5757575757575758
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3437,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 66,
        "mnt_trx_mm": 1.56905232,
        "pct_num_trx_tot": 0.673469387755102
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.749592,
        "pct_num_trx_tot": 0.0182291666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 3.41,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.5927,
        "pct_num_trx_tot": 0.0598290598290598
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6839999999999999,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.4827586206896552
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 120,
        "mnt_trx_mm": 4.59,
        "pct_num_trx_tot": 0.2714932126696832
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 6.468,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.142474,
        "pct_num_trx_tot": 0.1935483870967742
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.0108899999999999,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.16174955,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.87789,
        "pct_num_trx_tot": 0.2363636363636363
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 30.04,
        "pct_num_trx_tot": 0.5666666666666667
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.0895522388059701
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.1,
        "pct_num_trx_tot": 0.0533333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15009,
        "pct_num_trx_tot": 0.0652173913043478
      },
      {
        "num_trx": 107,
        "mnt_trx_mm": 10.61,
        "pct_num_trx_tot": 0.6114285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.52524047,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 5.44,
        "pct_num_trx_tot": 0.1264367816091954
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.25,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.0311,
        "pct_num_trx_tot": 0.0546218487394958
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 8.402845,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.09,
        "pct_num_trx_tot": 0.2459016393442623
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.14,
        "pct_num_trx_tot": 0.0049019607843137
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.4062019799999999,
        "pct_num_trx_tot": 0.7714285714285715
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.23,
        "pct_num_trx_tot": 0.0068493150684931
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0212765957446808
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 4.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 18.551567020000103,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 5.96,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0508,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.112145,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.269,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.68,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.189152,
        "pct_num_trx_tot": 0.031578947368421
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.867384,
        "pct_num_trx_tot": 0.024390243902439
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.11,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 10.37,
        "pct_num_trx_tot": 0.2580645161290322
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0865,
        "pct_num_trx_tot": 0.0066666666666666
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 4.14,
        "pct_num_trx_tot": 0.3166666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0113636363636363
      },
      {
        "num_trx": 83,
        "mnt_trx_mm": 5.9628225305,
        "pct_num_trx_tot": 0.4068627450980392
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.1789157699999999,
        "pct_num_trx_tot": 0.7741935483870968
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 18.86,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 4.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.75,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0676,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 7.019999999999999,
        "pct_num_trx_tot": 0.4861111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 2.8192470000000003,
        "pct_num_trx_tot": 0.2366863905325443
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4259,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.3145,
        "pct_num_trx_tot": 0.0675675675675675
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.64,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.42,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 9.60716423,
        "pct_num_trx_tot": 0.2137931034482758
      },
      {
        "num_trx": 71,
        "mnt_trx_mm": 0.4466916000000001,
        "pct_num_trx_tot": 0.8658536585365854
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.552903,
        "pct_num_trx_tot": 0.02
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 3.534409,
        "pct_num_trx_tot": 0.1702127659574468
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.66,
        "pct_num_trx_tot": 0.2452830188679245
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.1886671999999996,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.037785,
        "pct_num_trx_tot": 0.0258620689655172
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.33085,
        "pct_num_trx_tot": 0.0366492146596858
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.1320754716981132
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.0066000000000002,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.1269995,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.3863720299999999,
        "pct_num_trx_tot": 0.7627118644067796
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0634,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.0729166666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.4743589743589743
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.3343799999999999,
        "pct_num_trx_tot": 0.1692307692307692
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.131924,
        "pct_num_trx_tot": 0.0206185567010309
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.624,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.0235294117647058
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 5,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.018018018018018
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.493,
        "pct_num_trx_tot": 0.0133333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42026,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.88,
        "pct_num_trx_tot": 0.1517241379310344
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.05,
        "pct_num_trx_tot": 0.063063063063063
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0212765957446808
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.14822812,
        "pct_num_trx_tot": 0.9375
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 9.85762452,
        "pct_num_trx_tot": 0.2386363636363636
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.79,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 5.1,
        "pct_num_trx_tot": 0.1238938053097345
      },
      {
        "num_trx": 62,
        "mnt_trx_mm": 2984.2743840388,
        "pct_num_trx_tot": 0.1362637362637362
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2467,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.59,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.45436493,
        "pct_num_trx_tot": 0.8095238095238095
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0566037735849056
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.22092815,
        "pct_num_trx_tot": 0.8518518518518519
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0367592399999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.059322033898305
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.25543167,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.15625
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 9.535066,
        "pct_num_trx_tot": 0.32
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2007,
        "pct_num_trx_tot": 0.0104166666666666
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.1177321299999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.1726989999999999,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.2708333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.0823,
        "pct_num_trx_tot": 0.0873015873015873
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 2.787408,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 10.28,
        "pct_num_trx_tot": 0.0482758620689655
      },
      {
        "num_trx": 61,
        "mnt_trx_mm": 406.97067809999993,
        "pct_num_trx_tot": 0.6630434782608695
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 8.955341,
        "pct_num_trx_tot": 0.0904109589041095
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.07,
        "pct_num_trx_tot": 0.1923076923076923
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 124.58,
        "pct_num_trx_tot": 0.4107142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 2.939,
        "pct_num_trx_tot": 0.1686746987951807
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.88,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 3.71,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.8332498600000002,
        "pct_num_trx_tot": 0.2790697674418604
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 0.3157894736842105
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.4439000000000001,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 29.4745516479,
        "pct_num_trx_tot": 0.0656565656565656
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 2.15037527,
        "pct_num_trx_tot": 0.7192982456140351
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 0.0826446280991735
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 1.97747556,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.169983,
        "pct_num_trx_tot": 0.0310077519379844
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.20128669,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0147058823529411
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.7999999999999998,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.716561,
        "pct_num_trx_tot": 0.0392156862745098
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.916996,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 97.48317674,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 67,
        "mnt_trx_mm": 1.45464508,
        "pct_num_trx_tot": 0.5877192982456141
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.27,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 57,
        "mnt_trx_mm": 3.95,
        "pct_num_trx_tot": 0.1838709677419354
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.528268,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.65,
        "pct_num_trx_tot": 0.0153846153846153
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.2555,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.46,
        "pct_num_trx_tot": 0.5263157894736842
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.2141705600000001,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 2.49,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 0.0566666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 6.13,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.50015,
        "pct_num_trx_tot": 0.0813953488372093
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 89,
        "mnt_trx_mm": 2.97,
        "pct_num_trx_tot": 0.5894039735099338
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0483870967741935
      },
      {
        "num_trx": 96,
        "mnt_trx_mm": 0.7152755099999997,
        "pct_num_trx_tot": 0.8347826086956521
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 6.08,
        "pct_num_trx_tot": 0.5488721804511278
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 72,
        "mnt_trx_mm": 17.21,
        "pct_num_trx_tot": 0.391304347826087
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.2820142,
        "pct_num_trx_tot": 0.043613707165109
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 0.2162162162162162
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.22628,
        "pct_num_trx_tot": 0.0044345898004434
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 61,
        "mnt_trx_mm": 30.6,
        "pct_num_trx_tot": 0.953125
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.93,
        "pct_num_trx_tot": 0.3548387096774194
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.13,
        "pct_num_trx_tot": 0.3125
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 15.670867,
        "pct_num_trx_tot": 0.1066666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 6.200000000000001,
        "pct_num_trx_tot": 0.6363636363636364
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.802907,
        "pct_num_trx_tot": 0.0967741935483871
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.5465130500000002,
        "pct_num_trx_tot": 0.9583333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0915,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 5.6000000000000005,
        "pct_num_trx_tot": 0.3421052631578947
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 9.12,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 2.55,
        "pct_num_trx_tot": 0.2875
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.04768405,
        "pct_num_trx_tot": 0.7407407407407407
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 5.979053,
        "pct_num_trx_tot": 0.1019108280254777
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0194805194805194
      },
      {
        "num_trx": 49,
        "mnt_trx_mm": 1.5802175500000022,
        "pct_num_trx_tot": 0.4711538461538461
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0845070422535211
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.68776,
        "pct_num_trx_tot": 0.086021505376344
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.064516129032258
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 5.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.3793103448275862
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.26128802,
        "pct_num_trx_tot": 0.8823529411764706
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 196,
        "mnt_trx_mm": 18.33,
        "pct_num_trx_tot": 0.5798816568047337
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8404499999999999,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.12
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 14.13994497,
        "pct_num_trx_tot": 0.0795847750865051
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.18350308,
        "pct_num_trx_tot": 0.7837837837837838
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.84,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.29,
        "pct_num_trx_tot": 0.4736842105263157
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 3.13197,
        "pct_num_trx_tot": 0.1145833333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.0594580099999999,
        "pct_num_trx_tot": 0.4722222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.7094999999999998,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 125,
        "mnt_trx_mm": 3.68980792,
        "pct_num_trx_tot": 0.8389261744966443
      },
      {
        "num_trx": 115,
        "mnt_trx_mm": 0.8459078299999999,
        "pct_num_trx_tot": 0.8518518518518519
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.10912,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0291001399999996,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 6.275168,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 7.339464382000081,
        "pct_num_trx_tot": 0.3448275862068966
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.947081,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 1.2162160000000004,
        "pct_num_trx_tot": 0.3013698630136986
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 0.0076923076923076
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 60,
        "mnt_trx_mm": 2.2724,
        "pct_num_trx_tot": 0.3448275862068966
      },
      {
        "num_trx": 80,
        "mnt_trx_mm": 29.040000000000003,
        "pct_num_trx_tot": 0.3361344537815126
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 1.36228303,
        "pct_num_trx_tot": 0.2121212121212121
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 76,
        "mnt_trx_mm": 6.57,
        "pct_num_trx_tot": 0.2846441947565543
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.83,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.141,
        "pct_num_trx_tot": 0.0186915887850467
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.07786312,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.30242,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 12.57,
        "pct_num_trx_tot": 0.5777777777777777
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 4.25,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.904144068,
        "pct_num_trx_tot": 0.0166666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.5394000000000001,
        "pct_num_trx_tot": 0.0505050505050505
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 1.636085,
        "pct_num_trx_tot": 0.1150684931506849
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00053808,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.6454238439,
        "pct_num_trx_tot": 0.1545454545454545
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.32771814,
        "pct_num_trx_tot": 0.4827586206896552
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 17.76,
        "pct_num_trx_tot": 0.5111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.623273,
        "pct_num_trx_tot": 0.0389610389610389
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.0319148936170212
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 3.25,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 0.0412371134020618
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.72,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.7,
        "pct_num_trx_tot": 0.1351351351351351
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0098039215686274
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.29,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 0.6937348399999999,
        "pct_num_trx_tot": 0.4883720930232558
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.5769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.032774,
        "pct_num_trx_tot": 0.0112359550561797
      },
      {
        "num_trx": 77,
        "mnt_trx_mm": 3.22,
        "pct_num_trx_tot": 0.4052631578947368
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.7358,
        "pct_num_trx_tot": 0.1481481481481481
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0198019801980198
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 7,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 3.37,
        "pct_num_trx_tot": 0.4090909090909091
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.936204,
        "pct_num_trx_tot": 0.0103806228373702
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0289855072463768
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0188679245283018
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.7857142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.34,
        "pct_num_trx_tot": 0.6153846153846154
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.4516129032258064
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.07,
        "pct_num_trx_tot": 0.3478260869565217
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 5.39,
        "pct_num_trx_tot": 0.6607142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1255,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1884999999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.5882352941176471
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.79,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.284009,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 5.08331,
        "pct_num_trx_tot": 0.1573604060913705
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08425,
        "pct_num_trx_tot": 0.0104166666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.131578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 1.77,
        "pct_num_trx_tot": 0.3898305084745763
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.0851063829787234
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.8823529411764706
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5769599999999999,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.17,
        "pct_num_trx_tot": 0.3888888888888889
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.5076465799999991,
        "pct_num_trx_tot": 0.7111111111111111
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.03,
        "pct_num_trx_tot": 0.4814814814814814
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.1430719999999999,
        "pct_num_trx_tot": 0.5238095238095238
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.24606469,
        "pct_num_trx_tot": 0.8461538461538461
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 3.30332523,
        "pct_num_trx_tot": 0.5256410256410257
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.37994,
        "pct_num_trx_tot": 0.0253164556962025
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.26601515,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.14569437,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 5.1386,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.9037,
        "pct_num_trx_tot": 0.0634920634920634
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 1.62103081,
        "pct_num_trx_tot": 0.5818181818181818
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.46,
        "pct_num_trx_tot": 0.0551181102362204
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 0.5866546,
        "pct_num_trx_tot": 0.7321428571428571
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.1617647058823529
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.31366906,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.99,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.274148,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.2941176470588235
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.8823529411764706
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00889424,
        "pct_num_trx_tot": 0.0144927536231884
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 2.01657287,
        "pct_num_trx_tot": 0.5434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 7.59,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.33,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.492028,
        "pct_num_trx_tot": 0.0254777070063694
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0172413793103448
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.1991084699999999,
        "pct_num_trx_tot": 0.6862745098039216
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.91,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.0641025641025641
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.161,
        "pct_num_trx_tot": 0.0178571428571428
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 11.361119,
        "pct_num_trx_tot": 0.2526315789473684
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.0309278350515463
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.52172866,
        "pct_num_trx_tot": 0.9117647058823528
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.027215,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.1658031088082901
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.14,
        "pct_num_trx_tot": 0.55
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.34591875,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.4675423,
        "pct_num_trx_tot": 0.3114754098360656
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.04,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 8.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 1.51,
        "pct_num_trx_tot": 0.1166666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.0652173913043478
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.3670178099999999,
        "pct_num_trx_tot": 0.4571428571428571
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.28,
        "pct_num_trx_tot": 0.2574257425742574
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 8.691185999999997,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.0338983050847457
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 87,
        "mnt_trx_mm": 1.59673649,
        "pct_num_trx_tot": 0.8055555555555556
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.061997,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0259740259740259
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.07072613,
        "pct_num_trx_tot": 0.128440366972477
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.359274,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 2.279408,
        "pct_num_trx_tot": 0.0732600732600732
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.155546,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.74,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6899,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31605,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.387,
        "pct_num_trx_tot": 0.0064102564102564
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.74,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0051020408163265
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.0961538461538461
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.45,
        "pct_num_trx_tot": 0.6875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.03195,
        "pct_num_trx_tot": 0.247191011235955
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.93435,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.5696279999999999,
        "pct_num_trx_tot": 0.2941176470588235
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 2.90053698,
        "pct_num_trx_tot": 0.8936170212765957
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.9496567316,
        "pct_num_trx_tot": 0.0066445182724252
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.88,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0338983050847457
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.08712208,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 188,
        "mnt_trx_mm": 127.802646,
        "pct_num_trx_tot": 0.3061889250814332
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.10041684,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18212435,
        "pct_num_trx_tot": 0.0697674418604651
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.30179055,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.93,
        "pct_num_trx_tot": 0.1272727272727272
      },
      {
        "num_trx": 162,
        "mnt_trx_mm": 1.3328007400000002,
        "pct_num_trx_tot": 0.8804347826086957
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.11771,
        "pct_num_trx_tot": 0.072992700729927
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 31.45,
        "pct_num_trx_tot": 0.3166666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.79,
        "pct_num_trx_tot": 0.146067415730337
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.6956709999999999,
        "pct_num_trx_tot": 0.3235294117647059
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 0.35138861,
        "pct_num_trx_tot": 0.8070175438596491
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 34.4646190185,
        "pct_num_trx_tot": 0.0411899313501144
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0259740259740259
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 18.37,
        "pct_num_trx_tot": 0.6896551724137931
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0188679245283018
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.9375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3721488700000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 12.91,
        "pct_num_trx_tot": 0.1535836177474402
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.036,
        "pct_num_trx_tot": 0.0117647058823529
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 9.55699394,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1290322580645161
      },
      {
        "num_trx": 77,
        "mnt_trx_mm": 0.81624737,
        "pct_num_trx_tot": 0.6581196581196581
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 45.70051699999999,
        "pct_num_trx_tot": 0.1881720430107527
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.115515,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.015625
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 0.1304347826086956
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.16,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.18437845,
        "pct_num_trx_tot": 0.1919191919191919
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 0.88217973,
        "pct_num_trx_tot": 0.6292134831460674
      },
      {
        "num_trx": 88,
        "mnt_trx_mm": 3.90984966,
        "pct_num_trx_tot": 0.5827814569536424
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.826815,
        "pct_num_trx_tot": 0.3823529411764705
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.80117986,
        "pct_num_trx_tot": 0.0239520958083832
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 5.05,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.71,
        "pct_num_trx_tot": 0.0780141843971631
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 2.36,
        "pct_num_trx_tot": 0.4848484848484848
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 0.3529411764705882
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0120481927710843
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 1.67,
        "pct_num_trx_tot": 0.9433962264150944
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 3.35605022,
        "pct_num_trx_tot": 0.5274725274725275
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.38247,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0202020202020202
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 9.074059999999998,
        "pct_num_trx_tot": 0.1441441441441441
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 0.8151036600000002,
        "pct_num_trx_tot": 0.835820895522388
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.7636363636363637
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.526336,
        "pct_num_trx_tot": 0.0481927710843373
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 1.1192184900000013,
        "pct_num_trx_tot": 0.3761467889908257
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.2787,
        "pct_num_trx_tot": 0.0457516339869281
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.84824594,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 1.2120080000000002,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.09375
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0083333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 4.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.2472060999999999,
        "pct_num_trx_tot": 0.0579710144927536
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.84,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 119,
        "mnt_trx_mm": 5.73,
        "pct_num_trx_tot": 0.3851132686084142
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.583969,
        "pct_num_trx_tot": 0.0389610389610389
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.1612903225806451
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.9230769230769232
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 11.27,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.54,
        "pct_num_trx_tot": 0.1694915254237288
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.12,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.1587301587301587
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44502913,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 1.87,
        "pct_num_trx_tot": 0.6756756756756757
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0075187969924812
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 7.162161166200001,
        "pct_num_trx_tot": 0.0862068965517241
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.852219,
        "pct_num_trx_tot": 0.0194552529182879
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 23.36,
        "pct_num_trx_tot": 0.8245614035087719
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.08322699,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.074074074074074
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.6,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 2.69994,
        "pct_num_trx_tot": 0.0951086956521739
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.24038458,
        "pct_num_trx_tot": 0.8620689655172413
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 11.66,
        "pct_num_trx_tot": 0.2264150943396226
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 0.3055555555555556
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 2.33,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 7.1988621615,
        "pct_num_trx_tot": 0.2037037037037037
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.121,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.34,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.39,
        "pct_num_trx_tot": 0.1851851851851851
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0038610038610038
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.85393772,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 3.5365,
        "pct_num_trx_tot": 0.0570652173913043
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.0816326530612244
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.06
      },
      {
        "num_trx": 87,
        "mnt_trx_mm": 36.476786,
        "pct_num_trx_tot": 0.3782608695652174
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.9166666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0206185567010309
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.7432160000000001,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.3125
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.31,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.850027,
        "pct_num_trx_tot": 0.0206896551724137
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.3761466000000001,
        "pct_num_trx_tot": 0.576271186440678
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.7298739999999999,
        "pct_num_trx_tot": 0.0085836909871244
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.3297,
        "pct_num_trx_tot": 0.1866666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 2.68,
        "pct_num_trx_tot": 0.2342857142857143
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 2.3550500000000003,
        "pct_num_trx_tot": 0.1702127659574468
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 6.79,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 54,
        "mnt_trx_mm": 2.09033564,
        "pct_num_trx_tot": 0.1056751467710371
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0379746835443038
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.43,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 3.9938071668,
        "pct_num_trx_tot": 0.0542452830188679
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.23,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.392852269999996,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.1714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.4432501217,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 0.66228706,
        "pct_num_trx_tot": 0.6607142857142857
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.3478260869565217
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.19534734,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 6.2,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.194679,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.03311058,
        "pct_num_trx_tot": 0.7368421052631579
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.064516129032258
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.64,
        "pct_num_trx_tot": 0.45
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.086106,
        "pct_num_trx_tot": 0.0104166666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0444444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.22913,
        "pct_num_trx_tot": 0.0892857142857142
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.1799247345,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 0.26472385,
        "pct_num_trx_tot": 0.8787878787878788
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 2.65997,
        "pct_num_trx_tot": 0.33
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.075332,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.24382531,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 7,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.15,
        "pct_num_trx_tot": 0.4117647058823529
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 8.28,
        "pct_num_trx_tot": 0.782608695652174
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.4182182599999999,
        "pct_num_trx_tot": 0.8421052631578947
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.2429,
        "pct_num_trx_tot": 0.1473684210526315
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.9,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 12.04396,
        "pct_num_trx_tot": 0.1914893617021276
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.684022,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.0551250799999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0128205128205128
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.12,
        "pct_num_trx_tot": 0.3157894736842105
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 9.27,
        "pct_num_trx_tot": 0.46
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.2592592592592592
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.6,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.3175698899999999,
        "pct_num_trx_tot": 0.6578947368421053
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 1.01,
        "pct_num_trx_tot": 0.58
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.73,
        "pct_num_trx_tot": 0.0677966101694915
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.0806451612903225
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5833999999999999,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00000674,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 8.784429000000001,
        "pct_num_trx_tot": 0.2830188679245283
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.7009,
        "pct_num_trx_tot": 0.0068965517241379
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 5.590430000000001,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0210526315789473
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.51,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.66665,
        "pct_num_trx_tot": 0.0365853658536585
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 4.77,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 24.66,
        "pct_num_trx_tot": 0.3233830845771144
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.4805,
        "pct_num_trx_tot": 0.0157232704402515
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 9.15,
        "pct_num_trx_tot": 0.0542168674698795
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.7490410000000001,
        "pct_num_trx_tot": 0.0253164556962025
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.29,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.160187,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.015625
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 11.11,
        "pct_num_trx_tot": 0.78125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 75,
        "mnt_trx_mm": 0.42964151,
        "pct_num_trx_tot": 0.4054054054054054
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 140,
        "mnt_trx_mm": 122.4,
        "pct_num_trx_tot": 0.4844290657439446
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.24461474,
        "pct_num_trx_tot": 0.4878048780487805
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 5.92,
        "pct_num_trx_tot": 0.384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.98,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.4761904761904761
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.8341056499999999,
        "pct_num_trx_tot": 0.8478260869565217
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.6973358235000002,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.3461538461538461
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.0500699999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 5.72,
        "pct_num_trx_tot": 0.2535211267605634
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.205242,
        "pct_num_trx_tot": 0.054054054054054
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.19259632,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.3673469387755102
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.1,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0364502,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.65,
        "pct_num_trx_tot": 0.4081632653061224
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.91,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 5.55,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 2.48,
        "pct_num_trx_tot": 0.7407407407407407
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.0428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.7000000000000001,
        "pct_num_trx_tot": 0.1860465116279069
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.095278,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.95,
        "pct_num_trx_tot": 0.2272727272727272
      },
      {
        "num_trx": 157,
        "mnt_trx_mm": 4.00460067,
        "pct_num_trx_tot": 0.8351063829787234
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0055096418732782
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 3.36,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.3888888888888889
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.21575157,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.9574468085106383
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.0808823529411764
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.46,
        "pct_num_trx_tot": 0.275
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0071428571428571
      },
      {
        "num_trx": 61,
        "mnt_trx_mm": 2.55358147,
        "pct_num_trx_tot": 0.8970588235294118
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.1489361702127659
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6759,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.84,
        "pct_num_trx_tot": 0.0389610389610389
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 1.5431209999999995,
        "pct_num_trx_tot": 0.5434782608695652
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.3899,
        "pct_num_trx_tot": 0.0212765957446808
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0784313725490196
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.20234,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.3295051799999999,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.3144,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 100,
        "mnt_trx_mm": 21.95,
        "pct_num_trx_tot": 0.7518796992481203
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1073,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.2364142799999999,
        "pct_num_trx_tot": 0.7714285714285715
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6906,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 0.3732019299999995,
        "pct_num_trx_tot": 0.8148148148148148
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.0446338899999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 15.98,
        "pct_num_trx_tot": 0.725
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.6046951300000002,
        "pct_num_trx_tot": 0.9130434782608696
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.73,
        "pct_num_trx_tot": 0.4193548387096774
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.3119197199999999,
        "pct_num_trx_tot": 0.6410256410256411
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 4.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.51,
        "pct_num_trx_tot": 0.0138888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.155355,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.9166666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 87,
        "mnt_trx_mm": 1.27443181,
        "pct_num_trx_tot": 0.7016129032258065
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.66948,
        "pct_num_trx_tot": 0.0120481927710843
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 9.361473,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.298657,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 12.255557769999992,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.36443215,
        "pct_num_trx_tot": 0.7906976744186046
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 4.07,
        "pct_num_trx_tot": 0.160919540229885
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 4.24,
        "pct_num_trx_tot": 0.1063829787234042
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14802,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.24,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 6.035767000000001,
        "pct_num_trx_tot": 0.1556291390728476
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 6.2,
        "pct_num_trx_tot": 0.20625
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.9230769230769232
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.258849,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.0675675675675675
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.146067415730337
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.123035,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.352997,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 0.3636622,
        "pct_num_trx_tot": 0.8103448275862069
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.15648682,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.49997985,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.91,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.1071428571428571
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.028169014084507
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1899,
        "pct_num_trx_tot": 0.0256410256410256
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.96,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.0384,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0264900662251655
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 62,
        "mnt_trx_mm": 0.8622331100000009,
        "pct_num_trx_tot": 0.4105960264900662
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0161290322580645
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 5.87,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0079365079365079
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.4666666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.91,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 5.16,
        "pct_num_trx_tot": 0.6914893617021277
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.23,
        "pct_num_trx_tot": 0.3478260869565217
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 2.00147,
        "pct_num_trx_tot": 0.1296296296296296
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.2134782499999999,
        "pct_num_trx_tot": 0.8125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 108,
        "mnt_trx_mm": 2.4221727163,
        "pct_num_trx_tot": 0.3540983606557377
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.0352112676056338
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 3.341040000000001,
        "pct_num_trx_tot": 0.32
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 1029.803214869999,
        "pct_num_trx_tot": 0.3134328358208955
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.2377827499999999,
        "pct_num_trx_tot": 0.6962025316455697
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.392775,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5384615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.0444444444444444
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.0914899999999998,
        "pct_num_trx_tot": 0.0777777777777777
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.15837765,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.30468,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 3.6,
        "pct_num_trx_tot": 0.296875
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.16690004,
        "pct_num_trx_tot": 0.3148148148148148
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.1514,
        "pct_num_trx_tot": 0.0742574257425742
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0178571428571428
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.16326016,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 8,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0144927536231884
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.851275,
        "pct_num_trx_tot": 0.5806451612903226
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.18,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 98,
        "mnt_trx_mm": 30.2,
        "pct_num_trx_tot": 0.1019771071800208
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.5359557200000005,
        "pct_num_trx_tot": 0.3142857142857143
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.1689428,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.13466998,
        "pct_num_trx_tot": 0.7894736842105263
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 9.75705,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 57,
        "mnt_trx_mm": 4.6,
        "pct_num_trx_tot": 0.7307692307692307
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.91,
        "pct_num_trx_tot": 0.7307692307692307
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0240963855421686
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.18,
        "pct_num_trx_tot": 0.2264150943396226
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.031578947368421
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0899,
        "pct_num_trx_tot": 0.0102564102564102
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.1122,
        "pct_num_trx_tot": 0.6111111111111112
      },
      {
        "num_trx": 50,
        "mnt_trx_mm": 1.24933058,
        "pct_num_trx_tot": 0.5882352941176471
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2255,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.12740933,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.86,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 262.9423667,
        "pct_num_trx_tot": 0.5151515151515151
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.1318681318681318
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 15.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.056338028169014
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09299948,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.3216931281000002,
        "pct_num_trx_tot": 0.1272727272727272
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 2.03,
        "pct_num_trx_tot": 0.2897196261682243
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.78,
        "pct_num_trx_tot": 0.9285714285714286
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1307,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 94,
        "mnt_trx_mm": 18.731713,
        "pct_num_trx_tot": 0.3003194888178914
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.064551,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2028039999999999,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.41,
        "pct_num_trx_tot": 0.1116751269035533
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.67,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.15,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.6923076923076923
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 16,
        "pct_num_trx_tot": 0.0158730158730158
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.287817,
        "pct_num_trx_tot": 0.0206185567010309
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.333876,
        "pct_num_trx_tot": 0.0259740259740259
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.4616,
        "pct_num_trx_tot": 0.087719298245614
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.91,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.60432,
        "pct_num_trx_tot": 0.1142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00104784,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.3972131599999998,
        "pct_num_trx_tot": 0.4814814814814814
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.02424,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.06,
        "pct_num_trx_tot": 0.0757575757575757
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.799,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 76,
        "mnt_trx_mm": 2.176339350000001,
        "pct_num_trx_tot": 0.7755102040816326
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.04741376,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.09375
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.14,
        "pct_num_trx_tot": 0.5416666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 0.29508075,
        "pct_num_trx_tot": 0.8363636363636363
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.11,
        "pct_num_trx_tot": 0.0171428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.67,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0113636363636363
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 7.14061362,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.251617,
        "pct_num_trx_tot": 0.0597014925373134
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.2010065800000001,
        "pct_num_trx_tot": 0.6363636363636364
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.38419326,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 16.8,
        "pct_num_trx_tot": 0.3295454545454545
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 6.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1507,
        "pct_num_trx_tot": 0.012
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.175
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.3999,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.83,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 1.530019390000001,
        "pct_num_trx_tot": 0.7931034482758621
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 3.762000000000001,
        "pct_num_trx_tot": 0.1527777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.21525751,
        "pct_num_trx_tot": 0.85
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 9.04,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.62,
        "pct_num_trx_tot": 0.2325581395348837
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.099,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.00004484,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 5.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 2.5,
        "pct_num_trx_tot": 0.56
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.11,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1025641025641025
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1279999999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.2287234042553191
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.92717348,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.0397727272727272
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00090624,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.002906976744186
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0411764705882352
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2818497,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 72,
        "mnt_trx_mm": 5.88,
        "pct_num_trx_tot": 0.6545454545454545
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 0.0692307692307692
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 7.55321475,
        "pct_num_trx_tot": 0.134453781512605
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 0.3363333799999998,
        "pct_num_trx_tot": 0.7666666666666667
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.039369,
        "pct_num_trx_tot": 0.0114942528735632
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.421001,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.22,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.5347956203,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0064516129032258
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.1596888099999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0175438596491228
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.53,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.015625
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.61,
        "pct_num_trx_tot": 0.1891891891891892
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.1627,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.2436509999999999,
        "pct_num_trx_tot": 0.2441860465116279
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.0847457627118644
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.025
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.849389,
        "pct_num_trx_tot": 0.0245901639344262
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 1.81166909,
        "pct_num_trx_tot": 0.7551020408163265
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0241935483870967
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 4.059468,
        "pct_num_trx_tot": 0.3275862068965517
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 1.3199816800000004,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.0634920634920634
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.41,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03804416,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.59183,
        "pct_num_trx_tot": 0.0862068965517241
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8641690000000001,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.0256410256410256
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1999,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.1379310344827586
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1422,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.29,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 4.4461,
        "pct_num_trx_tot": 0.0888888888888888
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6249,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 0.4316443399999999,
        "pct_num_trx_tot": 0.4774774774774775
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.22473422,
        "pct_num_trx_tot": 0.9230769230769232
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 18.6524,
        "pct_num_trx_tot": 0.0062893081761006
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 1.91431,
        "pct_num_trx_tot": 0.4266666666666667
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 0.2610199199999999,
        "pct_num_trx_tot": 0.8392857142857143
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.10293605,
        "pct_num_trx_tot": 0.53125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.25,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0945,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 7.38,
        "pct_num_trx_tot": 0.4482758620689655
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.8274599999999999,
        "pct_num_trx_tot": 0.044776119402985
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.75778224,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.13,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.49,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.058,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 2.51,
        "pct_num_trx_tot": 0.1633986928104575
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.7503,
        "pct_num_trx_tot": 0.3717948717948718
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.2372881355932203
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.4210526315789473
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.59,
        "pct_num_trx_tot": 0.0777777777777777
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.22131856,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.0021141649048625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 4.964,
        "pct_num_trx_tot": 0.2702702702702703
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.0967741935483871
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.127,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.9166666666666666
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.37934834,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0196078431372549
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.2698,
        "pct_num_trx_tot": 0.0380952380952381
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0037878787878787
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 0.8353182800000001,
        "pct_num_trx_tot": 0.2574257425742574
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.58387481,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 6.427452441899999,
        "pct_num_trx_tot": 0.0234541577825159
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 5.37,
        "pct_num_trx_tot": 0.9333333333333332
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 7.15,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.35,
        "pct_num_trx_tot": 0.0699300699300699
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19569,
        "pct_num_trx_tot": 0.0144927536231884
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1698,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.12,
        "pct_num_trx_tot": 0.7333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0561797752808988
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 0.2851273899999999,
        "pct_num_trx_tot": 0.5189873417721519
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.8,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.7857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.4956238999999999,
        "pct_num_trx_tot": 0.6101694915254238
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 5.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.53,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 17.9,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.519,
        "pct_num_trx_tot": 0.0051457975986277
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.343684,
        "pct_num_trx_tot": 0.3478260869565217
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.27,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 98,
        "mnt_trx_mm": 5.1545380000000005,
        "pct_num_trx_tot": 0.0913327120223671
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.07,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.272191062,
        "pct_num_trx_tot": 0.0072202166064981
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 162,
        "mnt_trx_mm": 1.8815119765,
        "pct_num_trx_tot": 0.2718120805369127
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.3,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 3.765444947,
        "pct_num_trx_tot": 0.0308123249299719
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.411899,
        "pct_num_trx_tot": 0.3466666666666667
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.9588,
        "pct_num_trx_tot": 0.358974358974359
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07032,
        "pct_num_trx_tot": 0.0042194092827004
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.77,
        "pct_num_trx_tot": 0.0327868852459016
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.38,
        "pct_num_trx_tot": 0.3809523809523809
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.64315,
        "pct_num_trx_tot": 0.0273972602739726
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.0097087378640776
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 9,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 5.84,
        "pct_num_trx_tot": 0.3925233644859813
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 9.7,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.044611,
        "pct_num_trx_tot": 0.0884955752212389
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 11.24,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.3548949999999999,
        "pct_num_trx_tot": 0.3711340206185567
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.45,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.00358388,
        "pct_num_trx_tot": 0.0131578947368421
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.155086,
        "pct_num_trx_tot": 0.16
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.4666666666666667
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 25.33,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.1560975609756097
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 4.420205,
        "pct_num_trx_tot": 0.1063829787234042
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.4630999999999999,
        "pct_num_trx_tot": 0.064516129032258
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.75048088,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 51,
        "mnt_trx_mm": 2.255241,
        "pct_num_trx_tot": 0.4434782608695652
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.93,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1276595744680851
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 20.642033,
        "pct_num_trx_tot": 0.1796875
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.3524193499999999,
        "pct_num_trx_tot": 0.813953488372093
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.094240837696335
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 13.71,
        "pct_num_trx_tot": 0.9230769230769232
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.41,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.0919540229885057
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.77179029,
        "pct_num_trx_tot": 0.1304347826086956
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1469880965,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.36547114,
        "pct_num_trx_tot": 0.7209302325581395
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.11,
        "pct_num_trx_tot": 0.0732984293193717
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.3157894736842105
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.1304347826086956
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17869642,
        "pct_num_trx_tot": 0.0066225165562913
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 2.3,
        "pct_num_trx_tot": 0.2452830188679245
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.94,
        "pct_num_trx_tot": 0.5384615384615384
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.3142857142857143
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.05,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 26.98,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.623806,
        "pct_num_trx_tot": 0.0068587105624142
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.66886,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.857464,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.2835,
        "pct_num_trx_tot": 0.0342465753424657
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.0878787878787878
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.765306,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01102405,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 3.53,
        "pct_num_trx_tot": 0.8048780487804879
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1884,
        "pct_num_trx_tot": 0.0140845070422535
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.41,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.05710034,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0151515151515151
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.76495,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 4.02955,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 0.0275862068965517
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.5166604100000001,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.018348623853211
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 0.1940298507462686
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.7701440000000002,
        "pct_num_trx_tot": 0.0866666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.3010062799999997,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0919540229885057
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.83,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 13.62,
        "pct_num_trx_tot": 0.8524590163934426
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0353961199999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 3.87,
        "pct_num_trx_tot": 0.3735632183908046
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 6.4605582316,
        "pct_num_trx_tot": 0.0784313725490196
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0078125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.2272727272727272
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04717996,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.0204081632653061
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0103092783505154
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.1506028,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.498,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 61,
        "mnt_trx_mm": 2.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.103,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.2601,
        "pct_num_trx_tot": 0.2368421052631578
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 4.72,
        "pct_num_trx_tot": 0.0642201834862385
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.22174469,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.0133928571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.06,
        "pct_num_trx_tot": 0.0163934426229508
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.1351351351351351
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11029389,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.2003,
        "pct_num_trx_tot": 0.1159420289855072
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2142632,
        "pct_num_trx_tot": 0.0133333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.04506863,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.1149999999999999,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 3.06,
        "pct_num_trx_tot": 0.2745098039215686
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.2634,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.188325,
        "pct_num_trx_tot": 0.0108695652173913
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.048,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 6.342098849999999,
        "pct_num_trx_tot": 0.1394557823129251
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.04144,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 1.2613118999999997,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.06699804,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 11.71670723,
        "pct_num_trx_tot": 0.123015873015873
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.4500000000000002,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 4.15,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 3.64,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.6610642600000001,
        "pct_num_trx_tot": 0.9655172413793104
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0588573,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.9354261302,
        "pct_num_trx_tot": 0.0560747663551401
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 120,
        "mnt_trx_mm": 5.72,
        "pct_num_trx_tot": 0.916030534351145
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 3.39,
        "pct_num_trx_tot": 0.1401869158878504
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 4.72,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0747,
        "pct_num_trx_tot": 0.02
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 0.1076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.91,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 4.550678,
        "pct_num_trx_tot": 0.0478723404255319
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0924,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.84,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 54,
        "mnt_trx_mm": 8.65,
        "pct_num_trx_tot": 0.2741116751269035
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 638.9004295100005,
        "pct_num_trx_tot": 0.673469387755102
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 6.452529999999999,
        "pct_num_trx_tot": 0.1309823677581864
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.11465,
        "pct_num_trx_tot": 0.0180995475113122
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 54,
        "mnt_trx_mm": 4.640000000000001,
        "pct_num_trx_tot": 0.2967032967032967
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 6.94,
        "pct_num_trx_tot": 0.4473684210526316
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.073170731707317
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.4137931034482758
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.0781,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 1.5812799999999996,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.98,
        "pct_num_trx_tot": 0.3225806451612903
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.650454,
        "pct_num_trx_tot": 0.019047619047619
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.769212,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.8,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.0864197530864197
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 4.272,
        "pct_num_trx_tot": 0.1639344262295081
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.899,
        "pct_num_trx_tot": 0.0144927536231884
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 4.66,
        "pct_num_trx_tot": 0.2083333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.1290322580645161
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.2878787878787879
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.1379310344827586
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.23835,
        "pct_num_trx_tot": 0.3695652173913043
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 79,
        "mnt_trx_mm": 0.61023586,
        "pct_num_trx_tot": 0.7053571428571429
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 14.7,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.77,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.47172,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.5,
        "pct_num_trx_tot": 0.0392156862745098
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.158404,
        "pct_num_trx_tot": 0.036144578313253
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.85,
        "pct_num_trx_tot": 0.0925925925925925
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.4139040000000001,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7599,
        "pct_num_trx_tot": 0.0138888888888888
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.1657472499999999,
        "pct_num_trx_tot": 0.6774193548387096
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.0876089999999999,
        "pct_num_trx_tot": 0.0423728813559322
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 3.81863,
        "pct_num_trx_tot": 0.5784313725490197
      },
      {
        "num_trx": 66,
        "mnt_trx_mm": 3.93362462,
        "pct_num_trx_tot": 0.1645885286783042
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 4.27,
        "pct_num_trx_tot": 0.0101522842639593
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 4.97,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.21875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0995,
        "pct_num_trx_tot": 0.0077519379844961
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22882,
        "pct_num_trx_tot": 0.0105263157894736
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1785714285714285
      },
      {
        "num_trx": 79,
        "mnt_trx_mm": 214.65661842320023,
        "pct_num_trx_tot": 0.3526785714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.2027916299999999,
        "pct_num_trx_tot": 0.3773584905660377
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.2068965517241379
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.85,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.8306155861,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.028169014084507
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.025,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.6594,
        "pct_num_trx_tot": 0.1393034825870646
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.8048780487804879
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.22,
        "pct_num_trx_tot": 0.087719298245614
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.99,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 2.33092,
        "pct_num_trx_tot": 0.0897755610972568
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 9.209915,
        "pct_num_trx_tot": 0.080188679245283
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.07628486,
        "pct_num_trx_tot": 0.8461538461538461
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 6.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0059171597633136
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 2.26703598,
        "pct_num_trx_tot": 0.2521008403361344
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00045125,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 6.8066852152,
        "pct_num_trx_tot": 0.0957446808510638
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.668805,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.104032,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.4,
        "pct_num_trx_tot": 0.1851851851851851
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 68,
        "mnt_trx_mm": 0.4629509500000001,
        "pct_num_trx_tot": 0.7640449438202247
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0181818181818181
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.2608695652173913
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 4.934183999999999,
        "pct_num_trx_tot": 0.3246753246753247
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.3041273399999999,
        "pct_num_trx_tot": 0.8947368421052632
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.115,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.2357,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 3.807689,
        "pct_num_trx_tot": 0.0931818181818181
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 558.7040542131998,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1308,
        "pct_num_trx_tot": 0.0194805194805194
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.65,
        "pct_num_trx_tot": 0.7222222222222222
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.58,
        "pct_num_trx_tot": 0.2622950819672131
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.07,
        "pct_num_trx_tot": 0.1693548387096774
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.015317,
        "pct_num_trx_tot": 0.0970149253731343
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 0.9045972,
        "pct_num_trx_tot": 0.8795180722891566
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.65,
        "pct_num_trx_tot": 0.1067961165048543
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 1.77,
        "pct_num_trx_tot": 0.3647058823529411
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.1186440677966101
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.5384615384615384
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.56,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.513389,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0612244897959183
      },
      {
        "num_trx": 101,
        "mnt_trx_mm": 3.9495375,
        "pct_num_trx_tot": 0.753731343283582
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.32
      },
      {
        "num_trx": 51,
        "mnt_trx_mm": 6.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.8,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 1.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.39824,
        "pct_num_trx_tot": 0.2285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 166,
        "mnt_trx_mm": 6.54,
        "pct_num_trx_tot": 0.5907473309608541
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.1687854799999999,
        "pct_num_trx_tot": 0.9642857142857144
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2288049999999999,
        "pct_num_trx_tot": 0.0253164556962025
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0967741935483871
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.2272727272727272
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.24434397,
        "pct_num_trx_tot": 0.967741935483871
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.1566599,
        "pct_num_trx_tot": 0.8076923076923077
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.1481481481481481
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.305155,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 3.114029,
        "pct_num_trx_tot": 0.2967741935483871
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.307738,
        "pct_num_trx_tot": 0.1265822784810126
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 4.85,
        "pct_num_trx_tot": 0.213953488372093
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.1,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.51,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 1.1435607530000005,
        "pct_num_trx_tot": 0.2142857142857142
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.3571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.3111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.27,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.5977217600000001,
        "pct_num_trx_tot": 0.2295081967213114
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 6.25,
        "pct_num_trx_tot": 0.1084905660377358
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 156,
        "mnt_trx_mm": 6.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 1.88,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1212121212121212
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.075,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.0675675675675675
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.45615935,
        "pct_num_trx_tot": 0.9230769230769232
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.13,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.217391304347826
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0093457943925233
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 0.5814004400000004,
        "pct_num_trx_tot": 0.7058823529411765
      },
      {
        "num_trx": 81,
        "mnt_trx_mm": 754.2713293120003,
        "pct_num_trx_tot": 0.4426229508196721
      },
      {
        "num_trx": 96,
        "mnt_trx_mm": 170.84988173,
        "pct_num_trx_tot": 0.3232323232323232
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.174,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.1097560975609756
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.2309979199999999,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 4.14,
        "pct_num_trx_tot": 0.1769911504424778
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 4.01,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.033276,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.287,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.76,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 19.498830078,
        "pct_num_trx_tot": 0.2068965517241379
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 2.99,
        "pct_num_trx_tot": 0.171875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 4.790863,
        "pct_num_trx_tot": 0.1584158415841584
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.045,
        "pct_num_trx_tot": 0.005
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 90,
        "mnt_trx_mm": 42.95,
        "pct_num_trx_tot": 0.8653846153846154
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 5.699999999999999,
        "pct_num_trx_tot": 0.4035087719298245
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 18.04,
        "pct_num_trx_tot": 0.7407407407407407
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.4865065700000002,
        "pct_num_trx_tot": 0.7037037037037037
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.09,
        "pct_num_trx_tot": 0.35
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.61,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 1.94,
        "pct_num_trx_tot": 0.1528662420382165
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3262089999999999,
        "pct_num_trx_tot": 0.0789473684210526
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 103,
        "mnt_trx_mm": 17.4883242905,
        "pct_num_trx_tot": 0.2689295039164491
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1758,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.2902,
        "pct_num_trx_tot": 0.087378640776699
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.40625
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 4.6,
        "pct_num_trx_tot": 0.7894736842105263
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 8.22,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.205698,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.8785499999999999,
        "pct_num_trx_tot": 0.0818713450292397
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.3800000000000003,
        "pct_num_trx_tot": 0.320754716981132
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0040650406504065
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.314383,
        "pct_num_trx_tot": 0.4705882352941176
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.4347916999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 4.22,
        "pct_num_trx_tot": 0.1604938271604938
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 7.61,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.02066912,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 106,
        "mnt_trx_mm": 66.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.41,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.14033926,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.59944,
        "pct_num_trx_tot": 0.02
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.7692307692307693
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.282051282051282
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.1489361702127659
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0055865921787709
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.0531227167,
        "pct_num_trx_tot": 0.054054054054054
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.9285714285714286
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.88,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 4.34,
        "pct_num_trx_tot": 0.5454545454545454
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0254237288135593
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 4.38,
        "pct_num_trx_tot": 0.1641791044776119
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.44,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 7.1863280000000005,
        "pct_num_trx_tot": 0.0725190839694656
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.125,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 8.673,
        "pct_num_trx_tot": 0.0239520958083832
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.0326086956521739
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2229,
        "pct_num_trx_tot": 0.0044642857142857
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.16675066,
        "pct_num_trx_tot": 0.2702702702702703
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.17420835,
        "pct_num_trx_tot": 0.0717948717948717
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 9,
        "pct_num_trx_tot": 0.074074074074074
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.3887460999999999,
        "pct_num_trx_tot": 0.2027027027027027
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0100502512562814
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.2949999999999999,
        "pct_num_trx_tot": 0.0398230088495575
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.34,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 77,
        "mnt_trx_mm": 1.0334502600000004,
        "pct_num_trx_tot": 0.8279569892473119
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.64,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 1.86,
        "pct_num_trx_tot": 0.3934426229508196
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.1667790831999999,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.94,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.1,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.8,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 13.08,
        "pct_num_trx_tot": 0.4230769230769231
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.9829,
        "pct_num_trx_tot": 0.84375
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.73,
        "pct_num_trx_tot": 0.5121951219512195
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.325
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.0612244897959183
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.247,
        "pct_num_trx_tot": 0.0133333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 8.1,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6949,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 63,
        "mnt_trx_mm": 13.86,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 1.90344189,
        "pct_num_trx_tot": 0.6941176470588235
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 2.6041411342,
        "pct_num_trx_tot": 0.0582010582010582
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.58005496,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.119,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 3.18,
        "pct_num_trx_tot": 0.6486486486486487
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 90,
        "mnt_trx_mm": 0.7707821700000004,
        "pct_num_trx_tot": 0.6474820143884892
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 6.78,
        "pct_num_trx_tot": 0.627906976744186
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.48335,
        "pct_num_trx_tot": 0.054054054054054
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 22.164998,
        "pct_num_trx_tot": 0.1132075471698113
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 3.0371,
        "pct_num_trx_tot": 0.0949367088607595
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 19.36,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 8.989,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.71,
        "pct_num_trx_tot": 0.2272727272727272
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.0123529,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 4.32054977,
        "pct_num_trx_tot": 0.0426666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.0140845070422535
      },
      {
        "num_trx": 63,
        "mnt_trx_mm": 11.732153296,
        "pct_num_trx_tot": 0.0519801980198019
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 69,
        "mnt_trx_mm": 5.82,
        "pct_num_trx_tot": 0.276
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1718,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 8.370051000000002,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.2813987000000001,
        "pct_num_trx_tot": 0.3789473684210526
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.071524,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1437,
        "pct_num_trx_tot": 0.0151515151515151
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.18,
        "pct_num_trx_tot": 0.0828729281767955
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0111111111111111
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.3822724500000001,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0508474576271186
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 49,
        "mnt_trx_mm": 0.34807389,
        "pct_num_trx_tot": 0.5697674418604651
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.017094017094017
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.7,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.483445,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.392218,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.4166666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.5909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 4.21,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.5811200000000001,
        "pct_num_trx_tot": 0.072463768115942
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 117,
        "mnt_trx_mm": 27.35,
        "pct_num_trx_tot": 0.936
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.54,
        "pct_num_trx_tot": 0.1276595744680851
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.7640485299999997,
        "pct_num_trx_tot": 0.3291139240506329
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.019,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 3.02,
        "pct_num_trx_tot": 0.2016806722689075
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0172413793103448
      },
      {
        "num_trx": 138,
        "mnt_trx_mm": 4763.032090737697,
        "pct_num_trx_tot": 0.8214285714285714
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 6.8,
        "pct_num_trx_tot": 0.7894736842105263
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 2.25,
        "pct_num_trx_tot": 0.2571428571428571
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.0413793103448275
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2085,
        "pct_num_trx_tot": 0.0088495575221238
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 8.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.99,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0003585299999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 5.170000000000001,
        "pct_num_trx_tot": 0.1438356164383561
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.0119047619047619
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 2.09,
        "pct_num_trx_tot": 0.2833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.408744,
        "pct_num_trx_tot": 0.032258064516129
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 72,
        "mnt_trx_mm": 0.9500115,
        "pct_num_trx_tot": 0.631578947368421
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.96,
        "pct_num_trx_tot": 0.0116731517509727
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.21862571,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.1240875912408759
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.128068,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 68,
        "mnt_trx_mm": 1.0960343400000003,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.617286,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.0350877192982456
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.75,
        "pct_num_trx_tot": 0.2758620689655172
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.74,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.51,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 16.68,
        "pct_num_trx_tot": 0.9565217391304348
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.5,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.23,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 0.17767135,
        "pct_num_trx_tot": 0.7916666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.1382000000000003,
        "pct_num_trx_tot": 0.1571428571428571
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.1438241199999999,
        "pct_num_trx_tot": 0.9666666666666668
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 25.22,
        "pct_num_trx_tot": 0.5217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.43,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0531914893617021
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.8214285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.3,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 7.5,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 0.21905796,
        "pct_num_trx_tot": 0.6956521739130435
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.47512,
        "pct_num_trx_tot": 0.208955223880597
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2629,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0262729999999999,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 4.5600000000000005,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 6.9009981,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.4117647058823529
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 10.68,
        "pct_num_trx_tot": 0.7303370786516854
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0092592592592592
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.4736842105263157
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0638297872340425
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.4000000000000004,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0138888888888888
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 9.808675,
        "pct_num_trx_tot": 0.1963470319634703
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.15625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0377358490566037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.14,
        "pct_num_trx_tot": 0.0545454545454545
      },
      {
        "num_trx": 112,
        "mnt_trx_mm": 17.4,
        "pct_num_trx_tot": 0.9572649572649572
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.4615384615384615
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 2.168362,
        "pct_num_trx_tot": 0.1699604743083003
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 9.0738591787,
        "pct_num_trx_tot": 0.0970744680851063
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.62,
        "pct_num_trx_tot": 0.0961538461538461
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.34,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01800005,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.55,
        "pct_num_trx_tot": 0.1282051282051282
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 1.413811,
        "pct_num_trx_tot": 0.1116504854368932
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.2,
        "pct_num_trx_tot": 0.119047619047619
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.6505281000000002,
        "pct_num_trx_tot": 0.85
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 2.12821,
        "pct_num_trx_tot": 0.0414110429447852
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 3.77,
        "pct_num_trx_tot": 0.198019801980198
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.3769263999999999,
        "pct_num_trx_tot": 0.6744186046511628
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.7943364700000001,
        "pct_num_trx_tot": 0.2134831460674157
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00022656,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 3.471349949,
        "pct_num_trx_tot": 0.0342298288508557
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08273094,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.8496900000000001,
        "pct_num_trx_tot": 0.1395348837209302
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.06,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.97514,
        "pct_num_trx_tot": 0.0551181102362204
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.878493,
        "pct_num_trx_tot": 0.0182648401826484
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.087899,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0136986301369863
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.6495813499999998,
        "pct_num_trx_tot": 0.6486486486486487
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.389624,
        "pct_num_trx_tot": 0.1808510638297872
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.9166666666666666
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.2776482099999999,
        "pct_num_trx_tot": 0.8636363636363636
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.363919516,
        "pct_num_trx_tot": 0.0852713178294573
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.0425531914893617
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05299808,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 1.867698,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.2105263157894736
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 4.64,
        "pct_num_trx_tot": 0.1629213483146067
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 1.0131821500000002,
        "pct_num_trx_tot": 0.4957264957264957
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 7.88,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.53040391,
        "pct_num_trx_tot": 0.2317880794701986
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 4.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 1.8,
        "pct_num_trx_tot": 0.2588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 70,
        "mnt_trx_mm": 15.74,
        "pct_num_trx_tot": 0.6086956521739131
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0507246376811594
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.6908999999999998,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.9,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.48910301,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.00285542,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.3786407766990291
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 74,
        "mnt_trx_mm": 0.7223623799999999,
        "pct_num_trx_tot": 0.8314606741573034
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.13124129,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0145,
        "pct_num_trx_tot": 0.0091743119266055
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.78,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 0.6717368800000006,
        "pct_num_trx_tot": 0.6607142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 71,
        "mnt_trx_mm": 7.800208578399999,
        "pct_num_trx_tot": 0.2553956834532374
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0074,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.5833333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0030016799999999,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 1.15617278,
        "pct_num_trx_tot": 0.975609756097561
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.23557747,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 64,
        "mnt_trx_mm": 0.74311041,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0483870967741935
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.472721,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.95,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.0825,
        "pct_num_trx_tot": 0.0153846153846153
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 3.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.548771,
        "pct_num_trx_tot": 0.0202898550724637
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.0612244897959183
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.5871,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 20.195,
        "pct_num_trx_tot": 0.2096774193548387
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.087719298245614
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 3.11,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 9.89,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.0081,
        "pct_num_trx_tot": 0.0253411306042884
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.33540586,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.30943178,
        "pct_num_trx_tot": 0.5555555555555556
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.66725209,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 7.87,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.086,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.63,
        "pct_num_trx_tot": 0.5306122448979592
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 1.91,
        "pct_num_trx_tot": 0.28125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03577979,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0348837209302325
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.63,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.1926911,
        "pct_num_trx_tot": 0.5294117647058824
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.95,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 0.3157894736842105
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 1.783139,
        "pct_num_trx_tot": 0.2087912087912088
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.23766653,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.0117647058823529
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.62345,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.96,
        "pct_num_trx_tot": 0.0681818181818181
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.29,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.8888888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.05625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.9799,
        "pct_num_trx_tot": 0.0746268656716417
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1212121212121212
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 16.8,
        "pct_num_trx_tot": 0.7368421052631579
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.02085,
        "pct_num_trx_tot": 0.2758620689655172
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.0992907801418439
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.85,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.8095238095238095
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.3043478260869565
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 0.6252281099999996,
        "pct_num_trx_tot": 0.9523809523809524
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.3214285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.84488234,
        "pct_num_trx_tot": 0.0839160839160839
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.02
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 18.1,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.321,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 2.942410260000001,
        "pct_num_trx_tot": 0.7457627118644068
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 173,
        "mnt_trx_mm": 3.62,
        "pct_num_trx_tot": 0.381057268722467
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 10.08,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 7.59,
        "pct_num_trx_tot": 0.9583333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.76,
        "pct_num_trx_tot": 0.0793650793650793
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.15579499,
        "pct_num_trx_tot": 0.5625
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 36.94,
        "pct_num_trx_tot": 0.3388429752066115
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 0.1948051948051948
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.0294117647058823
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.2117800099999999,
        "pct_num_trx_tot": 0.9655172413793104
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.1435000000000002,
        "pct_num_trx_tot": 0.1388888888888889
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 3.03952326,
        "pct_num_trx_tot": 0.4202898550724637
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.44,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 26.08,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 7.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0566037735849056
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 0.3703703703703703
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 18.72446,
        "pct_num_trx_tot": 0.1965811965811965
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.00427,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 1.1415976600000022,
        "pct_num_trx_tot": 0.4571428571428571
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 1.607,
        "pct_num_trx_tot": 0.3253012048192771
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.7200559999999996,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0101010101010101
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.56413361,
        "pct_num_trx_tot": 0.4054054054054054
      },
      {
        "num_trx": 183,
        "mnt_trx_mm": 2.66470981,
        "pct_num_trx_tot": 0.465648854961832
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.5161830100000002,
        "pct_num_trx_tot": 0.014792899408284
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.111645,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.064516129032258
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.4750318999999998,
        "pct_num_trx_tot": 0.6842105263157895
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 6.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.274802,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 15.83,
        "pct_num_trx_tot": 0.2469135802469135
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.16,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0136986301369863
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.0097087378640776
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.353,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1999,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.95,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.0095238095238095
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.45,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04014802,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6187954074,
        "pct_num_trx_tot": 0.0377358490566037
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0109890109890109
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.88154,
        "pct_num_trx_tot": 0.1833333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.204818,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.4052270784,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.92,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.12686248,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.47,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 1.3030020000000002,
        "pct_num_trx_tot": 0.3717948717948718
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 8.534840999999998,
        "pct_num_trx_tot": 0.2461538461538461
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.7659,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.0166666666666666
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 14.999667999999998,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0166666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.83449246,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 2.4,
        "pct_num_trx_tot": 0.2647058823529412
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 312.36367639,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.0806451612903225
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 0.13581414,
        "pct_num_trx_tot": 0.8260869565217391
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0212765957446808
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.33,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05619631,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0919540229885057
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.1855293199999999,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.0636704119850187
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0210526315789473
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1914893617021276
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.36135,
        "pct_num_trx_tot": 0.0178571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0151515151515151
      },
      {
        "num_trx": 75,
        "mnt_trx_mm": 0.1470049299999999,
        "pct_num_trx_tot": 0.8823529411764706
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.03734494,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 7.6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 2.31,
        "pct_num_trx_tot": 0.0542797494780793
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.37,
        "pct_num_trx_tot": 0.1951219512195122
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.0169491525423728
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 4.8,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.17820796,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.0207898699999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.43,
        "pct_num_trx_tot": 0.081081081081081
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.1493683999999999,
        "pct_num_trx_tot": 0.68
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 2.536741,
        "pct_num_trx_tot": 0.4428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.75,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.25,
        "pct_num_trx_tot": 0.1346153846153846
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 4.98,
        "pct_num_trx_tot": 0.6949152542372882
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.10059929,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 52,
        "mnt_trx_mm": 0.2771232,
        "pct_num_trx_tot": 0.6265060240963856
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.3474101599999999,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.4666666666666667
      },
      {
        "num_trx": 56,
        "mnt_trx_mm": 3.55571932,
        "pct_num_trx_tot": 0.1577464788732394
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 2.5991,
        "pct_num_trx_tot": 0.1555555555555555
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.24,
        "pct_num_trx_tot": 0.11
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.4166666666666667
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.1936,
        "pct_num_trx_tot": 0.06
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0170454545454545
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.386996,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 110,
        "mnt_trx_mm": 1748.72425642,
        "pct_num_trx_tot": 0.8088235294117647
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.8999999999999999,
        "pct_num_trx_tot": 0.0233160621761658
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.1441441441441441
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1132075471698113
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.67,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.037037037037037
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 10.3,
        "pct_num_trx_tot": 0.2597402597402597
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 3.786563,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.923409,
        "pct_num_trx_tot": 0.081967213114754
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.2,
        "pct_num_trx_tot": 0.0638297872340425
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.021706,
        "pct_num_trx_tot": 0.0232558139534883
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 3.2508,
        "pct_num_trx_tot": 0.2156862745098039
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 11.83,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 67,
        "mnt_trx_mm": 1.94,
        "pct_num_trx_tot": 0.7052631578947368
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 4.21,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 5.90153571,
        "pct_num_trx_tot": 0.0088888888888888
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.35310174,
        "pct_num_trx_tot": 0.6428571428571429
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 4.856979151400001,
        "pct_num_trx_tot": 0.0538461538461538
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.97752,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.355,
        "pct_num_trx_tot": 0.0176470588235294
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6378550000000001,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.0519115,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1292264,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 3.49,
        "pct_num_trx_tot": 0.9333333333333332
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.14586,
        "pct_num_trx_tot": 0.7692307692307693
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.127,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 3.08,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 78,
        "mnt_trx_mm": 72.89,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 0.1136363636363636
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.25008123,
        "pct_num_trx_tot": 0.5737704918032787
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.9375
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.03,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.0379746835443038
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 5.05312,
        "pct_num_trx_tot": 0.2160804020100502
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.2770146164,
        "pct_num_trx_tot": 0.0291970802919708
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0888888888888888
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.48,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.35022186,
        "pct_num_trx_tot": 0.0348101265822784
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.3090909090909091
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 0.42358248,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 5.048273999999999,
        "pct_num_trx_tot": 0.3466666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 13.5,
        "pct_num_trx_tot": 0.3421052631578947
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 1.16,
        "pct_num_trx_tot": 0.3695652173913043
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 0.49605952,
        "pct_num_trx_tot": 0.7457627118644068
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 116,
        "mnt_trx_mm": 224.65,
        "pct_num_trx_tot": 0.9666666666666668
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.10448446,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.4656,
        "pct_num_trx_tot": 0.0539682539682539
      },
      {
        "num_trx": 57,
        "mnt_trx_mm": 11.15,
        "pct_num_trx_tot": 0.9827586206896552
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 6,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 2,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 3.91,
        "pct_num_trx_tot": 0.896551724137931
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01726987,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 5.064700849900001,
        "pct_num_trx_tot": 0.0409090909090909
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 4.167178,
        "pct_num_trx_tot": 0.1491228070175438
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 6.67,
        "pct_num_trx_tot": 0.1717171717171717
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0309278350515463
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.415389,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 5.699999999999999,
        "pct_num_trx_tot": 0.2251655629139073
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.8,
        "pct_num_trx_tot": 0.0384615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 22.329424000000003,
        "pct_num_trx_tot": 0.0765306122448979
      },
      {
        "num_trx": 46,
        "mnt_trx_mm": 6.63,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.2149714,
        "pct_num_trx_tot": 0.5882352941176471
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.08,
        "pct_num_trx_tot": 0.7586206896551724
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 0.3134999199999999,
        "pct_num_trx_tot": 0.7818181818181819
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 5.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.2689900000000005,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 0.1956521739130435
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.41,
        "pct_num_trx_tot": 0.039647577092511
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0569999999999999,
        "pct_num_trx_tot": 0.0105820105820105
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.15478241,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0054347826086956
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.7764800000000001,
        "pct_num_trx_tot": 0.0923076923076923
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.006578947368421
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.1247,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 2.3219000000000003,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.88,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.07244165,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.1280002799999999,
        "pct_num_trx_tot": 0.3050847457627119
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.042606765,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.79,
        "pct_num_trx_tot": 0.0185185185185185
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.4860423899999999,
        "pct_num_trx_tot": 0.8947368421052632
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.1,
        "pct_num_trx_tot": 0.217391304347826
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27959,
        "pct_num_trx_tot": 0.0422535211267605
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.94,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.42164,
        "pct_num_trx_tot": 0.0275862068965517
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.5584169999999995,
        "pct_num_trx_tot": 0.1296296296296296
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.79,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.0654205607476635
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.3749583399999999,
        "pct_num_trx_tot": 0.3308823529411764
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1523465799999999,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 2.23,
        "pct_num_trx_tot": 0.4886363636363636
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.33438,
        "pct_num_trx_tot": 0.1692307692307692
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 10.5887892796,
        "pct_num_trx_tot": 0.0135467980295566
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.017314,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.014992,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2029,
        "pct_num_trx_tot": 0.0198019801980198
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1702,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.141865,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.274089,
        "pct_num_trx_tot": 0.5526315789473685
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 7.981807248100001,
        "pct_num_trx_tot": 0.0606896551724137
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.95,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.034812,
        "pct_num_trx_tot": 0.0189873417721519
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0125786163522012
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.269755,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.644,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.000001,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.11945898,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.4647919300000001,
        "pct_num_trx_tot": 0.8870967741935484
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.2247191011235955
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 3.3,
        "pct_num_trx_tot": 0.1944444444444444
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.19,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 41,
        "mnt_trx_mm": 0.97633499,
        "pct_num_trx_tot": 0.7884615384615384
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.448487,
        "pct_num_trx_tot": 0.0116279069767441
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.0545454545454545
      },
      {
        "num_trx": 193,
        "mnt_trx_mm": 6.29,
        "pct_num_trx_tot": 0.546742209631728
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.134184,
        "pct_num_trx_tot": 0.3823529411764705
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 7.46350923,
        "pct_num_trx_tot": 0.5348837209302325
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 184,
        "mnt_trx_mm": 2.97382295,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.1547619047619047
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.24,
        "pct_num_trx_tot": 0.2037037037037037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0041666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.1372549019607843
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.221746,
        "pct_num_trx_tot": 0.0205479452054794
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0126582278481012
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.12246934,
        "pct_num_trx_tot": 0.8076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.09176788,
        "pct_num_trx_tot": 0.8076923076923077
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.84,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.8908,
        "pct_num_trx_tot": 0.1948051948051948
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 5.473573999999999,
        "pct_num_trx_tot": 0.3
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.562672,
        "pct_num_trx_tot": 0.087378640776699
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.99,
        "pct_num_trx_tot": 0.0226244343891402
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.0111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06908768,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 48.93,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.23,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.0010757999999999,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 67,
        "mnt_trx_mm": 0.6499644800000013,
        "pct_num_trx_tot": 0.7052631578947368
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.28,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.1139240506329113
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.4460000000000002,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0350877192982456
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.51083572,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 0.0259740259740259
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0161290322580645
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.1138149199999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 3.23097703,
        "pct_num_trx_tot": 0.0461215932914046
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1649,
        "pct_num_trx_tot": 0.0512820512820512
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.13,
        "pct_num_trx_tot": 0.7333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.0659,
        "pct_num_trx_tot": 0.0150375939849624
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.0296296296296296
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.558,
        "pct_num_trx_tot": 0.0961538461538461
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.038,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 8.74,
        "pct_num_trx_tot": 0.1327433628318584
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00198239,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.5016628,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.1698113207547169
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 2.06808,
        "pct_num_trx_tot": 0.1278195488721804
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04665,
        "pct_num_trx_tot": 0.0059701492537313
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 2.7604647,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 2.3840599999999985,
        "pct_num_trx_tot": 0.3061224489795918
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.0500000000000003,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 51,
        "mnt_trx_mm": 0.982651699999999,
        "pct_num_trx_tot": 0.2350230414746544
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 2.15,
        "pct_num_trx_tot": 0.4423076923076923
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 0.5745508299999995,
        "pct_num_trx_tot": 0.9772727272727272
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.9600000000000004,
        "pct_num_trx_tot": 0.3793103448275862
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.55,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.7931034482758621
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 82.519385,
        "pct_num_trx_tot": 0.2065217391304347
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.51027081,
        "pct_num_trx_tot": 0.7878787878787878
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.316,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.7
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.0161290322580645
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 0.3225806451612903
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 3.21,
        "pct_num_trx_tot": 0.9772727272727272
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 5.159989,
        "pct_num_trx_tot": 0.1605839416058394
      },
      {
        "num_trx": 66,
        "mnt_trx_mm": 8.29,
        "pct_num_trx_tot": 0.584070796460177
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.11503815,
        "pct_num_trx_tot": 0.4137931034482758
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.6190476190476191
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.93,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.87,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 63,
        "mnt_trx_mm": 53.3593959818,
        "pct_num_trx_tot": 0.1036184210526315
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.034812,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 41.35,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.2654795399999996,
        "pct_num_trx_tot": 0.5789473684210527
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 14.679472,
        "pct_num_trx_tot": 0.0681818181818181
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 81,
        "mnt_trx_mm": 1.1077339799999997,
        "pct_num_trx_tot": 0.8181818181818182
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.09,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 7.2092096957,
        "pct_num_trx_tot": 0.1376811594202898
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1022,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0151515151515151
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0263157894736842
      },
      {
        "num_trx": 86,
        "mnt_trx_mm": 59.25,
        "pct_num_trx_tot": 0.9247311827956988
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.0098522167487684
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 33,
        "mnt_trx_mm": 13.4,
        "pct_num_trx_tot": 0.7857142857142857
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 10.906570728499998,
        "pct_num_trx_tot": 0.1126760563380281
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 48,
        "mnt_trx_mm": 1.5445008900000012,
        "pct_num_trx_tot": 0.5783132530120482
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02550002,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.16,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 6.9,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 5.57,
        "pct_num_trx_tot": 0.55
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.024390243902439
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.0959081599999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 42,
        "mnt_trx_mm": 3.347450045,
        "pct_num_trx_tot": 0.0756756756756756
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.39,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 14.47,
        "pct_num_trx_tot": 0.45
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0869565217391304
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 3.72,
        "pct_num_trx_tot": 0.84375
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.075
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.27,
        "pct_num_trx_tot": 0.2962962962962963
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.53,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 7.199999999999999,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.81,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 6.787609000000001,
        "pct_num_trx_tot": 0.5483870967741935
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.35,
        "pct_num_trx_tot": 0.2439024390243902
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.121104,
        "pct_num_trx_tot": 0.3076923076923077
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.170633,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.1071428571428571
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 4.56,
        "pct_num_trx_tot": 0.1933333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 15.378337,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.98,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1692,
        "pct_num_trx_tot": 0.0129870129870129
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 14.43410149,
        "pct_num_trx_tot": 0.0420560747663551
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.8846153846153846
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.0506999999999999,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 7.143948,
        "pct_num_trx_tot": 0.0857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 7.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.17,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.308,
        "pct_num_trx_tot": 0.0608695652173913
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 10.578589,
        "pct_num_trx_tot": 0.1401425178147268
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.05,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.6054097500000002,
        "pct_num_trx_tot": 0.6538461538461539
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.64,
        "pct_num_trx_tot": 0.1056910569105691
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 1.0229817900000002,
        "pct_num_trx_tot": 0.8428571428571429
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 3.4,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 0.2941176470588235
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.1636363636363636
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 1.59,
        "pct_num_trx_tot": 0.4782608695652174
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.4,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 102,
        "mnt_trx_mm": 1.1962188100000002,
        "pct_num_trx_tot": 0.4903846153846153
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 49,
        "mnt_trx_mm": 9.24618,
        "pct_num_trx_tot": 0.392
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.66,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.3888888888888889
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.00112457,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.4500000000000002,
        "pct_num_trx_tot": 0.1194029850746268
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4.76,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 1.83,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.83,
        "pct_num_trx_tot": 0.0705882352941176
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.57,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1524,
        "pct_num_trx_tot": 0.0034722222222222
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 1.58,
        "pct_num_trx_tot": 0.2384615384615384
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.327983,
        "pct_num_trx_tot": 0.0254237288135593
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 205,
        "mnt_trx_mm": 22.9616455799,
        "pct_num_trx_tot": 0.2924393723252496
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.05,
        "pct_num_trx_tot": 0.0737327188940092
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.5512603300000003,
        "pct_num_trx_tot": 0.918918918918919
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 13.16,
        "pct_num_trx_tot": 0.9714285714285714
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.1296296296296296
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.3414634146341463
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.4503,
        "pct_num_trx_tot": 0.2115384615384615
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.0956407899999999,
        "pct_num_trx_tot": 0.4814814814814814
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04557485,
        "pct_num_trx_tot": 0.08
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 89,
        "mnt_trx_mm": 955.9199812224,
        "pct_num_trx_tot": 0.4564102564102564
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 4.6481200000000005,
        "pct_num_trx_tot": 0.0252100840336134
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.6,
        "pct_num_trx_tot": 0.1578947368421052
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.27173801,
        "pct_num_trx_tot": 0.96
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 4.28,
        "pct_num_trx_tot": 0.2894736842105263
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0254777070063694
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.15357989,
        "pct_num_trx_tot": 0.8928571428571429
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.196,
        "pct_num_trx_tot": 0.0246913580246913
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.575
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.49,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 4.532464,
        "pct_num_trx_tot": 0.2777777777777778
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.15294872,
        "pct_num_trx_tot": 0.0517241379310344
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.0357142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 104,
        "mnt_trx_mm": 3.18824568,
        "pct_num_trx_tot": 0.9369369369369368
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1499,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.427205,
        "pct_num_trx_tot": 0.0338983050847457
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.0319148936170212
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0138888888888888
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.05,
        "pct_num_trx_tot": 0.2333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.15
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 0.3953392800000004,
        "pct_num_trx_tot": 0.2804232804232804
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.4074,
        "pct_num_trx_tot": 0.0324074074074074
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.0380999999999999,
        "pct_num_trx_tot": 0.2816901408450704
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.0075757575757575
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 3.7746132761,
        "pct_num_trx_tot": 0.1349206349206349
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.4113002138,
        "pct_num_trx_tot": 0.2151898734177215
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 4.193032,
        "pct_num_trx_tot": 0.1416666666666666
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.2873563218390804
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 5.51,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.33,
        "pct_num_trx_tot": 0.0784313725490196
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 16.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 2.22,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 8.493115,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.5192307692307693
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.05,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.2095,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.2965140000000002,
        "pct_num_trx_tot": 0.0144927536231884
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 1.77,
        "pct_num_trx_tot": 0.1296296296296296
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.7646000000000002,
        "pct_num_trx_tot": 0.2195121951219512
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 2.824814,
        "pct_num_trx_tot": 0.238095238095238
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 1.4872899999999998,
        "pct_num_trx_tot": 0.0792682926829268
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.1162790697674418
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.9,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 20.17,
        "pct_num_trx_tot": 0.0120724346076458
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.1000000000000005,
        "pct_num_trx_tot": 0.1515151515151515
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.8999999999999999,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 33.49,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1232999999999999,
        "pct_num_trx_tot": 0.0050761421319796
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.009009009009009
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.7906976744186046
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.7035,
        "pct_num_trx_tot": 0.0082644628099173
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.0689655172413793
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.5121951219512195
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.789862,
        "pct_num_trx_tot": 0.0175438596491228
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 1.81,
        "pct_num_trx_tot": 0.0979020979020979
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 4.58,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.0337078651685393
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 1.65,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0047846889952153
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.088235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1363636363636363
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.56,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.2272727272727272
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.5894669467,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.26,
        "pct_num_trx_tot": 0.1309523809523809
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 21.7832166593,
        "pct_num_trx_tot": 0.0778443113772455
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 3.68,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.3461538461538461
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.3571428571428571
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.1677077599999998,
        "pct_num_trx_tot": 0.5178571428571429
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0482584599999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.1481481481481481
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 1.2638,
        "pct_num_trx_tot": 0.1864406779661017
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 95,
        "mnt_trx_mm": 17.085069999999998,
        "pct_num_trx_tot": 0.4922279792746113
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.07,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 80,
        "mnt_trx_mm": 0.86214693,
        "pct_num_trx_tot": 0.7692307692307693
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 32.71,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.430928,
        "pct_num_trx_tot": 0.0863309352517985
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.49,
        "pct_num_trx_tot": 0.1698113207547169
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.7999999999999998,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.67,
        "pct_num_trx_tot": 0.0096153846153846
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 3.391466999999999,
        "pct_num_trx_tot": 0.1769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.0142857142857142
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.31,
        "pct_num_trx_tot": 0.4838709677419355
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.762471,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.11428558,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1899,
        "pct_num_trx_tot": 0.0238095238095238
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.5182662899999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0135135135135135
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 31.827,
        "pct_num_trx_tot": 0.1715976331360946
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 5.36731,
        "pct_num_trx_tot": 0.1153846153846153
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.54626619,
        "pct_num_trx_tot": 0.0655737704918032
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.3080319300000001,
        "pct_num_trx_tot": 0.8125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.3,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 2.11,
        "pct_num_trx_tot": 0.2413793103448276
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0074074074074074
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.3000000000000003,
        "pct_num_trx_tot": 0.1454545454545454
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.62,
        "pct_num_trx_tot": 0.0985915492957746
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.91406603,
        "pct_num_trx_tot": 0.28125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.000001400000000023283,
        "pct_num_trx_tot": 0.1875
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 0.96834133,
        "pct_num_trx_tot": 0.4090909090909091
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 1.3207806099999997,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.10988,
        "pct_num_trx_tot": 0.0094339622641509
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.7143529999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 3.83,
        "pct_num_trx_tot": 0.3414634146341463
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.01,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 0.0875
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.1336690399999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.27,
        "pct_num_trx_tot": 0.2058823529411764
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.18,
        "pct_num_trx_tot": 0.3225806451612903
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.42,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.3562175835,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 0.2727272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.1489,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.735,
        "pct_num_trx_tot": 0.0789473684210526
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 0.42044611,
        "pct_num_trx_tot": 0.4696969696969697
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.005813953488372
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0121951219512195
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.6,
        "pct_num_trx_tot": 0.0107913669064748
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.4026128001,
        "pct_num_trx_tot": 0.0320855614973262
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.5400032220000001,
        "pct_num_trx_tot": 0.0217391304347826
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 5.75,
        "pct_num_trx_tot": 0.3363636363636363
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 0.1851832,
        "pct_num_trx_tot": 0.8604651162790697
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 6,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 10.972492000000004,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 32,
        "mnt_trx_mm": 1.20900161,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 99,
        "mnt_trx_mm": 2.8398044343000004,
        "pct_num_trx_tot": 0.2605263157894736
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 1.0462986,
        "pct_num_trx_tot": 0.3257575757575757
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 34,
        "mnt_trx_mm": 3.54,
        "pct_num_trx_tot": 0.2207792207792207
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0169491525423728
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2399,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.075147,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0192307692307692
      },
      {
        "num_trx": 35,
        "mnt_trx_mm": 10.17,
        "pct_num_trx_tot": 0.945945945945946
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.3509995599999999,
        "pct_num_trx_tot": 0.5625
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.8704,
        "pct_num_trx_tot": 0.0375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0465116279069767
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.0141843971631205
      },
      {
        "num_trx": 70,
        "mnt_trx_mm": 3.721365,
        "pct_num_trx_tot": 0.4895104895104895
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 4.087945,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.32
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1099,
        "pct_num_trx_tot": 0.0100502512562814
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.42517245,
        "pct_num_trx_tot": 0.8275862068965517
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0092592592592592
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 0.36577932,
        "pct_num_trx_tot": 0.8227848101265823
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 7.22,
        "pct_num_trx_tot": 0.2352941176470588
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.04,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 119,
        "mnt_trx_mm": 0.32724876,
        "pct_num_trx_tot": 0.9083969465648856
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 2.02,
        "pct_num_trx_tot": 0.1186440677966101
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.73,
        "pct_num_trx_tot": 0.0980392156862745
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 3.77,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1176470588235294
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.24,
        "pct_num_trx_tot": 0.2459016393442623
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.1496080487,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.6052,
        "pct_num_trx_tot": 0.0412371134020618
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 71,
        "mnt_trx_mm": 3.61,
        "pct_num_trx_tot": 0.4765100671140939
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0377358490566037
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.57,
        "pct_num_trx_tot": 0.1625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 2.097409,
        "pct_num_trx_tot": 0.0766666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.33,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.6,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.0222222222222222
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 2.56,
        "pct_num_trx_tot": 0.2790697674418604
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.0555555555555555
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.17,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.3999,
        "pct_num_trx_tot": 0.0185185185185185
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.28,
        "pct_num_trx_tot": 0.28125
      },
      {
        "num_trx": 75,
        "mnt_trx_mm": 7.55,
        "pct_num_trx_tot": 0.6880733944954128
      },
      {
        "num_trx": 45,
        "mnt_trx_mm": 23.020100000000003,
        "pct_num_trx_tot": 0.2064220183486238
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 2.389317,
        "pct_num_trx_tot": 0.0701754385964912
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.01,
        "pct_num_trx_tot": 0.081967213114754
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.55940034,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.31,
        "pct_num_trx_tot": 0.0227272727272727
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 6.23257,
        "pct_num_trx_tot": 0.1515151515151515
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0076923076923076
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.2000000000000002,
        "pct_num_trx_tot": 0.1142857142857142
      },
      {
        "num_trx": 161,
        "mnt_trx_mm": 7202.468695631799,
        "pct_num_trx_tot": 0.320079522862823
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 14.16,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 5.407446,
        "pct_num_trx_tot": 0.2348484848484848
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.13973927,
        "pct_num_trx_tot": 0.4166666666666667
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 3.02,
        "pct_num_trx_tot": 0.5952380952380952
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.00034104,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.77,
        "pct_num_trx_tot": 0.4285714285714285
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1059796299999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 37,
        "mnt_trx_mm": 9.820861999999998,
        "pct_num_trx_tot": 0.2298136645962732
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.0103092783505154
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.0620987999999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 3.61,
        "pct_num_trx_tot": 0.3714285714285714
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.02,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 2.572136,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 3.91,
        "pct_num_trx_tot": 0.7777777777777778
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.98,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 27,
        "mnt_trx_mm": 0.1179239499999999,
        "pct_num_trx_tot": 0.7941176470588235
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.54,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 1.93,
        "pct_num_trx_tot": 0.40625
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.1304347826086956
      },
      {
        "num_trx": 53,
        "mnt_trx_mm": 0.9534848600000004,
        "pct_num_trx_tot": 0.4818181818181818
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 39,
        "mnt_trx_mm": 0.9200364400000002,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.7058823529411765
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0344827586206896
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.064516129032258
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.31631602,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 6.21,
        "pct_num_trx_tot": 0.3664596273291925
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.2091,
        "pct_num_trx_tot": 0.0615384615384615
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.009009009009009
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.08680051,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1699,
        "pct_num_trx_tot": 0.0120481927710843
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 5.02806,
        "pct_num_trx_tot": 0.0509090909090909
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.068359,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0117647058823529
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.9210354399999996,
        "pct_num_trx_tot": 0.6086956521739131
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 7.500000000000002,
        "pct_num_trx_tot": 0.2073170731707317
      },
      {
        "num_trx": 60,
        "mnt_trx_mm": 1.4664575300000002,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 1.36482175,
        "pct_num_trx_tot": 0.6823529411764706
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.7,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 2.46,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.4444444444444444
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.22,
        "pct_num_trx_tot": 0.6206896551724138
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 4.38,
        "pct_num_trx_tot": 0.2162162162162162
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.52
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.5,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.76,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.47,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.9,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.86,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.1200085156999999,
        "pct_num_trx_tot": 0.0806451612903225
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.109728,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.51,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.0377358490566037
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.0194805194805194
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 2.9,
        "pct_num_trx_tot": 0.0535714285714285
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.3489961000000001,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.0095238095238095
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 10.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 28,
        "mnt_trx_mm": 0.1103797599999998,
        "pct_num_trx_tot": 0.8235294117647058
      },
      {
        "num_trx": 43,
        "mnt_trx_mm": 1.74,
        "pct_num_trx_tot": 0.4673913043478261
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.45715,
        "pct_num_trx_tot": 0.0941176470588235
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.7128650000000001,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.9545454545454546
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 3.773373,
        "pct_num_trx_tot": 0.1368421052631579
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.00104784,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0508474576271186
      },
      {
        "num_trx": 245,
        "mnt_trx_mm": 12315.464030104691,
        "pct_num_trx_tot": 0.4969574036511156
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.7,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.88,
        "pct_num_trx_tot": 0.1764705882352941
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.86,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 0.6615662,
        "pct_num_trx_tot": 0.3728813559322034
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.302218,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.60852,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.35,
        "pct_num_trx_tot": 0.0206896551724137
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.931,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.46,
        "pct_num_trx_tot": 0.0943396226415094
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.4612074816,
        "pct_num_trx_tot": 0.0048154093097913
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.37,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 21,
        "mnt_trx_mm": 5.456465,
        "pct_num_trx_tot": 0.1721311475409836
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 3.99,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 1.0639737489,
        "pct_num_trx_tot": 0.0934579439252336
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2099,
        "pct_num_trx_tot": 0.0039840637450199
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.0185185185185185
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.01500989,
        "pct_num_trx_tot": 0.5625
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 4,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.0208333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.57891,
        "pct_num_trx_tot": 0.0141509433962264
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 5.357482620000001,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.09375
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 0.1292954199999998,
        "pct_num_trx_tot": 0.4081632653061224
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.14,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 91,
        "mnt_trx_mm": 0.6241887200000001,
        "pct_num_trx_tot": 0.8053097345132744
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.94,
        "pct_num_trx_tot": 0.1228070175438596
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.762349,
        "pct_num_trx_tot": 0.0833333333333333
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 0.3316217999999999,
        "pct_num_trx_tot": 0.6904761904761905
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0138888888888888
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.48,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 30,
        "mnt_trx_mm": 0.4214309399999998,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.75,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.0955,
        "pct_num_trx_tot": 0.0446428571428571
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04399,
        "pct_num_trx_tot": 0.04
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.3,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.9000215245,
        "pct_num_trx_tot": 0.0277777777777777
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 3.18,
        "pct_num_trx_tot": 0.4375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.04,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.594208,
        "pct_num_trx_tot": 0.0196078431372549
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.53,
        "pct_num_trx_tot": 0.5882352941176471
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.85,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.4,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1074380165289256
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 110,
        "mnt_trx_mm": 1.2614078199999996,
        "pct_num_trx_tot": 0.7857142857142857
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 1.962,
        "pct_num_trx_tot": 0.1855670103092783
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 4.260049,
        "pct_num_trx_tot": 0.55
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 3.33,
        "pct_num_trx_tot": 0.1269035532994923
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.736574,
        "pct_num_trx_tot": 0.1071428571428571
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.61474062,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.753255,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.99,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.72,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 0.1814395399999999,
        "pct_num_trx_tot": 0.926829268292683
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 8.108988946,
        "pct_num_trx_tot": 0.0248538011695906
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.9099999999999998,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.68,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.0181818181818181
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.36,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2755621,
        "pct_num_trx_tot": 0.0454545454545454
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.75,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 2.24,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0096153846153846
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.0434782608695652
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.43,
        "pct_num_trx_tot": 0.1290322580645161
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0158730158730158
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 69,
        "mnt_trx_mm": 2.90428645,
        "pct_num_trx_tot": 0.2379310344827586
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 0.2252347499999999,
        "pct_num_trx_tot": 0.8823529411764706
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.71,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 0.53484026,
        "pct_num_trx_tot": 0.5866666666666667
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1968,
        "pct_num_trx_tot": 0.0097087378640776
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.64,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01650004,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.98,
        "pct_num_trx_tot": 0.0483870967741935
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.4,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 0.1323529411764706
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 2.92,
        "pct_num_trx_tot": 0.875
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 3.89,
        "pct_num_trx_tot": 0.1123595505617977
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.9895898682,
        "pct_num_trx_tot": 0.0704225352112676
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.18,
        "pct_num_trx_tot": 0.2075471698113207
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.54549,
        "pct_num_trx_tot": 0.0363636363636363
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.78,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.17,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.14,
        "pct_num_trx_tot": 0.217391304347826
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.45,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 76,
        "mnt_trx_mm": 34.69,
        "pct_num_trx_tot": 0.9382716049382716
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.62,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.184165,
        "pct_num_trx_tot": 0.0704225352112676
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0206185567010309
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 33.16,
        "pct_num_trx_tot": 0.935483870967742
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.83,
        "pct_num_trx_tot": 0.6666666666666666
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 14,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.0822520199999999,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.1818181818181818
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 5.59,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.96,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 7.86,
        "pct_num_trx_tot": 0.9473684210526316
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 23,
        "mnt_trx_mm": 2.52,
        "pct_num_trx_tot": 0.0874524714828897
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.165,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 66,
        "mnt_trx_mm": 83.13846979,
        "pct_num_trx_tot": 0.7021276595744681
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.32595,
        "pct_num_trx_tot": 0.0845070422535211
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 3.65,
        "pct_num_trx_tot": 0.9375
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0467289719626168
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 4.259999999999999,
        "pct_num_trx_tot": 0.2222222222222222
      },
      {
        "num_trx": 26,
        "mnt_trx_mm": 0.18187103,
        "pct_num_trx_tot": 0.8666666666666667
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.1739130434782608
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2454,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.2666666666666666
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 3.53,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.21,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 17,
        "mnt_trx_mm": 0.41,
        "pct_num_trx_tot": 0.1868131868131868
      },
      {
        "num_trx": 47,
        "mnt_trx_mm": 219.4736737000001,
        "pct_num_trx_tot": 0.8392857142857143
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 2.373883999999999,
        "pct_num_trx_tot": 0.282051282051282
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 3.6,
        "pct_num_trx_tot": 0.1698113207547169
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 0.00001644000000000233,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.9
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.69,
        "pct_num_trx_tot": 0.0635838150289017
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0188679245283018
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.566537,
        "pct_num_trx_tot": 0.1034482758620689
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 3.33,
        "pct_num_trx_tot": 0.1578947368421052
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 1.2,
        "pct_num_trx_tot": 0.048780487804878
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.1666666666666666
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.010204081632653
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.0508474576271186
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.87,
        "pct_num_trx_tot": 0.0594059405940594
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.10733,
        "pct_num_trx_tot": 0.0223880597014925
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 0.29570796,
        "pct_num_trx_tot": 0.6545454545454545
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0488297,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 4.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.0967741935483871
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.32,
        "pct_num_trx_tot": 0.0588235294117647
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.57,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 5.14,
        "pct_num_trx_tot": 0.5714285714285714
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 2.173017,
        "pct_num_trx_tot": 0.2962962962962963
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.2939615,
        "pct_num_trx_tot": 0.0572519083969465
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 2.52,
        "pct_num_trx_tot": 0.1951219512195122
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 2.2,
        "pct_num_trx_tot": 0.0952380952380952
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.8,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.3846153846153846
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 18,
        "mnt_trx_mm": 9.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.55,
        "pct_num_trx_tot": 0.0853658536585365
      },
      {
        "num_trx": 20,
        "mnt_trx_mm": 686.8161519499993,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.19,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.8571428571428571
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.43,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.017094017094017
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.0425531914893617
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.2857142857142857
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.24,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 58,
        "mnt_trx_mm": 2.32,
        "pct_num_trx_tot": 0.6373626373626373
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.2083333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.38,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 0.0303030303030303
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.22,
        "pct_num_trx_tot": 0.0079365079365079
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.16,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.06,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 1.3,
        "pct_num_trx_tot": 0.0625
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 3.28,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 0.0140845070422535
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.2631578947368421
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.4371,
        "pct_num_trx_tot": 0.2121212121212121
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 1.1,
        "pct_num_trx_tot": 0.16
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.11,
        "pct_num_trx_tot": 0.05
      },
      {
        "num_trx": 24,
        "mnt_trx_mm": 0.90274506,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.0476190476190476
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.027027027027027
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.9090909090909092
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.65,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.0284,
        "pct_num_trx_tot": 0.1388888888888889
      },
      {
        "num_trx": 55,
        "mnt_trx_mm": 0.85101191,
        "pct_num_trx_tot": 0.7432432432432432
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1,
        "pct_num_trx_tot": 0.1111111111111111
      },
      {
        "num_trx": 31,
        "mnt_trx_mm": 1.62,
        "pct_num_trx_tot": 0.492063492063492
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.8200000000000001,
        "pct_num_trx_tot": 0.75
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.0031446540880503
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 2.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.9993,
        "pct_num_trx_tot": 0.0196078431372549
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.058,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0769230769230769
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.1063829787234042
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.13,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.6923076923076923
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.25,
        "pct_num_trx_tot": 0.0526315789473684
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 2.698463,
        "pct_num_trx_tot": 0.029585798816568
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 0.3636363636363636
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.33,
        "pct_num_trx_tot": 0.1538461538461538
      },
      {
        "num_trx": 13,
        "mnt_trx_mm": 2.75,
        "pct_num_trx_tot": 0.5652173913043478
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.0695,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 44,
        "mnt_trx_mm": 2.0827815899999997,
        "pct_num_trx_tot": 0.9166666666666666
      },
      {
        "num_trx": 90,
        "mnt_trx_mm": 98.1364471116,
        "pct_num_trx_tot": 0.1711026615969581
      },
      {
        "num_trx": 22,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.14,
        "pct_num_trx_tot": 0.8
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.58,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.36,
        "pct_num_trx_tot": 0.0909090909090909
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.74,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 0.1904761904761904
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.6
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.59,
        "pct_num_trx_tot": 0.0176991150442477
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.19,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1.5,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0198019801980198
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.2,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.34,
        "pct_num_trx_tot": 0.3333333333333333
      },
      {
        "num_trx": 36,
        "mnt_trx_mm": 6.6,
        "pct_num_trx_tot": 0.6545454545454545
      },
      {
        "num_trx": 59,
        "mnt_trx_mm": 11.54,
        "pct_num_trx_tot": 0.59
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.1212989999999999,
        "pct_num_trx_tot": 0.0333333333333333
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 0.0231024299999999,
        "pct_num_trx_tot": 0.631578947368421
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.45,
        "pct_num_trx_tot": 0.1333333333333333
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.44,
        "pct_num_trx_tot": 0.029126213592233
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.97,
        "pct_num_trx_tot": 0.1037735849056603
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0147058823529411
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.29,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0169491525423728
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 6.6370747217,
        "pct_num_trx_tot": 0.03125
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 0.54421884,
        "pct_num_trx_tot": 0.6875
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.39,
        "pct_num_trx_tot": 0.2307692307692307
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 1.52,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 0.8333333333333334
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 0.1
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.82,
        "pct_num_trx_tot": 0.0666666666666666
      },
      {
        "num_trx": 25,
        "mnt_trx_mm": 0.81,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 1,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.005181347150259
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0075187969924812
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.306884,
        "pct_num_trx_tot": 0.0256410256410256
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.92,
        "pct_num_trx_tot": 0.0416666666666666
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.28,
        "pct_num_trx_tot": 0.075
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 1.32,
        "pct_num_trx_tot": 0.1048951048951049
      },
      {
        "num_trx": 19,
        "mnt_trx_mm": 0.10880648,
        "pct_num_trx_tot": 0.95
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.1797455,
        "pct_num_trx_tot": 0.0070422535211267
      },
      {
        "num_trx": 15,
        "mnt_trx_mm": 4.82,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 113,
        "mnt_trx_mm": 6.88,
        "pct_num_trx_tot": 0.4538152610441767
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 1.12,
        "pct_num_trx_tot": 0.5333333333333333
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.69,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.63,
        "pct_num_trx_tot": 0.07
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 1.25,
        "pct_num_trx_tot": 0.4545454545454545
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.12,
        "pct_num_trx_tot": 0.7142857142857143
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 1.7500000000000002,
        "pct_num_trx_tot": 0.4736842105263157
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 0.03,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.1179811799999999,
        "pct_num_trx_tot": 0.0140845070422535
      },
      {
        "num_trx": 40,
        "mnt_trx_mm": 3.59,
        "pct_num_trx_tot": 0.1809954751131221
      },
      {
        "num_trx": 29,
        "mnt_trx_mm": 4.94695,
        "pct_num_trx_tot": 0.4461538461538462
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.07,
        "pct_num_trx_tot": 0.5
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.585345,
        "pct_num_trx_tot": 0.0408163265306122
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.053,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 16,
        "mnt_trx_mm": 1.14,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 2.25,
        "pct_num_trx_tot": 0.9285714285714286
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 73,
        "mnt_trx_mm": 0.6106006220999523,
        "pct_num_trx_tot": 0.2073863636363636
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 8,
        "mnt_trx_mm": 3.31,
        "pct_num_trx_tot": 0.7272727272727273
      },
      {
        "num_trx": 3,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.0714285714285714
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 2.362277,
        "pct_num_trx_tot": 0.1264367816091954
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.23,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 11,
        "mnt_trx_mm": 1.7294000035,
        "pct_num_trx_tot": 0.0304709141274238
      },
      {
        "num_trx": 4,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 0.4
      },
      {
        "num_trx": 38,
        "mnt_trx_mm": 9.7606238518,
        "pct_num_trx_tot": 0.1871921182266009
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.02,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 5,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.15,
        "pct_num_trx_tot": 0.0606060606060606
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 5.8,
        "pct_num_trx_tot": 0.0285714285714285
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 0.0131578947368421
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.89,
        "pct_num_trx_tot": 0.25
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.08,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.01,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 12,
        "mnt_trx_mm": 1.47,
        "pct_num_trx_tot": 0.1052631578947368
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.09,
        "pct_num_trx_tot": 0.125
      },
      {
        "num_trx": 10,
        "mnt_trx_mm": 0.26,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.27,
        "pct_num_trx_tot": 0.1428571428571428
      },
      {
        "num_trx": 2,
        "mnt_trx_mm": 0.04,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 1,
        "mnt_trx_mm": 0.17,
        "pct_num_trx_tot": 0.2
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.03,
        "pct_num_trx_tot": 0.2068965517241379
      },
      {
        "num_trx": 65,
        "mnt_trx_mm": 2.216812380000172,
        "pct_num_trx_tot": 0.2012383900928792
      },
      {
        "num_trx": 9,
        "mnt_trx_mm": 4.62,
        "pct_num_trx_tot": 1
      },
      {
        "num_trx": 6,
        "mnt_trx_mm": 1.08,
        "pct_num_trx_tot": 0.375
      },
      {
        "num_trx": 7,
        "mnt_trx_mm": 0.05,
        "pct_num_trx_tot": 1
      }
    ]
    // this._clienteService.GetDashboard()
    //   .then(result => {
        const points = result.map(x => ({
          x: x.num_trx,
          y: x.mnt_trx_mm,
          // r: x.pct_num_trx_tot
        }));

        this.scatterChart = new Chart(this.scatterCanvas.nativeElement, {
          type: 'bubble',
          data: {
            datasets: [
              {
                label: 'Transacciones vs Monto',
                data: points,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              },
            ]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Número de transacciones'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Monto en millones'
                },
                beginAtZero: true
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    const dataPoint: any = tooltipItem.raw;
                    return `Transacciones: ${dataPoint.x}, Monto: ${dataPoint.y}M, % Transacciones: ${dataPoint.r}%`;
                  }
                }
              }
            }
          }
        });
      // });
  }
}
