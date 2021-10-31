import { BehaviorSubject } from "rxjs";

export class ActiveUserSerivce {

    public clickCount : number = 0;

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    public getActiveUsers(){
        return this.activeUsers;
    }

    public getInactiveUsers(){
        return this.inactiveUsers;
    }

    SetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.incrementCount();
      }
    
      SetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.incrementCount();
      }

      incrementCount(){
          this.clickCount = this.clickCount + 1;
          console.log(this.clickCount);
       }
}