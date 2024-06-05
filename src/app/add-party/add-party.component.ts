import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss']
})
export class AddPartyComponent implements OnInit{

  constructor(private fb: FormBuilder, private router: Router) {
   
  }

  OnSelectVeg(){
    this.router.navigateByUrl("/add-veg")
  }

  OnSelectNonVeg(){
    this.router.navigateByUrl("/nonveg-order")
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}