<script>
  import discounts from '../data/discounts';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container mx-auto my-6 mb-16 ml-auto mr-auto flex max-w-sm flex-col gap-8 px-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
	<h1 class="text-xl font-bold">
	¡Ahorra en combustibles!
	</h1>
	<div class='flex flex-col gap-6'>
  {#each Object.entries(discounts) as [dia, descuentos]}
    <div>
      <h2 class="font-semibold text-lg">{dia}</h2>
      {#if descuentos.length > 0}
        <div class='overflow-auto'>
          <table>
            <thead>
              <tr>
                <th>Estación</th>
                <th>Cuenta</th>
                <th>Descuento</th>
                <th>Tope</th>
                <th>Condiciones</th>
              </tr>
            </thead>
            <tbody>
              {#each descuentos as item, index (item)}
                <tr>
                  <td>{item.estacion}</td>
                  <td>{item.cuenta}</td>
                  <td>{item.descuento}</td>
                  <td>{item.tope}</td>
                  <td>
                    <ul>
                      {#each item.condiciones as condicion, indexCond}
                        <li>{condicion}</li>
                      {/each}
                    </ul>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
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
