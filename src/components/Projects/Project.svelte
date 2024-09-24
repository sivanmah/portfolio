<script>
	import { onMount } from 'svelte';
	export let image;
	export let title;
	export let alt;
	export let link;
	let showModal = false;

	// close modal on escape key and outside click
	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				showModal = false;
			}
		});
		document.addEventListener('click', (e) => {
			if (e.target.classList.contains('backdrop-blur')) {
				showModal = false;
			}
		});
	});
</script>

<div
	on:click={() => (showModal = true)}
	on:keydown={() => (showModal = true)}
	style="background-image: url({image});"
	class="bg-cover rounded-lg"
>
	<div class="bg-black my-10 text-center bg-opacity-75 text-white lg:text-xl">
		{title}
	</div>
</div>

{#if showModal}
	<!-- page overlay effect -->
	<div class="fixed backdrop-blur-sm-auto z-10">
		<div
			class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center backdrop-blur"
		>
			<div class="bg-blue-zodiac w-full h-full lg:w-3/5 xl:w-1/2 md:h-1/2">
				<div class="flex justify-end">
					<img
						on:click={() => (showModal = false)}
						on:keydown={() => (showModal = false)}
						src="x-symbol.svg"
						alt="cross for exiting out of modal"
						class="w-6 cursor-pointer m-2"
					/>
				</div>
				<h2 class="text-white text-4xl text-center mb-4">{title}</h2>
				<div
					class="flex items-center flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mx-4 py-40 md:py-0"
				>
					<p class="text-white">
						<slot />
					</p>
					{#if link}
						<p>
							<a href={link} target="_blank">
								{link}
							</a>
						</p>
					{/if}
					<img src={image} {alt} class="w-full md:w-2/5 lg:w-3/5" />
				</div>
			</div>
		</div>
	</div>
{/if}
