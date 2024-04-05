<script>
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
							<div class="bg-gray-50 flex gap-4 p-4 rounded-md shadow-md my-1">
								<img
									class="w-12 h-12 rounded-full"
									src={estaciones[item.estacion.toLowerCase()]}
									alt=""
								/>
								<div>
									<p class="font-bold">{item.descuento} OFF en {item.estacion}</p>
									{#if item.tope.length > 0 || item.condiciones.length > 0}
										<ul class="list-disc pl-5">
											{#if item.tope.length > 0}
												<li>Tope de {item.tope}</li>
											{/if}
											{#if item.condiciones.length > 0}
												{#each item.condiciones as condicion, index (item)}
													<li>{condicion}</li>
												{/each}
											{/if}
										</ul>
									{/if}
								</div>
							</div>
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
