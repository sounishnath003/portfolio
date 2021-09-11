import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ModalComponent} from "./modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalObserver$: Observable<any>;
  private modalSubject: Subject<any> = new Subject<any>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
    this.modalObserver$ = this.modalSubject.asObservable();
  }

  public create() {
    const componentRef: ComponentRef<ModalComponent> = this.componentFactoryResolver.resolveComponentFactory(ModalComponent).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const modal_element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    window.document.body.appendChild(modal_element);
  }

}
