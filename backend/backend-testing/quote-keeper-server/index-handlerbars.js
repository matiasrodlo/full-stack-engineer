<!-- views/index.handlebars -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title></title>
</head>

<body>
  <section id="quotes">
    {{quote}} - {{attributed}} - {{source}}

  </section>

  <form action="/" method="post">
    <label for="attributed">Attributed to:</label>
    <input id="attributed" name="attributed">

    <label for="source">From:</label>
    <input id="source" name="source">

    <label for="quote">Quote:</label>
    <textarea id="quote" name="quote"></textarea>

    <input type="submit" name="submit">
  </form>
</body>

</html>