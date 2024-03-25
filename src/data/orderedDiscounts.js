import discounts from './discounts'; // Asegúrate de que tu ruta de importación sea correcta

const getDayName = (date, locale) => {
  let dayName = date.toLocaleDateString(locale, { weekday: 'long' });
  return dayName.charAt(0).toUpperCase() + dayName.slice(1); // Asegurándonos de que la primera letra sea mayúscula
}

const getTomorrowName = (date, locale) => {
  let tomorrow = new Date(date.getTime()); 
  tomorrow.setDate(tomorrow.getDate() + 1); 
  return getDayName(tomorrow, locale);
}

// Obteniendo el nombre del día actual de la semana en español
const dayName = getDayName(new Date(), "es-ES");

// Obtén el nombre del día siguiente en español
const tomorrowName = getTomorrowName(new Date(), "es-ES");

const orderDiscounts = (discounts, dayName, tomorrowName) => {
  const ordered = {}
  ordered["Hoy"] = discounts[dayName];

  // Comprueba si existe un descuento para "Mañana"
  if (discounts[tomorrowName]) {
    ordered["Mañana"] = discounts[tomorrowName];
  }
  
  for (let day in discounts) {
    if (day !== dayName && day !== tomorrowName) {
      ordered[day] = discounts[day];
    }
  }
  
  return ordered;
}

const orderedDiscounts = orderDiscounts(discounts, dayName, tomorrowName);

export default orderedDiscounts;
