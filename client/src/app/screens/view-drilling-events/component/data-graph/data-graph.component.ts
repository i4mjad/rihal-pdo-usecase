import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5xy from '@amcharts/amcharts5/xy';
@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss'],
})
export class DataGraphComponent implements OnInit {
  @Input() data!: any;
  constructor() {}

  ngOnInit(): void {}

  createGraph(): void {
    let root = am5.Root.new('chartdiv');
    console.log(root);
    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'zoomY',
        wheelY: 'panY',
        layout: root.verticalLayout,
      })
    );

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Data
    // let data = [
    //   {
    //     name: 'Events',
    //     eventName: 'Stuck Pipe',
    //     startDepth: 50,
    //     endDepth: 150,
    //     columnSettings: {
    //       fill: 'red',
    //       width: am5.percent(100),
    //     },
    //   },
    //   {
    //     name: 'Events',
    //     eventName: 'Mud Loos',
    //     startDepth: 100,
    //     endDepth: 200,
    //     columnSettings: {
    //       fill: 'gray',
    //       width: am5.percent(50),
    //     },
    //   },
    //   {
    //     name: 'Events',
    //     eventName: 'Circulation Loss',
    //     startDepth: 150,
    //     endDepth: 200,
    //     columnSettings: {
    //       fill: 'black',
    //       width: am5.percent(25),
    //     },
    //   },
    //   {
    //     name: 'Events',
    //     eventName: 'Stuck Pipe',
    //     startDepth: 400,
    //     endDepth: 450,
    //     columnSettings: {
    //       fill: 'red',
    //       width: am5.percent(100),
    //     },
    //   },
    // ];

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    let categoryNames = new Set();
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'name',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    // Iterate through data array to find unique category names
    this.data.forEach((item: any) => {
      categoryNames.add(item.name);
    });

    // Create category axis for each unique category name
    categoryNames.forEach((name: any) => {
      if (!xAxis.get('categoryField').includes(name)) {
        xAxis.data.push({ name: name });
      }
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Add series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Income',
        xAxis: xAxis,
        yAxis: yAxis,
        openValueYField: 'startDepth',
        valueYField: 'endDepth',
        categoryXField: 'name',
        sequencedInterpolation: true,
      })
    );

    series.columns.template.setAll({
      width: am5.percent(100),
      templateField: 'columnSettings',
      tooltipText: '[bold]{eventName}[/]\nDepth: {openValueY}m - {valueY}m',
    });

    series.data.setAll(this.data);

    // Make stuff animate on load
    series.appear();
    chart.appear(1000, 100);
  }
}
