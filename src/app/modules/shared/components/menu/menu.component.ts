import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatDrawer, MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-drawer-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @ViewChild("snav", { static: true }) public snav?: MatSidenav;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    ) {
    (window as any)['t'] = this;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('window:HandleDrawer', ['$event'])
  drawerHandler({ detail }: CustomEvent): void {
    this.snav?.toggle(detail.value);
  }

   openNav() {
    (document as any).getElementById("mySidebar").style.width = "250px";
    // (document as any).getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    (document as any).getElementById("mySidebar").style.width = "15%";
    // (document as any).getElementById("main").style.marginLeft= "125px";
  }

}
