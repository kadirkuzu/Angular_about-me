import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit {
  @ViewChild('closeSideBarCanvas') closeSideBarCanvas!: ElementRef<HTMLElement>;
  @ViewChild('sideBarCanvas') sideBarCanvas!: ElementRef;
  @Output() closeEvent = new EventEmitter<any>();
  
  closeOffCanvas() {
    let el: HTMLElement = this.closeSideBarCanvas.nativeElement;
    el.click();
  }

  ngAfterViewInit(): void {
    this.sideBarCanvas.nativeElement.addEventListener('hidden.bs.offcanvas', (event: any) => { 
      this.closeEvent.emit(true)
    })
  }

  isLoggedIn() {
    return (localStorage.getItem('kkwebsitelogin') !== null)
  }

  logout(){
    localStorage.removeItem('kkwebsitelogin')
  }
  
}
