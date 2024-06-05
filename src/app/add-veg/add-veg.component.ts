import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Veg } from '../Class';

@Component({
  selector: 'app-add-veg',
  templateUrl: './add-veg.component.html',
  styleUrls: ['./add-veg.component.scss']
})
export class AddVegComponent implements OnInit {

  VegList: any[] = [];
  RotiList: any[] = [];
  RiceList: any[] = [];
  SweetList: any[] = [];
  maxVegSelection = 3; // Maximum allowed selections
  // filteredData: any[] = [];

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
    // this.filterData();
  }

  fetchData(): void {
    this.service.GetAllVeg().subscribe((result) => {
      this.VegList = result;
      this.RotiList = this.VegList.slice(0, 2).map(veg => veg.Roti);
      this.RiceList = this.VegList.slice(0, 2).map(veg => veg.Rice);
      this.SweetList = this.VegList.slice(0, 2).map(veg => veg.Sweet);
      console.log("VegList", this.VegList);
    });
  }

  toggleBreadSelection(): void {
    this.formData.Bread = this.formData.Bread ? '' : 'Bread';
  }

  onVegDishChange(selectedVeg: any): void {
    const selectedCount = this.VegList.filter(veg => veg.checked).length;
    if (selectedCount > this.maxVegSelection) {
      selectedVeg.checked = false;
      alert(`You can select a maximum of ${this.maxVegSelection} Veg Dishes.`);
    }
  }

  OnSubmit(): void {
    // Prepare formData object
    const formDataToSend = {
      VegDish: this.formData.VegDish,
      Bread: this.formData.Bread,
      Roti: this.getSelectedItems(this.RotiList),
      Rice: this.getSelectedItems(this.RiceList),
      Sweet: this.getSelectedItems(this.SweetList)
    };

    // Send formData to the backend
    this.service.AddAllVeg(formDataToSend).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      } else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  // Helper function to get selected items
  getSelectedItems(itemList: any[]): string {
    const selectedItems = itemList.filter(item => item.checked).map(item => item.value);
    return selectedItems.join(','); // Adjust this based on your backend requirements
  }

  // filterData(): void {
  //   this.filteredData = this.VegList.filter(item => item.Status === 1);
  // }
}
