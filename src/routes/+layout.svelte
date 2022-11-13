<script>
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import "../app.css";
  import Header from "$lib/components/Header.svelte";

  let ReloadPrompt;

  onMount(async () => {
    if (pwaInfo) {
      ReloadPrompt = (await import("$lib/ReloadPrompt.svelte")).default;
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        },
      });
    }
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<div class="bg-slate-100 h-screen">
  <Header />
  <div class="max-w-max mx-auto">
    <main><slot /></main>
  </div>
</div>

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}
