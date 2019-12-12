import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-erp-info',
  templateUrl: './erp-info.component.html',
  styleUrls: ['./erp-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErpInfoComponent implements OnInit {

  currentTab = 'common';

  commonItems = [
    'auth.png', 'materials.png', 'materials-add-group.png', 'materials-add-material.png', 'patient-card-accounts.png',
    'patient-card-case-history.png', 'patient-card-case-history-edit.png', 'patient-card-manual.png',
    'patient-card-patient.png', 'patient-card-photo.png', 'patient-card-photo-add.png', 'patient-card-photo-list.png',
    'patient-card-treatment.png', 'patient-list.png', 'price.png', 'price-add-group.png', 'price-add-service.png',
    'waybill.png', 'waybill-edit.png', 'waybill-view.png', 'write-off.png', 'write-off-edit.png', 'write-off-view.png'
  ];

  doctorItems = [
    'appt-case-history-1.png', 'appt-case-history-2.png', 'appt-case-history-3.png', 'appt-case-history-4.png',
    'appt-checkup-1.png', 'appt-checkup-2.png', 'appt-choise-1.png', 'appt-choise-2.png', 'appt-detail.png',
    'appt-finish.png', 'appt-treat-1.png', 'appt-treat-2.png', 'appt-treatment-1.png', 'appt-treatment-2.png',
    'appt-treatment-3.png', 'appt-treatment-4.png', 'appt-treatment-5.png', 'home.png'
  ];

  adminItems = [
    'change-doctor.png', 'home.png', 'kanban.png', 'kanban-cancel.png', 'kanban-check.png', 'kanban-info.png',
    'kanban-preparation.png', 'new-visit.png', 'new-visit-is-patient.png'
  ];

  items;

  constructor() { }

  ngOnInit() {
    this.items = this[this.currentTab + 'Items'];
  }

  onClickTab = (nameTab) => {
    this.currentTab = nameTab;
    this.items = this[nameTab + 'Items'];
  }

}
