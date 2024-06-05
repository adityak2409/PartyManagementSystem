import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { NonVeg } from 'src/app/Class';

@Component({
  selector: 'app-update-non-veg',
  templateUrl: './update-non-veg.component.html',
  styleUrls: ['./update-non-veg.component.scss']
})
export class UpdateNonVegComponent implements OnInit {
  NonVegList: any[] = [];
  NonVegId: any;
nonVeg:NonVeg;
  formData = { Bread: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private service: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.nonVeg=new NonVeg();
    this.route.params.subscribe((params) => {
      this.NonVegId = params['NonVegId'];
      console.log("this.NonVegId", this.NonVegId);
      this.service.GetNonVegById(this.NonVegId).subscribe((result) => {
        this.nonVeg = result;
        console.log("nonVeg", this.nonVeg);
      });
    });
  }

  OnSubmit(): void {
    console.log(this.nonVeg);
    this.service.UpdateNonVeg(this.nonVeg).subscribe((result) => {
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

