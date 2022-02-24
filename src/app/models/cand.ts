export class Cand{

    nom:string;
    phone:string;
    email:string;
    cv:File;
    getNom():string{
        return this.nom;
    }
    setNom(value:string){
        this.nom=value;
    }


    getPhone():string{
        return this.phone;

    }
    setPhones(value:string){
        this.phone=value;
    }
    getEmail():string{
        return this.email;

    }
    setEmail(value:string){
        this.email=value;
    }
    getCv():File{
       return this.cv 
    }
    setCv(value:File){
        this.cv=value;
    }
    


}