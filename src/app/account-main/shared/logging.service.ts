import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

    constructor() { }

    logStatusChange(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}