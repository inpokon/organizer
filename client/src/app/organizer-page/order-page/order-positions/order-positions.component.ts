import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionsService} from "../../shared/sercvices/positions.service";
import {Observable} from "rxjs";
import {Position} from "../../shared/iterfaces";
import {map, switchMap} from "rxjs/operators";
import {OrderService} from "../order.service";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
    selector: 'app-order-positions',
    templateUrl: './order-positions.component.html',
    styleUrls: ['./order-positions.component.scss']
})
export class OrderPositionsComponent implements OnInit {

    positions$: Observable<Position[]>;

    constructor(private router: ActivatedRoute,
                private positionsService: PositionsService,
                private order: OrderService) {
    }

    ngOnInit() {
        this.positions$ = this.router.params.pipe(
            switchMap(
                (params: Params) => {
                    return this.positionsService.fetch(params['id']);
                }
            ),
            map(
                (position: Position[]) => {
                    return position.map( position => {
                        position.quantity = 1;
                        return position
                    })
                }
            )
        )
    }

    addToOrder(position: Position) {
        MaterialService.toast(`Добавлено х${position.quantity}`);
        this.order.add(position);
    }

}
