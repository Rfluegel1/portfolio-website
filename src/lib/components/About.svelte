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

<style lang="scss">
  @import 'src/styles.scss';

  .container {
    background: $background-color;
    padding-top: 2rem;
    padding-left: 1rem;
  }

  p {
    color: $text-color;
    line-height: 1.6rem;
  }

  #first_paragraph {
    margin-top: 0;
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
    }

    #first_paragraph {
      margin-top: 1rem;
    }
  }
</style>

<div id="about" class="container" bind:this={card} on:mousemove={handleMouseMove}>
    <h4>About</h4>
    <div class="content">
        <p id="first_paragraph">Solving sudoku puzzles was the best way I found to pass long car rides. My mother, who also enjoyed the
            algorithmic flow, bought me a kids’ version of her sudoku book, and I fell in love with following the
            procedures. This passion flourished into a love for math, learning patterns, and building on top of more
            complex procedures. After a healthy dose of video games on my computer, the AP Computer Science class at my
            school taught me to love the process of solving problems with code.</p>

        <p>Now, I'm a Software Engineer with a solid background in full-stack development, focusing on TDD, CI/CD, and
            DevOps. I love building efficient solutions quickly and setting up strong testing and monitoring tools
            around them. I'm always eager to learn new technologies and improve my skills, both technical and soft,
            because I aspire to become a Lead Software Engineer at a startup.</p>
    </div>

</div>