<script>
	// Componentes
	import Card from '../components/Card.svelte';

	// Data
	import discounts from '../data/orderedDiscounts'; // Listado de descuentos
	import estaciones from '../data/estaciones'; // Logos de estaciones de servicio


	// Variable para almacenar los tags únicos
	let uniqueTags = new Set();

	// Recorrer todos los descuentos para extraer los tags únicos
	Object.values(discounts).forEach(dayDiscounts => {
		dayDiscounts.forEach(discount => {
			discount.tags.forEach(tag => {
				uniqueTags.add(tag);
			});
		});
	});

	// Convertir el Set a Array para iterar en el HTML
	uniqueTags = Array.from(uniqueTags);
</script>

<svelte:head>
	<title>Ahorra en combustible</title>
	<meta name="description" content="Encontra los descuentos en combustible para ahorrar la próxima vez que tengas que cargar nafta, gas o gasoil." />
</svelte:head>

<section
	class="container mx-auto my-6 mb-16 ml-auto mr-auto flex max-w-sm flex-col gap-8 px-4 sm:max-w-sm md:max-w-md lg:max-w-lg"
>
	<h1 class="text-xl font-bold">¡Ahorra en combustibles!</h1>

	<div class="flex flex-wrap gap-2">
        {#each uniqueTags as tag}
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
        {/each}
    </div>


	<div class="flex flex-col gap-6">
		{#each Object.entries(discounts) as [dia, descuentos]}
			<div>
				<h2 class="font-semibold text-lg">{dia}</h2>
				{#if descuentos.length > 0}
					<div class="flex flex-col gap-2">
						{#each descuentos as item, index (item)}
						<Card {item} estacionImage={estaciones[item.estacion.toLowerCase()]} />
						{/each}
					</div>
				{:else}
					<p>No hay descuentos para este día.</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
</style>
