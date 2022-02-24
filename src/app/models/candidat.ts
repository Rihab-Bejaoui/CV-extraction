export class Candidat{
    [x: string]: any;
    id:number;
    NameCondidat:string;
    Phones:string[];
    Emails:string[];
    Degrees:string;
    Skills:string[];
    Interests:string[];
    Universities:string[];
    getId():number{
        return this.id
    }
    setId(value:number){
        this.id=value;
    }
    getNames():string{
        return this.NameCondidat;
    }
    setNames(value:string){
        this.NameCondidat=value;
    }
    getPhones():string[]{
        return this.Phones;

    }
    setPhones(value:string[]){
        this.Phones=value;
    }
    getEmails():string[]{
        return this.Emails;

    }
    setEmails(value:string[]){
        this.Emails=value;
    }
    getDegrees():string{
        return this.Degrees;

    }
    setDegrees(value:string){
        this.Degrees=value;
    }
    getSkills():string[]{
        return this.Skills;

    }
    setSkills(value:string[]){
        this.Skills=value;
    }
    getInterests():string[]{
        return this.Skills;

    }
    setInterests(value:string[]){
        this.Interests=value;
    }
    getUniversities():string[]{
        return this.Universities;

    }
    setUniversities(value:string[]){
        this.Universities=value;
    }



}