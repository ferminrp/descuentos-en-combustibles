<script>
    export let item; // Recibe el objeto de descuento
    export let estacionImage; // Recibe la imagen de la estación
</script>

<div class="bg-gray-50 flex gap-4 p-4 rounded-md shadow-md my-1">
    <img class="w-12 h-12 rounded-full" src={estacionImage} alt=""/>
    <div>
        <p class="font-bold">{item.descuento} OFF en {item.estacion}</p>
        {#if item.tope.length > 0 || item.condiciones.length > 0}
            <ul class="list-disc pl-5">
                {#if item.tope.length > 0}
                    <li>Tope de {item.tope}</li>
                {/if}
                {#if item.condiciones.length > 0}
                    {#each item.condiciones as condicion}
                        <li>{condicion}</li>
                    {/each}
                {/if}
            </ul>
        {/if}
    </div>
</div>
