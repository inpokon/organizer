import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MaterialInstance, MaterialService} from "../shared/classes/material.service";
import {OrderService} from "./order.service";
import {Order, OrderPosition} from "../shared/iterfaces";
import {OrdersService} from "../shared/sercvices/orders.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-order-page',
    templateUrl: './order-page.component.html',
    styleUrls: ['./order-page.component.scss'],
    providers: [OrderService]
})
export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('modal') modalRef: ElementRef;
    modal: MaterialInstance;
    oSub: Subscription;
    isRoot: boolean;
    pending: boolean = false;

    constructor(private router: Router,
                private order: OrderService,
                private ordersService: OrdersService) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isRoot = this.router.url === '/organizer/order';
            }
        })
    }

    ngOnDestroy(): void {
        this.modal.destroy();
        if (this.oSub) {
            this.oSub.unsubscribe();
        }
    }

    ngAfterViewInit(): void {
        this.modal = MaterialService.initModal(this.modalRef)
    }

    open() {
        this.modal.open();
    }

    cancel() {
         this.modal.close();
    }

    removePosition(orderPosition: OrderPosition) {
        this.order.remove(orderPosition);
    }

    submit() {
        this.pending = true;

        const order: Order = {
            list: this.order.list.map(item => {
                delete item._id;
                return item;
            }),
        };

        this.oSub =  this.ordersService.create(order).subscribe(
            newOrder => {
                MaterialService.toast(`Заказ №${newOrder.order} был добавлен.`);
                this.order.clear();
            },
            error => {
                MaterialService.toast(error.error.message);
            },
            () => {
                this.modal.close();
                this.pending = false;
            }
        );
    }

}
