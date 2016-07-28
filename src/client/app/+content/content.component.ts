import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  viewProviders: [NameListService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
export class ContentComponent {

  constructor() {}
}
