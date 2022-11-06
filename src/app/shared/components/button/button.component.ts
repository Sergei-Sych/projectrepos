import { Component, Input} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  @Input() btnText?: string;
  @Input() iconName!: IconProp;

}
