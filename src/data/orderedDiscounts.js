import discounts from './discounts'; // Asegúrate de que tu ruta de importación sea correcta
// console.log(discounts);


const getDayName = (date, locale) => {
  let dayName = date.toLocaleDateString(locale, { weekday: 'long' });
  return dayName.charAt(0).toUpperCase() + dayName.slice(1); 
}

const getTomorrowName = (date, locale) => {
  let tomorrow = new Date(date.getTime()); 
  tomorrow.setDate(tomorrow.getDate() + 1); 
  return dayName.charAt(0).toUpperCase() + dayName.slice(1); 
}

const getOrderedWeekdays = (startDay) => {
  const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let startIndex = weekdays.indexOf(startDay);
  if (startIndex === -1) return weekdays; // Si el día de inicio no se encuentra, devuelve los días de la semana en el orden original

  let orderedWeekdays = [];
  for (let i = 0; i < weekdays.length; i++) {
    orderedWeekdays.push(weekdays[(startIndex + i) % weekdays.length]);
  }
  return orderedWeekdays;
}

// Obteniendo el nombre del día actual de la semana en español
const dayName = getDayName(new Date(), "es-ES");

// Obtén el nombre del día siguiente en español
const tomorrowName = getTomorrowName(new Date(), "es-ES");

const orderDiscounts = (discounts, dayName, tomorrowName) => {
  const ordered = {};
  const orderedWeekdays = getOrderedWeekdays(tomorrowName); // Obtén los días de la semana ordenados a partir de mañana

  ordered["Hoy"] = discounts[dayName];
  ordered["Mañana"] = discounts[tomorrowName];

  // Ordenar los días restantes según el orden lógico después de mañana
  orderedWeekdays.forEach(day => {
    if (day !== dayName && day !== tomorrowName) {
      ordered[day] = discounts[day];
    }
  });

  return ordered;
}

const orderedDiscounts = orderDiscounts(discounts, dayName, tomorrowName);

export default orderedDiscounts;
