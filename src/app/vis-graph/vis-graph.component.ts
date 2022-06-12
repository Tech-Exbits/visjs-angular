import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var vis : any;
@Component({
  selector: 'app-vis-graph',
  templateUrl: './vis-graph.component.html',
  styleUrls: ['./vis-graph.component.scss']
})
export class VisGraphComponent implements OnInit, AfterViewInit {

  @Input() nodes: any[] = [];
  @Input() edges: any[] = [];
  @Input() options: any = {};

  @ViewChild('network') el: ElementRef;
  private networkInstance: any;
  constructor() { }

  ngAfterViewInit(): void {
    var nodes = this.nodes;
    var edges = this.edges;
    var data:any = { nodes, edges } ;
    this.networkInstance = new vis.Network(this.el.nativeElement, data, this.options);
  }

  ngOnInit(): void {
  }

}
