<script>
	export let circles;
</script>

<div class="flex flex-row space-x-10 py-8">
	{#each circles as i}
		<span
			class="bg-pastel-blue w-20 h-20 rounded-full  cursor-pointer shadow-lg shadow-black/40 hover:scale-110 ease-in duration-300"
			><a href={i[2]}><img class="stroke-white p-4" src={i[1]} alt={i[0]} /></a></span
		>
	{/each}
</div>
