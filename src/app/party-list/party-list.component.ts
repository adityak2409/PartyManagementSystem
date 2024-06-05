import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent {

  constructor(private router: Router,  private http: HttpClient, private service: ApiServiceService) { 
  //   PartyList: Party[] = [];

  // }


  // Edit(id): void{
  //   try {
  //     this.router.navigateByUrl("/update-Party/"+id);
  //   } catch (error) {
  //     alert("certi-" + error);
  //   } 
  // }

  // Delete(id) {
  //   alert('Are you sure you want to delete?');
  //   this.service.DeleteParty(id).subscribe(result => {
  //     if (result == "Success") {
  //     this.PartyList = this.PartyList.filter( 
  //       (item) => item.id != id);
  //     alert("Deleted Successfully");
  //   } else {
  //     alert("Somthing went wrong! please try again.");
  //   }
  // });
  // }
  // View(id): void{
  //   try {
  //     this.router.navigateByUrl("/ViewPartyList/" + id,{skipLocationChange:true});
  //   } catch (error) {
  //     alert("certi-" + error);
  //   } 
  // }

  
  // ngOnInit(): void {
  //   this.service.GetAllParty().subscribe((result) => {
  //     // console.log(result);
  //     for(let data of result){
  //         this.PartyList.push(data);   
  //     }     
  //          console.log("PartyList",this.PartyList);
  //   });

   }
}