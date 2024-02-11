window.onload = function () {
   generatecalendar();
};

function generatecalendar() {
   const calendar = document.getElementById('calendar');
   const currentData = new Date();
   const month = currentData.getMonth();
   const year = currentData.getFullYear();

   const firstDayOfMonth = new Date(year, month, 1);
   const lastDayOfMonth = new Date(year, month + 1, 0);

   const firstDayOfWeek = firstDayOfMonth.getDay();
   const totalDays = lastDayOfMonth.getDate();

   for (let i = 0; i < firstDayOfWeek; i++) {
      let blankDay = document.createElement('div');
      calendar.appendChild(blankDay);
   }

   for (let day = 1; day <= totalDays; day++) {
      let daySquare = document.createElement('div');
      daySquare.className = 'calendar-day';
      daySquare.textContent = day;
      daySquare.id = `day-${day}`;
      calendar.appendChild(daySquare);
   }
}
