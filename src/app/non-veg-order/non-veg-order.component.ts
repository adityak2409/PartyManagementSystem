import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { NonVeg } from '../Class';

@Component({
  selector: 'app-non-veg-order',
  templateUrl: './non-veg-order.component.html',
  styleUrls: ['./non-veg-order.component.scss']
})
export class NonVegOrderComponent {
  NonVegList: any[] = [];
  
  ChickenList: any[] = [];
  FishList: any[] = [];
  ChineseList: any[] = [];


  formData = {
    NonVegDish: '',
    Roti: '',
    Chinese: '',
    Chicken: '',
    Fish: ''
  };

  constructor(private http: HttpClient, private service: ApiServiceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.GetAllNonVeg().subscribe((result) => {
      this.NonVegList = result;
      // Filter the first two records for Chinese, Rice, and Sweet
      this.ChickenList = this.NonVegList.slice(0, 2).map(nonveg => nonveg.Chicken);
      this.ChineseList = this.NonVegList.slice(0, 2).map(nonveg => nonveg.Chinese);
      this.FishList = this.NonVegList.slice(0, 2).map(nonveg => nonveg.Fish);
      console.log("NonVegList", this.NonVegList);
    });
  }

  OnSubmit(): void {
    this.service.AddNonVeg(this.formData).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      } else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  toggleBreadSelection(): void {
    this.formData.Roti = this.formData.Roti ? '' : 'Roti'; // Toggle the selection of bread
  }
}
