<script>
	import { _ } from 'svelte-i18n';
	import Section from '../Section.svelte';
	import Project from './Project.svelte';
</script>

<div class="mx-10 mb-5 lg:mx-0">
	<Section id="projects">{$_('projects')}</Section>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 [&>*]:bg-gray [&>*]:h-60">
	<Project
		title={$_('win95desktop-project-header')}
		image={'/images/win95desktop_website.webp'}
		alt={'Win95Desktop website screenshot'}
		link={'https://win95-desktop.vercel.app/'}
	>
		{$_('win95desktop-project-text')}
	</Project>
	<Project
		title={$_('qr-project-header')}
		image={'/images/qrcode_website.webp'}
		alt={'QR website screenshot'}
	>
		{$_('qr-project-text')}
	</Project>
	<Project
		title={'ExamMatcher'}
		image={'/images/exammatcher_website.webp'}
		alt={'ExamMatcher website screenshot'}
	>
		{$_('exammatcher-project-text')}
	</Project>
	<Project
		title={$_('portfolio-project-header')}
		image={'/images/portfolio_website.webp'}
		alt={'Portfolio website screenshot'}
	>
		{$_('portfolio-project-text')}
	</Project>
</div>
