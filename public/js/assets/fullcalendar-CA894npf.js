(function(){var e=moment().format("YYYY"),t=moment().format("MM"),o={id:1,events:[{id:"1",start:e+"-"+t+"-02",end:e+"-"+t+"-03",title:"Spruko Meetup",backgroundColor:"#845adf",borderColor:"#845adf",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"2",start:e+"-"+t+"-17",end:e+"-"+t+"-17",title:"Design Review",backgroundColor:"#00B9FF",borderColor:"#00B9FF",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"3",start:e+"-"+t+"-13",end:e+"-"+t+"-13",title:"Lifestyle Conference",backgroundColor:"#EE335E",borderColor:"#EE335E",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"4",start:e+"-"+t+"-21",end:e+"-"+t+"-21",title:"Team Weekly Brownbag",backgroundColor:"#FBBC0B",borderColor:"#FBBC0B",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"5",start:e+"-"+t+"-04T10:00:00",end:e+"-"+t+"-06T15:00:00",title:"Music Festival",backgroundColor:"#22C03C",borderColor:"#22C03C",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"6",start:e+"-"+t+"-23T13:00:00",end:e+"-"+t+"-25T18:30:00",title:"Attend Lea's Wedding",backgroundColor:"#22C03C",borderColor:"#22C03C",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"}]},d={id:2,backgroundColor:"#0162E8",borderColor:"#0162E8",textColor:"#fff",events:[{id:"7",start:e+"-"+t+"-04",end:e+"-"+t+"-04",title:"Harcates Birthday",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"8",start:e+"-"+t+"-28",end:e+"-"+t+"-28",title:"Bunnysin's Birthday",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"9",start:e+"-"+t+"-31",end:e+"-"+t+"-31",title:"Lee shin's Birthday",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},{id:"10",start:e+"-11-11",end:e+"-11-11",title:"Shinchan's Birthday",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"}]},s={id:3,backgroundColor:"#FBBC0B",borderColor:"#FBBC0B",textColor:"#fff",events:[{id:"10",start:e+"-"+t+"-05",end:e+"-"+t+"-08",title:"Festival Day"},{id:"11",start:e+"-"+t+"-18",end:e+"-"+t+"-19",title:"Memorial Day"},{id:"12",start:e+"-"+t+"-25",end:e+"-"+t+"-26",title:"Diwali"}]},i={id:4,backgroundColor:"#00B9FF",borderColor:"#00B9FF",textColor:"#fff",events:[{id:"13",start:e+"-"+t+"-07",end:e+"-"+t+"-09",title:"My Rest Day"},{id:"13",start:e+"-"+t+"-29",end:e+"-"+t+"-31",title:"My Rest Day"}]},l=document.getElementById("external-events");new FullCalendar.Draggable(l,{itemSelector:".fc-event",eventData:function(r){return{title:r.innerText.trim(),title:r.innerText,className:r.className+" overflow-hidden "}}});var c=document.getElementById("calendar2"),n=new FullCalendar.Calendar(c,{headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},defaultView:"month",navLinks:!0,businessHours:!0,editable:!0,selectable:!0,selectMirror:!0,droppable:!0,select:function(r){var a=prompt("Event Title:");a&&n.addEvent({title:a,start:r.start,end:r.end,allDay:r.allDay}),n.unselect()},eventClick:function(r){confirm("Are you sure you want to delete this event?")&&r.event.remove()},editable:!0,dayMaxEvents:!0,eventSources:[o,d,s,i]});n.render();var u=document.getElementById("full-calendar-activity");new SimpleBar(u,{autoHide:!0})})();
