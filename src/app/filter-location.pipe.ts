import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length == 0){
      return value  
    }else{
      //loop through all the items in my value (in this case an array)
      for(const item of value){
        const resultArray = [];
        if(item['propName'] == filterString){
          resultArray.push(item)
        }
        return resultArray;
      }
    }
  }

}
