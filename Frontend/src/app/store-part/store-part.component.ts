import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { storeRouteAnimations } from './store-part-animation';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-store-part',
  templateUrl: './store-part.component.html',
  styleUrls: ['./store-part.component.scss'],
  animations: [storeRouteAnimations],
})
export class StoreComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.sharedService.snackBarShow.subscribe((msg) => this.showSnackBar(msg));
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, null, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration:5000
    });
  }
}
