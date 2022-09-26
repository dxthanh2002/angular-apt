import {Component} from "@angular/core";
import { IFoodMenu, IMenu} from "../interface/food.interface";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'app-food',
  templateUrl:'food.component.html'
})

export class FoodComponent {
data: IMenu[] = [];

// tim cach lay du lieu api cho vao bien data
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    //ham tu dong chay khi lay giao dien ra
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IFoodMenu>(url).subscribe(data=>{
      this.data = data.data;
    });
  }


}
