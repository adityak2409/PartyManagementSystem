import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-non-veg-list',
  templateUrl: './non-veg-list.component.html',
  styleUrls: ['./non-veg-list.component.scss']
})
export class NonVegListComponent implements OnInit{
  NonVegList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: ApiServiceService) { 
    this.NonVegList=[]
  }


  Edit(NonVegId): void{
    try {
      this.router.navigateByUrl("/update-nonveg/"+NonVegId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(NonVegId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteNonVeg(NonVegId).subscribe(result => {
      if (result == "Success") {
      this.NonVegList = this.NonVegList.filter( 
        (item) => item.IndustryId != NonVegId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(NonVegId): void{
    try {
      this.router.navigateByUrl("/ViewNonVegList/" + NonVegId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllNonVeg().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.NonVegList.push(data);   
      }     
           console.log("NonVegList",this.NonVegList);
    });

  }
  
  exportToExcel() {
    const csvData = this.convertToCSV(this.NonVegList);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'non-veg-list.csv';
    a.click();
  }

  convertToCSV(objArray: any[]): string {
    const array = [Object.keys(objArray[0])].concat(objArray);

    return array.map(row => {
      return Object.values(row).toString();
    }).join('\n');
  }
}


