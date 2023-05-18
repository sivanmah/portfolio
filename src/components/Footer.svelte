<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
		document.body.appendChild(script);
	});
</script>

<div class="text-white flex-col flex justify-center items-center">
	<div>
		<div id="wcb" class="carbonbadge wcb-d" />
	</div>
	<p>© 2023 Sivan Sabir Mahmud</p>
</div>
