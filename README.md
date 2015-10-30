# ES6 + TypeScript + Babel + React + Karma: The Secret Recipe

## Getting started

You'll need [node / npm](https://nodejs.org/) and [tsd](http://definitelytyped.org/tsd/) installed globally.  To get up and running just enter:

```
npm install
tsd install
npm run watch
```

This will:

1. Download the npm packages you need
2. Download the typings from DefinitelyTyped that you need.
3. Compile the code and serve it up at [http://localhost:8080](http://localhost:8080)

Now you need dev tools.  There's a world of choice out there; there's [Atom](https://atom.io/), there's [VS Code](https://www.visualstudio.com/en-us/products/code-vs.aspx), there's [Sublime](http://www.sublimetext.com/).  There's even something called [Visual Studio](www.visualstudio.com).  It's all your choice really.

For myself I've been using Atom combined with the mighty [atom-typescript package](https://atom.io/packages/atom-typescript).  I advise you to give it a go.  You won't look back.

## I want to have an ASP.Net project and use Visual Studio + IIS Express to serve this instead

If you drop this code into a Visual Studio ASP.Net project should should be good to go.  You'll need this section in your `web.config` to ensure Visual Studio serves from the `dist` directory:

```
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Map all requests to 'dist' directory" stopProcessing="true">
          <match url="^(.*)$" />
          <action type="Rewrite" url="/dist/{R:1}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

And rather than running `npm run serve` you'll want to use `npm run watch`.  (This builds / watches your code / runs tests etc but does **not** spin up a web server.)
