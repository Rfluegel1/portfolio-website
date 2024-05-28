<script>
    import Experience from "$lib/components/Experience.svelte";
    import {onMount} from "svelte";

    let card;
    let pdfLink;

    onMount(() => {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            // Initial gradient setup
            const xPercent = 50; // Center the gradient initially
            const yPercent = 50; // Center the gradient initially

            // Set the radial gradient background with a more saturated blue color
            const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;
            card.style.background = gradient;
            pdfLink.style.background = gradient;

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
            const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;
            card.style.background = gradient;
            pdfLink.style.background = gradient;
        }
    }
</script>

<style lang="scss">
  @import 'src/styles.scss';

  .container {
    padding-top: 1rem;
    background-color: $background-color;
    transition: background-color 0.3s ease-in-out;
  }

  .pdf-link {
    display: inline-block;
    background-color: $background-color;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    padding-top: 1rem;
    padding-left: 1rem;
  }

  .pdf-link:hover {
    color: #8ea8c3;
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

    .pdf-link {
      padding-left:0;
    }
  }

</style>

<div id="resume" class="container" bind:this={card} on:mousemove={handleMouseMove}>
    <h4>Experience</h4>
    <Experience position="Full-Stack Software Engineer" startDate="09/2020" endDate="07/2023"
                company="Best Buy"
                link="https://corporate.bestbuy.com/about-best-buy/"
                description="At Best Buy, I helped transition promotion planning to a centralized web application."
                skills={['Groovy', 'Spring Boot', 'JavaScript', 'React']}/>

    <a class="pdf-link" href="Software Engineer Resume.pdf" target="_blank" bind:this={pdfLink}>View Full Resume
        <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>
