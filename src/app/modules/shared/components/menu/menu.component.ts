import { Component, OnInit, Renderer2 } from "@angular/core";
@Component({
  selector: "app-side-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  toggleNav(value: boolean): void {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle((document as any).getElementById("sideMenu"), 'width', value ? '250px' : '100px');
  }

}
