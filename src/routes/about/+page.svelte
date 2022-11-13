<script>
    import { page } from "$app/stores";
</script>

<h2>About</h2>

<h1>{$page.data.title}</h1>
<div>{@html $page.data.content}</div>