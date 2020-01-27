import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) { }

  notify(message: string, action = 'Okay') {
    this.snackBar.open(message, action, {
      duration: 1000
    })
  }
}
