import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { Veg } from 'src/app/Class';

@Component({
  selector: 'app-update-veg',
  templateUrl: './update-veg.component.html',
  styleUrls: ['./update-veg.component.scss']
})
export class UpdateVegComponent implements OnInit {
  VegList: any[] = [];
  VegId: any;
veg:Veg;
  formData = { Bread: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private service: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.veg=new Veg();
    this.route.params.subscribe((params) => {
      this.VegId = params['VegId'];
      console.log("this.VegId", this.VegId);
      this.service.GetVegById(this.VegId).subscribe((result) => {
        this.veg = result;
        console.log("veg", this.veg);
      });
    });
  }

  OnSubmit(): void {
    console.log(this.veg);
    this.service.UpdateVeg(this.veg).subscribe((result) => {
      console.log("hhh", result);
      if (result == 0) {
        alert("Something went wrong! Please try again.");
      } else {
        alert('Saved Successfully.');
      }
    });
  }

  toggleBreadSelection(): void {
    this.formData.Bread = this.formData.Bread ? '' : 'Bread';
  }
}
