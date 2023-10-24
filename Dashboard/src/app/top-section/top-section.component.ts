import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_more from 'highcharts/highcharts-more'; // Import the highcharts-more module
import HC_solidGauge from 'highcharts/modules/solid-gauge'; // Import the solid-gauge module

// Initialize the modules
HC_more(Highcharts);
HC_solidGauge(Highcharts);

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    HC_exporting(Highcharts);

    this.initializeGaugeChart();
    this.initializeColumnChart();
  }

  // ...
private initializeGaugeChart(): void {
  
  


}

// ...


  private initializeColumnChart(): void {
    Highcharts.chart('highchart-container', {
      chart: {
        type: 'column', // Use 'column' to display vertical bars
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Security Rating',
        },
      },
      series: [
        {
          name: 'Month',
          color: '#7a12c5',
          type: 'column',
          data: [
            { y: 10, color: '#7a12c5' },
            { y: 20, color: '#7a12c5' },
            { y: 30, color: '#7a12c5' },
            { y: 40, color: '#7a12c5' },
            { y: 50, color: '#7a12c5' },
            { y: 60, color: '#7a12c5' },
            { y: 70, color: '#7a12c5' },
            { y: 80, color: '#7a12c5' },
            { y: 10, color: '#7a12c5' },
            { y: 16, color: '#7a12c5' },
            { y: 30, color: '#7a12c5' },
          ],
        },
      ],
    });

    Highcharts.chart('gauge-chart-container', {
      chart: {
        type: 'solidgauge', // Use 'solidgauge' type for a semicircle gauge
    height: '50%',
      },
      title: {
        text: '',
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        background: [
          {
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
               
              ],
            },
            borderWidth: 0,
            outerRadius: '20%',
          },
          
        ],
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Value',
        },
        plotBands: [
          {
            from: 0,
            to: 180,
            color: '#7a12c5', // Green
          },
         
        ],
      },
      series: [
        {
          name: 'Value',
          type:'gauge',
          data: [80], // Initial data value
          tooltip: {
            valueSuffix: ' units',
          },
        },
      ],
      
    });
  }
}
