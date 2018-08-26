import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Time } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('tabChangedTrigger1', [
      transition('* => slideIn', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => slideOut', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ])
    ]),
    trigger('tabChangedTrigger2', [
      transition('* => slideIn', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => slideOut', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ])
    ]),
    trigger('tabChangedTrigger3', [
      transition('* => slideIn', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => slideOut', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ])
    ])
  ]
})

export class AdminComponent implements OnInit {

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  monthsInitialCap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  events: any[];
  pickerStartDate: Date;
  pickerEndDate: Date;
  selectedTab = new FormControl(0);

  constructor(public availabilityDialog: MatDialog) { }

  bindingVar = '';
  slideIn() {
    this.bindingVar = 'slideIn';
  }
  slideOut() {
    this.bindingVar = 'slideOut';
  }
  toggle() {
    this.bindingVar == 'slideOut' ? this.slideIn() : this.slideOut();
  }

  endDate(): Date {
    return this.addDays(this.events[this.selectedTab.value].startDate, 27);
  }

  backOneMonth(): void {
    this.events[this.selectedTab.value].startDate = this.addDays(this.events[this.selectedTab.value].startDate, -28);
    this.events[this.selectedTab.value].calendar = this.createCalendar(this.events[this.selectedTab.value]);
  }

  forwardOneMonth(): void {
    this.events[this.selectedTab.value].startDate = this.addDays(this.events[this.selectedTab.value].startDate, 28);
    this.events[this.selectedTab.value].calendar = this.createCalendar(this.events[this.selectedTab.value]);
  }

  calendarDateChange(event): void {
    this.events[this.selectedTab.value].startDate = this.getSunday(event.value);
    this.events[this.selectedTab.value].calendar = this.createCalendar(this.events[this.selectedTab.value]);
  }

  pickerStartFilter = (d: Date): boolean => {
    return d.valueOf() > Date.now();
  }
  pickerEndFilter = (d: Date): boolean => {
    return d.valueOf() > this.pickerStartDate.valueOf();
  }

  tabChanged(event): void {
    this.selectedTab.setValue(event);
    this.toggle();
  }

  ngOnInit() {
    this.events = JSON.parse(localStorage.getItem('events'));
    if (this.events === null) {
      var str = '[{"location":"South Jordan","chair":"Op 2","address":"10615 S. 4000 W., South Jordan, UT 84095","phone":"(801)-555-1212","instructions":"Optional place to add instructions for the person signing up.","duration":60,"dateRange":"rollingDays","startDate":"2018-08-19T21:02:54.632Z","endDate":"2018-09-20T06:00:00.000Z","rollingDays":20,"availability":{"daily":[{"day":1,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"18:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],"specific":[]},"minimumDays":2,"calendar":[[{"date":"2018-08-19T21:02:54.632Z","day":19,"today":false,"beforeToday":true,"available":false,"repeats":true},{"date":"2018-08-20T21:02:54.632Z","day":20,"today":false,"beforeToday":true,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-21T21:02:54.632Z","day":21,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-22T21:02:54.632Z","day":22,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-23T21:02:54.632Z","day":23,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-24T21:02:54.632Z","day":24,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-25T21:02:54.632Z","day":25,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-08-26T21:02:54.632Z","day":26,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-27T21:02:54.632Z","day":27,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-28T21:02:54.632Z","day":28,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-29T21:02:54.632Z","day":29,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-30T21:02:54.632Z","day":30,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-31T21:02:54.632Z","day":31,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-01T21:02:54.632Z","day":1,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-02T21:02:54.632Z","day":2,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-03T21:02:54.632Z","day":3,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-04T21:02:54.632Z","day":4,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-05T21:02:54.632Z","day":5,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-06T21:02:54.632Z","day":6,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-07T21:02:54.632Z","day":7,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-08T21:02:54.632Z","day":8,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-09T21:02:54.632Z","day":9,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-10T21:02:54.632Z","day":10,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-11T21:02:54.632Z","day":11,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-12T21:02:54.632Z","day":12,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-13T21:02:54.632Z","day":13,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-14T21:02:54.632Z","day":14,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-15T21:02:54.632Z","day":15,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}]]},{"location":"South Jordan","chair":"Op 3","address":"10615 S. 4000 W., South Jordan, UT 84095","phone":"(801)-555-1212","instructions":"Optional place to add instructions for the person signing up.","duration":60,"dateRange":"rollingDays","startDate":"2018-08-19T21:02:54.633Z","endDate":"2018-09-20T06:00:00.000Z","rollingDays":20,"availability":{"daily":[{"day":1,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],"specific":[{"date":"2018-08-29T06:00:00.000Z","intervals":[{"start":"09:00","end":"11:00"}]}]},"minimumDays":2,"calendar":[[{"date":"2018-08-19T21:02:54.633Z","day":19,"today":false,"beforeToday":true,"available":false,"repeats":true},{"date":"2018-08-20T21:02:54.633Z","day":20,"today":false,"beforeToday":true,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-21T21:02:54.633Z","day":21,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-22T21:02:54.633Z","day":22,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-23T21:02:54.633Z","day":23,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-24T21:02:54.633Z","day":24,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-25T21:02:54.633Z","day":25,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-08-26T21:02:54.633Z","day":26,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-27T21:02:54.633Z","day":27,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-28T21:02:54.633Z","day":28,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-29T21:02:54.633Z","day":29,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-30T21:02:54.633Z","day":30,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-31T21:02:54.633Z","day":31,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-01T21:02:54.633Z","day":1,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-02T21:02:54.633Z","day":2,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-03T21:02:54.633Z","day":3,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-04T21:02:54.633Z","day":4,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-05T21:02:54.633Z","day":5,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-06T21:02:54.633Z","day":6,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-07T21:02:54.633Z","day":7,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-08T21:02:54.633Z","day":8,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-09T21:02:54.633Z","day":9,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-10T21:02:54.633Z","day":10,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-11T21:02:54.633Z","day":11,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-12T21:02:54.633Z","day":12,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-13T21:02:54.633Z","day":13,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-14T21:02:54.633Z","day":14,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-15T21:02:54.633Z","day":15,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}]]}]';
      this.events = JSON.parse(str);
    }
    this.events.forEach(event => { 
      event.startDate = this.getSunday(this.noTime(Date.now()));
      event.calendar = this.createCalendar(event); 
    });  
}

noTime(d): Date {
  var date = new Date(d);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

  getSunday(d): Date {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 0);
    return new Date(d.setDate(diff));
  }

  createCalendar(event): any {
    var calendar = [];
    var week = [];
    for (let i = 1; i <= 28; i++) {
      var date = this.addDays(event.startDate, i - 1);
      var repeats = true;
      var available = false;
      //look for specific date
      var specificDate = event.availability.specific.find(f => { var d = new Date(f.date); return d.valueOf() === date.valueOf(); });
      if (specificDate) {
        repeats = false;
        var intervals = specificDate.intervals;
        available = true;
      } else {
        //look for repeating date
        var repeatDate = event.availability.daily.find(f => { return f.day === date.getDay(); });
        if (repeatDate) {
          var intervals = repeatDate.intervals;
          available = true;
        }
      }
      var todayMS = new Date();
      var todayDate = new Date(todayMS.getFullYear(), todayMS.getMonth(), todayMS.getDate());
      var d = {
        date: date,
        day: date.getDate(),
        today: date.valueOf() === todayDate.valueOf(),
        beforeToday: date.valueOf() < todayDate.valueOf(),
        available: available,
        repeats: repeats,
        intervals: intervals
      }
      week.push(d);
      if (i % 7 === 0) {
        var temp = JSON.parse(JSON.stringify(week));
        calendar.push(temp);
        week = [];  
      }
    }
    return calendar;
  }

  openAvailabilityDialog(data: any): void {
    const dialogRef = this.availabilityDialog.open(DialogAvailabilityDialog, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        var event = this.events[this.selectedTab.value];
        console.log(res.dates);
        res.dates.forEach(date => {
          var dt = new Date(date);
          var d = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
          var findIndex = event.availability.specific.findIndex(f => { return f.valueOf() === d.valueOf(); });
          console.log(findIndex);
          if (findIndex < 0) {
            if (res.intervals) {
              var o = {
                date: d,
                intervals: this.copyObject(res.intervals)
              }
              event.availability.specific.push(o);
            } else {
              if (res.applyTo === 'date' || res.applyTo === 'dates') {
                
              }
            }
          } else {
            if (res.intervals) {
              console.log('there');
            } else {
              console.log('here');
              event.availability.specific.splice(findIndex, 1);
            }
          }
        });
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        for (let i = 0; i < days.length; i++) {
          if (res.daysOfWeek[days[i]]) {
            var findIndex = event.availability.daily.findIndex(f => { return f.day === i; });
            if (res.intervals) {
              if (findIndex >= 0) event.availability.daily[findIndex].intervals = this.copyObject(res.intervals);
              else event.availability.daily.push({ day: i, intervals: this.copyObject(res.intervals) });  
            } else {
              if (findIndex >= 0) event.availability.daily.splice(findIndex, 1);
            }
          }
        }
        event.calendar = this.copyObject(this.createCalendar(event));
        this.saveEvents();
      }
    });
  }

  saveEvents(): void {
    console.log(this.events);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  addTab(): void {
    var event = {
      location: 'New',
      chair: ''
    }
    this.events.push(event);
    this.saveEvents();
    setTimeout(() => { this.selectedTab.setValue(this.events.length - 1) }, 0);
  }

  dayClicked(day): void {
    var data: any;
    data = {}
    if (day.available) data.intervals = this.copyObject(day.intervals);
    data.date = new Date(day.date);
    data.dates = [new Date(day.date)];
    data.daysOfWeek = {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false
    };
    this.openAvailabilityDialog(data);
  }

  copyObject(o: any): any {
    return JSON.parse(JSON.stringify(o));
  }

  startDateChanged(event): void {
    console.log(event.value);
    this.pickerStartDate = event.value;
    if (this.pickerEndDate && this.pickerStartDate.valueOf() > this.pickerEndDate.valueOf()) this.pickerEndDate = this.pickerStartDate;
  }

  endDateChanged(event): void {
    this.pickerEndDate = event.value;
  }

  ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  addDays(date, days): any {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  timeString(time): string {
    var timeParts = time.split(':');
    var hour = parseInt(timeParts[0]);
    var ap = (hour < 12) ? 'a' : 'p';
    return ((hour > 12) ? (hour - 12) : hour) + ':' + timeParts[1] + ap;
  }

  month(date): string {
    var d = new Date(date);
    return this.months[d.getMonth()];
  }
}

@Component({
  selector: 'dialog-availability-dialog',
  templateUrl: 'dialog-availability-dialog.html',
})
export class DialogAvailabilityDialog {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    public dialogRef: MatDialogRef<DialogAvailabilityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onCancelClick(): void {
      this.dialogRef.close();
    }

    deleteInterval(index): void {
      this.data.intervals.splice(index, 1);
      if (this.data.intervals.length === 0) this.data.intervals = undefined;
    }

    removeIntervals(): void {
      this.data.intervals = undefined;
    }

    addInterval(): void {
      if (!this.data.intervals) this.data.intervals = [{ start: null, end: null}];
      else this.data.intervals.push({ start: null, end: null });
    }

    applyToChanged(): void {
      var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      if (this.data.applyTo === 'dayOfWeek') {
        days.forEach(d => {
          this.data.daysOfWeek[d] = false;
        });
        this.data.daysOfWeek[days[this.data.date.getDay()]] = true;
      } else if (this.data.applyTo === 'daysOfWeek') this.data.daysOfWeek[days[this.data.date.getDay()]] = true;
    }

    addDate(): void {
      this.data.dates.push(null);
    }

    removeDate(index): void {
      this.data.dates.splice(index, 1);
    }

    removeDates(): void {
      this.data.dates = [this.data.dates[0]];
    }

    atLeastOneDaySelected(): boolean {
      return (
        this.data.daysOfWeek.sun 
        || this.data.daysOfWeek.mon 
        || this.data.daysOfWeek.tue 
        || this.data.daysOfWeek.wed 
        || this.data.daysOfWeek.thu 
        || this.data.daysOfWeek.fri 
        || this.data.daysOfWeek.sat
      );
    }
  }  