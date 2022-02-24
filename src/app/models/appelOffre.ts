export class AppelOffre{
    [x: string]: any;
   
    id:number;
    Name:string;
    StartDate:String;
    EndDate:String;
    Description:string;
    
    getId():number{
        return this.id;
    }
    setId(value:number){
        this.id=value;
    }
    getName():string{
        return this.Name;
    }
    setName(value:string){
        this.Name=value;
    }
    getStartDate():String{
        return this.StartDate;
    }
    setStartDate(value:String){
        this.StartDate=value;
    }
    getEndDate():String{
        return this.EndDate;
    }
    setEndDate(value:String){
        this.EndDate=value;
    }

}