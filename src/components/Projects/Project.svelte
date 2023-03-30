<script>
	export let image;
	export let title;
	let showModal = false;
</script>

<div
	on:click={() => (showModal = true)}
	on:keydown={() => (showModal = true)}
	class="bg-gray px-40 py-20"
>
	{title}
</div>

{#if showModal}
	<!-- page overlay effect -->
	<div class="fixed backdrop-blur-sm-auto z-10">
		<div
			class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center backdrop-blur"
		>
			<div class="bg-blue-zodiac w-1/2 h-1/2">
				<div class="flex justify-end">
					<img
						on:click={() => (showModal = false)}
						on:keydown={() => (showModal = false)}
						src="x-symbol.svg"
						alt="cross for exiting out of modal"
						class="w-6 cursor-pointer m-2"
					/>
				</div>
				<h2 class="text-white text-4xl">{title}</h2>
			</div>
		</div>
	</div>
{/if}
