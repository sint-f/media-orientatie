<script>
  import Gamecard from './lib/Gamecard.svelte'
  import Header from './lib/Header.svelte'
  import Button from './lib/plus_button.svelte'
</script>

<main>
  <div>
    <Header/>
  </div>
  <div class="flex justify-center">
    <div class="container grid grid-cols-12 span-gap-5">
      <Gamecard/>
      <Gamecard/>
      <Button/>
    </div>
  </div>
</main>