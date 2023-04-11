<script>
    import '../global.css';
  </script>
  
  <nav>
    <a href="/dadjokes">Dad Jokes</a>
    <a href="/momjokes">Mom Jokes</a>
    <a href="/chuckjokes">Chuck Norris Jokes</a>
  </nav>

  <main>
    <slot />
  </main>

  <footer>
    <a href="/">&copy; Logan &copy; made &copy; this &copy; in &copy; 2023 &copy; i &copy; think &copy; lol &copy;</a>
  </footer>

  <style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:rgb(60, 60, 60);
      color: rgb(139, 58, 46);
    }
    main {
      grid-row: 2;
    }
    footer {
    grid-row: 3;
    position: sticky;
    bottom: 0;
  }
  </style>