<!-- src/lib/components/Footer.svelte -->
<footer class="footer" bind:this={card} on:mousemove={handleMouseMove}>
    <p>Modeled after <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang's webpage</a>. Developed with JavaScript, Svelte-Kit, and ChatGPT. Deployed with fly.io.</p>
</footer>

<style lang="scss">
  @import 'src/styles.scss';

  .footer {
    background-color: $background-color;
    color: #e0e0e0;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 4rem;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }

    .footer a {
        color: #8ea8c3;
        text-decoration: none;
    }
</style>

<script>
    import {onMount} from "svelte";

    let card;

    onMount(() => {
        // Initial gradient setup
        const xPercent = 50; // Center the gradient initially
        const yPercent = 50; // Center the gradient initially

        // Set the radial gradient background with a more saturated blue color
        card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    function handleMouseMove(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calculate percentage positions for the radial gradient
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Set the radial gradient background with a more saturated blue color
        card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;
    }
</script>
