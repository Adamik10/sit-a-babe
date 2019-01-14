import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInput'
})
export class FilterLocationPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length == 0 || value == undefined || value == null){
      //console.log('there was nothing to search for')
      return value  
    }else{
      //console.log('we are filtering')
      //console.log(value)
      const resultArray = [];
      //loop through all the items in my value (in this case an array)
      for(var i = 0; i < value.length; i++){
        const item = value[i]
        //console.log('prop name: '+propName+', value of the fileter is: '+filterString+', and this is the item: '+JSON.stringify(item))

        //differenciate between fields
        if(propName == 'location'){
          if (item[propName].toUpperCase().startsWith(filterString.toUpperCase())) {
            //console.log('we added: '+JSON.stringify(item))
            resultArray.push(item)
          }
        }else if (propName == 'occupation'){
          if (item[propName].toUpperCase().includes(filterString.toUpperCase())) {
            //console.log('we added: '+JSON.stringify(item))
            resultArray.push(item)
          }
        }
        
      }
      return resultArray;
    }
  }

}
