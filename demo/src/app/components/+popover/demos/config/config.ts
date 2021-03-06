import { Component } from '@angular/core';
import { PopoverConfig } from 'ng2-bootstrap/popover';

// such override allows to keep some initial values

export function getPopoverConfig(): PopoverConfig {
  return Object.assign(new PopoverConfig(), {placement: 'right', container: 'body', triggers: 'focus'});
}

@Component({
  selector: 'demo-popover-config',
  templateUrl: './config.html',
  providers: [{provide: PopoverConfig, useFactory: getPopoverConfig}]
})
export class DemoPopoverConfigComponent {
}
