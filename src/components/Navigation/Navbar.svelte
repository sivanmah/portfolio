<script>
	import { locale } from 'svelte-i18n';
	import { _ } from 'svelte-i18n';
	const changeLanguage = (lang) => locale.set(lang);
	import { Hamburger } from 'svelte-hamburgers';
	let scrollY;
	let open;
	const shadow =
		'z-10 shadow-lg shadow-black/40 fixed top-0 left-0 right-0 py-4 xl:px-40 lg:px-20 px-10 text-white flex justify-end text-2xl bg-blue-zodiac';
	const noShadow =
		'fixed top-0 left-0 right-0 py-4 xl:px-40 lg:px-20 px-10 text-white flex text-2xl bg-blue-zodiac';
	//remove shadow from navbar when opening menu
	function closeMenu() {
		open = false;
	}
</script>

{#if open}
	<div
		class="[&>*]:p-4 flex flex-col px-10 pt-20 space-y-4 md:hidden fixed top-0 right-0 h-screen w-full bg-blue-zodiac text-white text-center text-2xl transition-transform duration-300 ease-out"
	>
		<a on:click={closeMenu} href="#about">{$_('about')}</a>
		<a on:click={closeMenu} href="#projects">{$_('projects')}</a>
		{#if $locale === 'no'}
			<button on:click={() => changeLanguage('en')} on:click={closeMenu}>EN/NO</button>
		{:else}
			<button on:click={() => changeLanguage('no')} on:click={closeMenu}>EN/NO</button>
		{/if}
	</div>
{/if}
<nav class={!scrollY || open ? noShadow : shadow}>
	<a class="mr-auto" href="/"
		><svg class="w-16 fill-pastel-blue" viewBox="0 0 90 46">
			<path
				d="M89.7591 13.5917C88.4848 5.59046 82.047 0.201685 73.0987 0.201685C67.0031 0.201685 62.2136 2.97171 59.4273 7.56005C56.7298 2.96856 51.9403 0.198534 45.6704 0.198534C39.9901 0.198534 35.1435 2.52737 32.0847 6.36569C29.3016 2.3761 24.7688 0 18.9681 0C10.2543 0 4.44722 5.70076 2.93206 13.5507C2.87817 16.368 6.24767 21.344 10.5301 23.4869L15.4813 25.9985C19.6464 28.0752 21.6117 30.1551 21.6117 33.2718C21.6117 37.6017 18.705 39.9368 14.5399 39.9368C9.19558 39.9368 5.73733 35.7802 4.95122 31.4534L0 34.3968C1.25841 40.6301 6.05114 45.9968 14.1468 45.9968C22.2425 45.9968 27.9005 40.7152 27.9005 33.2686C27.9005 26.7737 24.363 23.3136 19.1773 20.7137L13.833 18.0288C11.0436 16.6107 9.34773 15.1232 9.1829 13.5854H8.92297C9.01807 13.5854 9.10682 13.5822 9.1829 13.5854C9.89293 9.09475 14.4194 6.14195 19.0536 6.14195C23.9351 6.14195 27.7008 9.2271 28.8483 13.5854C28.9593 14.5749 29.0005 15.5361 29.0005 16.5634L28.6011 45.9937H35.5683V16.5634C35.5683 15.514 35.6982 14.5213 35.9455 13.5917C37.0961 9.2334 40.8048 6.34678 45.7592 6.34678C50.7136 6.34678 54.3366 9.23025 55.4841 13.5917C55.7282 14.5213 55.8613 15.514 55.8613 16.5634V46H62.8285V16.5634C62.8285 15.514 62.9585 14.5213 63.1962 13.5917C64.3247 9.2334 67.9604 6.34678 72.8419 6.34678C77.7234 6.34678 81.505 9.23025 82.6556 13.5917C82.8997 14.5213 83.0328 15.514 83.0328 16.5634V46H90V16.5634C90 15.5392 89.9176 14.5466 89.7654 13.5917H89.7591Z"
			/>
		</svg>
	</a>
	<div class="md:hidden">
		<Hamburger bind:open --color="white" --padding="0" />
	</div>
	<div class="hidden md:flex space-x-5 xl:space-x-10">
		<a href="#about">{$_('about')}</a>
		<a href="#projects">{$_('projects')}</a>
		<!-- button for switching locale -->
		{#if $locale === 'no'}
			<button on:click={() => changeLanguage('en')}>EN/NO</button>
		{:else}
			<button on:click={() => changeLanguage('no')}>EN/NO</button>
		{/if}
	</div>
</nav>

<svelte:window bind:scrollY />
