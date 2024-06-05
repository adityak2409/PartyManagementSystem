import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-veg-list',
  templateUrl: './veg-list.component.html',
  styleUrls: ['./veg-list.component.scss']
})
export class VegListComponent implements OnInit {
  VegList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: ApiServiceService) { 
    this.VegList=[]
  }


  Edit(VegId): void{
    try {
      this.router.navigateByUrl("/update-veg/"+VegId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(VegId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteVeg(VegId).subscribe(result => {
      if (result == "Success") {
      this.VegList = this.VegList.filter( 
        (item) => item.IndustryId != VegId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(VegId): void{
    try {
      this.router.navigateByUrl("/ViewVegList/" + VegId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllVeg().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.VegList.push(data);   
      }     
           console.log("VegList",this.VegList);
    });

  }
  exportToExcel() {
    const csvData = this.convertToCSV(this.VegList);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'veg-list.csv';
    a.click();
  }

  convertToCSV(objArray: any[]): string {
    const array = [Object.keys(objArray[0])].concat(objArray);

    return array.map(row => {
      return Object.values(row).toString();
    }).join('\n');
  }
}
  


