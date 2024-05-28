<script>
    import Project from "$lib/components/Project.svelte";
    import {onMount} from "svelte";

    let card;

    onMount(() => {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            // Initial gradient setup
            const xPercent = 50; // Center the gradient initially
            const yPercent = 50; // Center the gradient initially

            // Set the radial gradient background with a more saturated blue color
            card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    });

    function handleMouseMove(event) {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Calculate percentage positions for the radial gradient
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Set the radial gradient background with a more saturated blue color
            card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;
        }
    }
</script>

<style lang="scss">
  @import 'src/styles.scss';

  .container {
    padding-top: 1rem;
    background: $background-color;
  }

  h4 {
    display: none;
  }

  @media (max-width: 768px) {
    h4 {
      display: initial;
    }

    .container {
      padding: 1rem;
      margin-top: 1rem;
    }
  }

</style>

<div id="projects" class="container" bind:this={card} on:mousemove={handleMouseMove}>
    <h4>Projects</h4>
    <Project title="Credit Karma Clone"
             description="A recreation of the credit karma net worth page with plaid integration"
             imageUrl="credit_karma/graph.png" link="https://personal-finance-web-app.fly.dev/"
             skills={['TypeScript', 'Express.js', 'Svelte Kit', 'JavaScript']}/>
    <Project title="Personal Chat Bot" description="A chat bot that can answer questions about me"
             imageUrl="chat_bot/training.png" link="https://github.com/Rfluegel1/chatbot"
             skills="{['Python','tensorflow','nltk','numpy']}"/>
</div>