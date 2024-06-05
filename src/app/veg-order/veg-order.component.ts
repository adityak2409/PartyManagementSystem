
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Veg } from '../Class';

@Component({
  selector: 'app-veg-order',
  templateUrl: './veg-order.component.html',
  styleUrls: ['./veg-order.component.scss']
})
export class VegOrderComponent implements OnInit {
  VegList: any[] = [];
  RotiList: any[] = [];
  RiceList: any[] = [];
  SweetList: any[] = [];
  formData = {
    VegDish: '',
    Bread: '',
    Roti: '',
    Rice: '',
    Sweet: ''
  };

  constructor(private http: HttpClient, private service: ApiServiceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.GetAllVeg().subscribe((result) => {
      this.VegList = result;
      // Filter the first two records for Roti, Rice, and Sweet
      this.RotiList = this.VegList.slice(0, 2).map(veg => veg.Roti);
      this.RiceList = this.VegList.slice(0, 2).map(veg => veg.Rice);
      this.SweetList = this.VegList.slice(0, 2).map(veg => veg.Sweet);
      console.log("VegList", this.VegList);
    });
  }

  OnSubmit(): void {
    this.service.AddAllVeg(this.formData).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      } else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  toggleBreadSelection(): void {
    this.formData.Bread = this.formData.Bread ? '' : 'Bread'; // Toggle the selection of bread
  }
}