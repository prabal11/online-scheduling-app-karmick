import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-day',
  templateUrl: './select-day.component.html',
  styleUrls: ['./select-day.component.css']
})
export class SelectDayComponent implements OnInit {

  schedule: any;
  appts: any;
  dates: any[];
  today: Date;
  dateSelected: boolean = false;
  selectedDate: any;
  events: any[];
  locationIndex: string = 'not selected';
  locations: any[] = [];

  constructor() { }

  ngOnInit() {
    this.events = JSON.parse(localStorage.getItem('events'));
    if (this.events === null) {
      var str = '[{"location":"South Jordan","chair":"Op 2","address":"10615 S. 4000 W., South Jordan, UT 84095","phone":"(801)-555-1212","instructions":"Optional place to add instructions for the person signing up.","duration":60,"dateRange":"rollingDays","startDate":"2018-08-19T21:02:54.632Z","endDate":"2018-09-20T06:00:00.000Z","rollingDays":20,"availability":{"daily":[{"day":1,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"18:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],"specific":[]},"minimumDays":2,"calendar":[[{"date":"2018-08-19T21:02:54.632Z","day":19,"today":false,"beforeToday":true,"available":false,"repeats":true},{"date":"2018-08-20T21:02:54.632Z","day":20,"today":false,"beforeToday":true,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-21T21:02:54.632Z","day":21,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-22T21:02:54.632Z","day":22,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-23T21:02:54.632Z","day":23,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-24T21:02:54.632Z","day":24,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-25T21:02:54.632Z","day":25,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-08-26T21:02:54.632Z","day":26,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-27T21:02:54.632Z","day":27,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-28T21:02:54.632Z","day":28,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-29T21:02:54.632Z","day":29,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-30T21:02:54.632Z","day":30,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-08-31T21:02:54.632Z","day":31,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-01T21:02:54.632Z","day":1,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-02T21:02:54.632Z","day":2,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-03T21:02:54.632Z","day":3,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-04T21:02:54.632Z","day":4,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-05T21:02:54.632Z","day":5,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-06T21:02:54.632Z","day":6,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-07T21:02:54.632Z","day":7,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-08T21:02:54.632Z","day":8,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-09T21:02:54.632Z","day":9,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-10T21:02:54.632Z","day":10,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-11T21:02:54.632Z","day":11,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-12T21:02:54.632Z","day":12,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-13T21:02:54.632Z","day":13,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"18:00"}]},{"date":"2018-09-14T21:02:54.632Z","day":14,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-15T21:02:54.632Z","day":15,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}]]},{"location":"South Jordan","chair":"Op 3","address":"10615 S. 4000 W., South Jordan, UT 84095","phone":"(801)-555-1212","instructions":"Optional place to add instructions for the person signing up.","duration":60,"dateRange":"rollingDays","startDate":"2018-08-19T21:02:54.633Z","endDate":"2018-09-20T06:00:00.000Z","rollingDays":20,"availability":{"daily":[{"day":1,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],"specific":[{"date":"2018-08-29T06:00:00.000Z","intervals":[{"start":"09:00","end":"11:00"}]}]},"minimumDays":2,"calendar":[[{"date":"2018-08-19T21:02:54.633Z","day":19,"today":false,"beforeToday":true,"available":false,"repeats":true},{"date":"2018-08-20T21:02:54.633Z","day":20,"today":false,"beforeToday":true,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-21T21:02:54.633Z","day":21,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-22T21:02:54.633Z","day":22,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-23T21:02:54.633Z","day":23,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-24T21:02:54.633Z","day":24,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-25T21:02:54.633Z","day":25,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-08-26T21:02:54.633Z","day":26,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-27T21:02:54.633Z","day":27,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-28T21:02:54.633Z","day":28,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-29T21:02:54.633Z","day":29,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-30T21:02:54.633Z","day":30,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-08-31T21:02:54.633Z","day":31,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-01T21:02:54.633Z","day":1,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-02T21:02:54.633Z","day":2,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-03T21:02:54.633Z","day":3,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-04T21:02:54.633Z","day":4,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-05T21:02:54.633Z","day":5,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-06T21:02:54.633Z","day":6,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-07T21:02:54.633Z","day":7,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-08T21:02:54.633Z","day":8,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}],[{"date":"2018-09-09T21:02:54.633Z","day":9,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-10T21:02:54.633Z","day":10,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-11T21:02:54.633Z","day":11,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-12T21:02:54.633Z","day":12,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-13T21:02:54.633Z","day":13,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-14T21:02:54.633Z","day":14,"today":false,"beforeToday":false,"available":true,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]},{"date":"2018-09-15T21:02:54.633Z","day":15,"today":false,"beforeToday":false,"available":false,"repeats":true,"intervals":[{"start":"09:00","end":"11:00"},{"start":"13:00","end":"15:00"}]}]]}]';
      this.events = JSON.parse(str);
    }
    this.events.forEach(event => {
      if (this.locations.indexOf(event.location) < 0) this.locations.push(event.location);
    });
  }

  locationChange(): void {
    this.setDates();
  }

  setDates(): void {
    this.dates = [];
    var i = 1;
    while (this.dates.length < 5) {
      var d = new Date();
      var n = this.noTime(new Date(d.setDate(d.getDate() + i)));
      var lEvents = this.events.filter(f => { return f.location === this.locationIndex });
      var times = [];
      lEvents.forEach(event => {
        var lTimes = this.createTimes(event, n);
        lTimes.forEach(time => { times.push(time); });
      });
      times.sort();
      this.dates.push({ date: n, times: times });
      i++;
    }
  }

  noTime(d): Date {
    var date = new Date(d);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  createTimes(event, date): any[] {
    var times = [];
    //look for specific date
    console.log(event.availability.specific);
    var specificDate = event.availability.specific.find(f => { var d = new Date(f.date); console.log(d, date);return d.valueOf() === date.valueOf(); });
    console.log('specificDate', specificDate);
    if (specificDate) {
      specificDate.intervals.forEach(interval => {
        var startTime = this.timeToMinutes(interval.start);
        var endTime = this.timeToMinutes(interval.end);
        for (let i = startTime; i < endTime; i += event.duration) {
          times.push(this.minutesToTime(i));
        }
      });
    } else {
      //look for repeating date
      var repeatDate = event.availability.daily.find(f => { return f.day === date.getDay(); });
      if (repeatDate) {
        repeatDate.intervals.forEach(interval => {
          var startTime = this.timeToMinutes(interval.start);
          var endTime = this.timeToMinutes(interval.end);
          for (let i = startTime; i < endTime; i += event.duration) {
            times.push(this.minutesToTime(i));
          }
        });
      }
    }
    return times;
  }

  timeToMinutes(timeStr): number {
    var timeParts = timeStr.split(':');
    var hour = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    return (hour * 60) + minutes;
  }

  minutesToTime(minutes): string {
    var hour = this.twoDigits(Math.floor(minutes / 60));
    return hour + ':' + this.twoDigits(minutes % 60);
  }

  clickDay(event, date): void {
    var els = document.getElementsByClassName('select-day');
    [].forEach.call(els, el => {
      el.classList.remove('selected');
    });
    var el = event.target.parentElement;
    if (!this.selectedDate || this.selectedDate.date.valueOf() !== date.valueOf()) {
      this.dateSelected = true;
      this.selectedDate = this.dates.find(f => { return f.date.valueOf() === date.valueOf(); });
      el.classList.add('selected');
    } else {
      this.dateSelected = false;
      this.selectedDate = undefined;
    }
  }

  timeString(time): string {
    var hour = parseInt(time.split(':')[0]);
    var minutes = time.split(':')[1];
    return ((hour > 12) ? hour - 12 : hour) + ':' + minutes + ' ' + this.ampm(hour);
  }

  ampm(hour): string {
    return (hour > 11) ? 'pm' : 'am';
  }

  twoDigits(num: number): string {
    return (num > 9) ? num.toString() : '0' + num;
  }

  dayOfWeek(d): string {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()];
  }

  month(d): string {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[d.getMonth()];
  }
}
