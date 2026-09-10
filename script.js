// EcoTrack - Motor simple de estimación de huella de carbono
// Basado en factores de emisión promedio (valores educativos, no oficiales)

const EMISSION_FACTORS = {
  carne: { value: 6.0, unit: 'ración', keyword: /carne|res|hamburguesa/i },
  pollo: { value: 1.5, unit: 'ración', keyword: /pollo/i },
  bus: { value: 0.1, unit: 'km', keyword: /bus|autobús/i },
  auto: { value: 0.21, unit: 'km', keyword: /auto|carro|coche/i },
  moto: { value: 0.1, unit: 'km', keyword: /moto/i },
  avion: { value: 0.25, unit: 'km', keyword: /avión|avion|vuelo/i },
  bicicleta: { value: 0, unit: 'km', keyword: /bicicleta|bici/i },
  caminar: { value: 0, unit: 'km', keyword: /caminé|caminar|a pie/i },
};

function extractDistance(text) {
  const match = text.match(/(\d+(\.\d+)?)\s*km/i);
  return match ? parseFloat(match[1]) : 1;
}

function calculateCarbonFootprint(text) {
  const details = [];
  let total = 0;

  try {
    for (const [key, factor] of Object.entries(EMISSION_FACTORS)) {
      if (factor.keyword.test(text)) {
        let amount = 1;
        let co2 = 0;

        if (factor.unit === 'km') {
          amount = extractDistance(text);
          co2 = amount * factor.value;
        } else {
          co2 = factor.value;
        }

        if (co2 > 0 || factor.value === 0) {
          total += co2;
          details.push(
            `${key.charAt(0).toUpperCase() + key.slice(1)}: ${amount} ${factor.unit} → ${co2.toFixed(2)} kg CO2`
          );
        }
      }
    }

    if (details.length === 0) {
      details.push('No se detectaron actividades reconocibles. Intenta ser más específico.');
    }

    return { total: parseFloat(total.toFixed(2)), details };
  } catch (error) {
    console.error('Error calculando huella de carbono:', error);
    return { total: 0, details: ['Ocurrió un error al procesar tu actividad.'] };
  }
}

function renderResult(result) {
  const resultCard = document.getElementById('resultCard');
  const co2Value = document.getElementById('co2Value');
  const detailsList = document.getElementById('detailsList');

  co2Value.textContent = `${result.total} kg CO2`;
  detailsList.innerHTML = '';

  result.details.forEach((line) => {
    const li = document.createElement('li');
    li.textContent = line;
    detailsList.appendChild(li);
  });

  resultCard.classList.remove('hidden');
}

document.getElementById('calculateBtn').addEventListener('click', () => {
  const input = document.getElementById('activityInput').value.trim();

  if (!input) {
    alert('Por favor describe tu actividad de hoy.');
    return;
  }

  const result = calculateCarbonFootprint(input);
  renderResult(result);
});
