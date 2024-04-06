<script>
	import Card from '../components/Card.svelte'; // Asegúrate de que la ruta sea correcta
	import discounts from '../data/orderedDiscounts';
	import estaciones from '../data/estaciones';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="container mx-auto my-6 mb-16 ml-auto mr-auto flex max-w-sm flex-col gap-8 px-4 sm:max-w-sm md:max-w-md lg:max-w-lg"
>
	<h1 class="text-xl font-bold">¡Ahorra en combustibles!</h1>
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
