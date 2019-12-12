import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {erpMenu} from "../../shared/iterfaces";

@Component({
  selector: 'app-erp-info',
  templateUrl: './erp-info.component.html',
  styleUrls: ['./erp-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErpInfoComponent implements OnInit {

  currentTab = 'common';

  commonItems: erpMenu[] = [
    {
      name: 'Авторизация',
      activeClass: false,
      img: 'assets/images/erp/auth.png',
      prompt: 'Авторизация сотрудников стоматологической клиники'
    },
    {
      name: 'Картотека',
      activeClass: false,
      img: 'assets/images/erp/patient-list.png',
      prompt: 'В данном окне можно найти пациента по номеру карты, ФИО или по номеру телефону'
    },
    {
      name: 'Карточка пациента',
      activeClass: false,
      img: 'assets/images/erp/patient-card-patient.png',
      prompt: 'В данном разделе врач или администратор может перемещаться по разделам карточки пациента или записать его на прием. Во вкладке "Пациент" можно отредактировать необходимые поля и пополнить его лицевой счет.',
    },
    {
      name: 'План лечения',
      activeClass: false,
      img: 'assets/images/erp/patient-card-treatment.png',
      prompt: 'В данной вкладке можно ознакомиться с планами лечения пациента'
    },
    {
      name: 'История болезни',
      activeClass: false,
      img: 'assets/images/erp/patient-card-case-history.png',
      prompt: 'В данном разделе можно ознакомиться со всей историей болезни пациента'
    },
    {
      name: 'Просмотр истории болезни',
      activeClass: false,
      img: 'assets/images/erp/patient-card-case-history-edit.png',
      prompt: 'В данном окне можно посмотреть или отредактировать историю болезни'
    },
    {
      name: 'Фотографии',
      activeClass: false,
      img: 'assets/images/erp/patient-card-photo.png',
      prompt: 'Если фотографий не существует, то вы можете добавить их здесь, прикрепив нужный файл.'
    },
    {
      name: 'Добавление фотографии',
      activeClass: false,
      img: 'assets/images/erp/patient-card-photo-add.png',
      prompt: 'После загрузки фотографии необходимо ввести название, по желанию можно указать тип, дату, комментарий и выбрать зуб(если данный тип фотографии "Рентген")'
    },
    {
      name: 'Список фотографий',
      activeClass: false,
      img: 'assets/images/erp/patient-card-photo-list.png',
      prompt: 'Если была добавлена хотя бы одна фотография, то вкладка фотографии становится списком, который можно отфильтровать по зубу или типу. Так же можно добавить новые фотографии.'
    },
    {
      name: 'Приемы',
      activeClass: false,
      img: 'assets/images/erp/patient-card-manual.png',
      prompt: 'В данной вкладке можно посмотреть все приемы, на которых был пациент.'
    },
    {
      name: 'Счета',
      activeClass: false,
      img: 'assets/images/erp/patient-card-accounts.png',
      prompt: 'В данном окне можно посмотреть всю историю счетов пациента.'
    },
    {
      name: 'Прейскурант',
      activeClass: false,
      img: 'assets/images/erp/price.png',
      prompt: 'В данном окне можно посмотреть стоимость услуг стоматологической клиники',
    },
    {
      name: 'Группы',
      activeClass: false,
      img: 'assets/images/erp/price-add-group.png',
      prompt: 'По необходимости можно добавить, отредактировать или удалить группу'
    },
    {
      name: 'Услуги',
      activeClass: false,
      img: 'assets/images/erp/price-add-service.png',
      prompt: 'По необходимости можно добавить, отредактировать или удалить услугу'
    },
    {
      name: 'Материалы',
      activeClass: false,
      img: 'assets/images/erp/materials.png',
      prompt: 'В данном окне можно посмотреть материалы стоматологической клиники',
    },
    {
      name: 'Группы',
      activeClass: false,
      img: 'assets/images/erp/materials-add-group.png',
      prompt: 'По необходимости можно добавить, отредактировать или удалить группу'
    },
    {
      name: 'Материала',
      activeClass: false,
      img: 'assets/images/erp/materials-add-material.png',
      prompt: 'По необходимости можно добавить, отредактировать или удалить материал'
    },
    {
      name: 'Накладные',
      activeClass: false,
      img: 'assets/images/erp/waybill.png',
      prompt: 'В данном окне можно посмотреть накладные стоматологической клиники',
    },
    {
      name: 'Накладная',
      activeClass: false,
      img: 'assets/images/erp/waybill-edit.png',
      prompt: 'Это окно вызывается при добавление или редактировании накладной. Есть возможность выбрать поставщика материала, сделать поиск по материалам и добавление, редактирование и удаление материала из накладной'
    },
    {
      name: 'Просмотр накладной',
      activeClass: false,
      img: 'assets/images/erp/waybill-view.png',
      prompt: 'В данном окне можно посмотреть накладную стоматологической клиники'
    },
    {
      name: 'Списания',
      activeClass: false,
      img: 'assets/images/erp/write-off.png',
      prompt: 'В данном окне можно посмотреть списания стоматологической клиники',
    },
    {
      name: 'Списание',
      activeClass: false,
      img: 'assets/images/erp/write-off-edit.png',
      prompt: 'Это окно вызывается при добавление или редактировании накладной. Есть возможность сделать поиск по материалам и добавление, редактирование и удаление материала из списания'
    },
    {
      name: 'Просмотр списания',
      activeClass: false,
      img: 'assets/images/erp/write-off-view.png',
      prompt: 'В данном окне можно посмотреть списание стоматологической клиники'
    }
  ];

  doctorItems: erpMenu[] = [
    {
      name: 'Расписание',
      activeClass: false,
      img: 'assets/images/erp/doctor/home.png',
      prompt: 'Основное рабочее окно доктора. Доктор может посмотреть загруженность на день, открыть карту пациента, найти пациента по ФИО или номеру телефона, разделить интервал времени между пациентами и начать прием пациента'
    },
    {
      name: 'Прием пациента',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-checkup-1.png',
      prompt: 'В данном окне врач начинает прием пациента двигаясь по шагам. Начиная с первичного осмотра. Для удобства врачу выведана таблица зубов в зависимости от челюсти пациента(взрослый или ребенок) таблица меняется. Так же выведены шаблоны из которых врач может выбрать для соответствующего поля',
    },
    {
      name: 'Первичный осмотр',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-checkup-2.png',
      prompt: 'После осмотра пациента, врач распечатывает документ на подпись пациенту',
    },
    {
      name: 'План лечения - 1',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treatment-1.png',
      prompt: 'В данном окне врач составляет план рекомендуемый и выполняемый план лечения',
    },
    {
      name: 'План лечения - 2',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treatment-2.png',
      prompt: 'Врач может выбрать зуб и включить услугу из списка в рекомендуемый план лечения',
    },
    {
      name: 'План лечения - 3',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treatment-3.png',
      prompt: 'После составление рекомендуемого плана лечения врач озвучивает цену на прием и переходит к выполняемуму плану лечения',
    },
    {
      name: 'План лечения - 4',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treatment-4.png',
      prompt: 'Когда врач перешел на пункт выполняемого плана, пациент может выбрать что ему лечить исходя из рекомендуемого плана',
    },
    {
      name: 'Решение пациента - 1',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-choise-1.png',
      prompt: 'Решение пациента на лечение в данный момент или он может записаться на любое удобное время выбрав врача',
    },
    {
      name: 'Решение пациента - 2',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-choise-2.png',
      prompt: 'Пациент так же вправе отказаться от лечение. По желанию может указать причину',
    },
    {
      name: 'Лечение - 1',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treat-1.png',
      prompt: 'В данной вкладке исходя из выполняемого плана лечение врач может распределить статусы выполненых работ по завершению лечения. Статусы сохраняют свое состояние при следующий посещений пациента',
    },
    {
      name: 'Лечение - 2',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-treat-2.png',
      prompt: 'Так же врач может включить в списание дополнительные расходные материалы которые он использовал сверх нормы услуги',
    },
    {
      name: 'Наряд',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-detail.png',
      prompt: 'Врач может озвучить пациенту сколько необходимо будет заплатить за выполненую работу на данный момент. Сумма может различаться с суммой выполняемого плана из за того что не все услуги были выполнены в данном этапе лечения',
    },
    {
      name: 'История болезни - 1',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-case-history-1.png',
      prompt: 'В данном окне врач заполняет историю болезни по всем зубам которые он лечил. Так же для удобства выведены шаблоны для заполнения полей',
    },
    {
      name: 'История болезни - 2',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-case-history-2.png',
      prompt: 'Врач должен заполнить все необходимые поля всех зубов прежде чем распечатоть документ и отдать на подпись пациенту',
    },
    {
      name: 'История болезни - 3',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-case-history-3.png',
      prompt: 'Для удобства можно копировать историю болезни зуба в другой зуб',
    },
    {
      name: 'Гарантии',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-case-history-4.png',
      prompt: 'Врач вправе давать или не давать гарантии пациенту.',
    },
    {
      name: 'Завершение',
      activeClass: false,
      img: 'assets/images/erp/doctor/appt-finish.png',
      prompt: 'Завершение приема пациента',
    },
  ];

  adminItems: erpMenu[] = [
    {
      name: 'Расписание',
      activeClass: false,
      img: 'assets/images/erp/admin/home.png',
      prompt: 'Основное рабочее окно администратора. В данном окне администратор может посмотреть расписание врачей, записать пациента на прием, найти пациента по ФИО или номеру телефона',
    },
    {
      name: 'Расписание-2',
      activeClass: false,
      img: 'assets/images/erp/admin/change-doctor.png',
      prompt: 'Так же администратор может изменить расписание работы врача, разделить интервал времени между пациентами, и отследить загруженность кресел',
    },
    {
      name: 'Канбан',
      activeClass: false,
      img: 'assets/images/erp/admin/kanban.png',
      prompt: 'В данном окне администратор видит, кто ожидает оформление документов, кто ожидает приема врача, кто сейчас на приеме, кого нужно рассчитать или взять отзыв у пациента и завершить прием',
    },
    {
      name: 'Подготовка к приему',
      activeClass: false,
      img: 'assets/images/erp/admin/kanban-preparation.png',
      prompt: 'Администратор должен взять на подпись все документы ИДС, для этого ему необходимо заполнить все обязательные поля. Если пациент младше 18 лет, то в таком случае необходим представитель',
    },
    {
      name: 'Чек-лист',
      activeClass: false,
      img: 'assets/images/erp/admin/kanban-check.png',
      prompt: 'Когда пациент закончил прием, он вправе оставить отзыв, заполнить анкету и получить подарочный сертификат',
    },
    {
      name: 'Отмена приема',
      activeClass: false,
      img: 'assets/images/erp/admin/kanban-cancel.png',
      prompt: 'Если что-то пошло не по плану, то пациент может отменить свой прием и записаться на любое другое удобное ему время, выбрав лечащего врача, или отказаться от приема, указав причину.',
    },
    {
      name: 'Уведомления',
      activeClass: false,
      img: 'assets/images/erp/admin/kanban-info.png',
      prompt: 'Для более удобной работы администратор может просматривать уведомления о текущих изменениях в канбане.',
    },
    {
      name: 'Новый визит',
      activeClass: false,
      img: 'assets/images/erp/admin/new-visit.png',
      prompt: 'Пациент может записаться на прием в клинику либо посетив ее лично, либо через мобильное приложение. Если пациент записывается впервые, то ему необходимо указать ФИО и номер телефона. Остальные поля заполняются по желанию.',
    },
    {
      name: 'Существующий пациент',
      activeClass: false,
      img: 'assets/images/erp/admin/new-visit-is-patient.png',
      prompt: 'Если пациент посещает клинику повторно, то его можно найти в базе (по фио, по номеру телефона). В таком случае все необходимые поля заполнятся автоматически, но по прежнему будет доступно ручное редактирование.',
    },
  ];

  items;

  openModal: boolean = false;

  currentIndex: number = 0;

  currentItem: erpMenu;

  constructor() { }

  ngOnInit() {
    this.items = this[this.currentTab + 'Items'];
  }

  onClickTab = (nameTab) => {
    this.currentTab = nameTab;
    this.items = this[nameTab + 'Items'];
    this.currentIndex = 0;
  };

  onClickImg = (item, index) => {
    this.currentIndex = index;
    this.currentItem = item;
    this.openModal = true;
  };

  onCloseModal = () => this.openModal = false;

  onClickArrow = (way) => {
    if (way) {
      this.currentIndex += 1;
    } else {
      this.currentIndex -= 1;
    }
    this.currentItem = this[this.currentTab + 'Items'][this.currentIndex]
  };


}
