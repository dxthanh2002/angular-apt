import {Component} from "@angular/core";
import {Abse, B} from "../interface/ice.interface";
import {HttpClient} from "@angular/common/http";
import {IFoodMenu} from "../interface/food.interface";
@Component({
  selector:'app-ice',
  templateUrl:'ice.component.html'

})
export class IceComponent {
  data: Abse[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    //ham tu dong chay khi lay giao dien ra
    const url = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<B>(url).subscribe(data=>{
      this.data = data.data;
    });
  }
}

