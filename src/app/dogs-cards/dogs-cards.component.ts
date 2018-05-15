import {Component} from "@angular/core";
import {Dog} from "../../dog-model";
import {DOGS} from "../../dogs-mock";

@Component({
  selector: 'dogs-cards',
  templateUrl: './dogs-cards.component.html',
  styleUrls: ['./dogs-cards.component.css']
})
export class DogsCardsComponent {

  dogs: Dog[] = DOGS;
}
