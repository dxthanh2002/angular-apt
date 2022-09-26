import {Component} from "@angular/core";
import {IStudent} from "../interface/student.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends Component {
  student: IStudent = {id: 1, name: 'Nam', age: 18, address: "so 8 Ton That Huyet"};


  arrayNumber: number[] = [1, 2, 3, 4, 5];


  stringArray: string[] = ["Nguyen Hoang Nam", "Nguyen Minh Khanh", "Nguyen Thuy Duong"];

  ls: IStudent[] = [
    {id: 1, name: "Nguyen Hoang Nam", age: 19, address: '8 ton that huyet'},
    {id: 2, name: "Nguyen Minh Khanh", age: 21, address: '8 ton that huyet'},
    {id: 3, name: "Nguyen Thuy Duong", age: 16, address: '8 ton that huyet'},

  ]

}
