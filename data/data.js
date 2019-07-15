let data = [
  {
    cat: "library",
    name: "D3",
    link: "https://d3js.org/",
    value: 30,
    icon: "img/d3.svg",
    desc: `
		D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for
		producing dynamic, interactive data visualizations in web browsers.
		It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
		This infographic you are viewing is made with D3.
	`
  },
  {
    cat: "library",
    name: "Raphaël",
    value: 10,
    icon: "img/raphael.svg",
    desc: `
		Raphaël is a cross-browser JavaScript library that draws Vector graphics for web sites.
		It will use SVG for most browsers, but will use VML for older versions of Internet Explorer.
	`
  },
  {
    cat: "library",
    name: "Relay",
    value: 70,
    icon: "img/relay.svg",
    desc: `
		A JavaScript framework for building data-driven React applications.
		It uses GraphQL as the query language to exchange data between app and server efficiently.
		Queries live next to the views that rely on them, so you can easily reason
		about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
	`
  },
  {
    cat: "library",
    name: "Three.js",
    value: 40,
    icon: "img/threejs.png",
    desc: `
		Three.js allows the creation of GPU-accelerated 3D animations using
		the JavaScript language as part of a website without relying on
		proprietary browser plugins. This is possible thanks to the advent of WebGL.
	`
  },
  {
    cat: "library sub",
    name: "Lodash",
    value: 30,
    icon: "img/lodash.svg",
    desc: `
		Lodash is a JavaScript library which provides <strong>utility functions</strong> for
		common programming tasks using the functional programming paradigm.`
  },
  {
    cat: "library sub",
    name: "Moment JS",
    value: 30,
    icon: "img/momentjs.png",
    desc: `
		Handy and resourceful JavaScript library to parse, validate, manipulate, and display dates and times.
	`
  },
  {
    cat: "library sub",
    name: "Numeral.js",
    value: 20,
    icon: "Numeral.js",
    desc: `
		A javascript library for formatting and manipulating numbers.
	`
  },
  {
    cat: "library sub",
    name: "Redux",
    value: 80,
    icon: "img/redux.svg",
    desc: `
		Redux is an open-source JavaScript library designed for managing
		application state. It is primarily used together with React for building user interfaces.
		Redux is inspired by Facebook’s Flux and influenced by functional programming language Elm.
	`
  },
  {
    cat: "framework",
    name: "Angular 2.0",
    value: 30,
    icon: "img/angular2.svg",
    desc: `
		Angular (commonly referred to as 'Angular 2+' or 'Angular 2') is a TypeScript-based
		open-source front-end web application platform led by the Angular Team at Google and
		by a community of individuals and corporations to address all of the parts of the
		developer's workflow while building complex web applications.
	`
  },
  /*{
	cat: 'framework', name: 'Trails.JS', value: 10,
	icon: '',
},*/ {
    cat: "framework",
    name: "Bootstrap CSS",
    value: 50,
    icon: "img/bootstrap.svg",
    desc: `
		Bootstrap is a free and open-source front-end web framework for designing websites
		and web applications. It contains HTML-and CSS-based design templates for typography,
		forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
	`
  },
  {
    cat: "framework",
    name: "Ember JS",
    value: 10,
    icon: "img/ember.png",
    desc: `
		Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel
		(MVVM) pattern. It allows developers to create scalable single-page web applications by
		incorporating common idioms and best practices into the framework.
	`
  },
  {
    cat: "framework",
    name: "ExpressJS",
    value: 30,
    icon: "img/expressjs.png",
    desc: `
		Express.js, or simply Express, is a JavaScript framework designed for building web applications and APIs.
		It is the de facto server framework for Node.js.
	`
  },
  {
    cat: "framework",
    name: "Hexo",
    value: 50,
    icon: "img/hexo.png",
    desc: `
		A fast, simple & powerful blog-aware <strong>static website</strong> generator, powered by Node.js.
	`
  },
  {
    cat: "framework",
    name: "ReactJS",
    value: 100,
    icon: "img/react.png",
    desc: `
		React (sometimes written React.js or ReactJS) is an open-source JavaScript framework maintained by Facebook for building user interfaces.
		React processes only user interface in applications and can be used in combination with other JavaScript libraries
		or frameworks such as Redux, Flux, Backbone...
	`
  },
  {
    cat: "tooling",
    name: "Atom",
    value: 10,
    icon: "img/atom.png",
    desc: `
		Atom is a free and open-source text and source code editor for macOS, Linux, and Windows with support
		for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.
		Atom is a desktop application built using web technologies.
	`
  },
  {
    cat: "tooling",
    name: "Google Chrome & Devtool",
    value: 70,
    icon: "img/chrome-devtools.svg",
    desc: `
		<strong>Web development tools (devtool)</strong> allow web developers to test and debug their code.
		At Nau, we use the one come with Google Chrome to debug our apps. It is one the the most powerful
		and sophisticated devtool available.
	`
  },
  {
    cat: "tooling",
    name: "Jenkins CI",
    value: 30,
    icon: "img/jenkins.png",
    desc: `
		Jenkins is an open source automation server. Jenkins helps to automate the non-human part of
		the whole software development process, with now common things like continuous integration,
		but by further empowering teams to implement the technical part of a Continuous Delivery.
	`
  },
  {
    cat: "tooling",
    name: "Sublime Text 3",
    value: 100,
    icon: "img/sublimetext.png",
    desc: `
		Sublime Text 3 is a powerful and cross-platform source code editor. It is well-known for
		introducing the concept of multi-cursor and lots of text editing command. Besides, its
		plugin ecosystem is very rich which allows enhancing productivity to the fullest.
	`
  },
  {
    cat: "tooling",
    name: "Visual Studio Code",
    value: 50,
    icon: "img/vscode.png",
    desc: `
		Visual Studio Code is a cross-platform source code editor developed by Microsoft.
		It includes support for debugging, embedded Git control, syntax highlighting,
		intelligent code completion, snippets, and code refactoring. Its extensions eco system is
		growing quickly and it is becoming the best Front End editors out there.
	`
  },
  {
    cat: "tooling",
    name: "Performance Tooling",
    value: 30,
    icon: "Performance;Tooling",
    desc: `
		At Nau, web performance is our top priority when development web sites and applications.
		We're practicing code optimization and Front End delivery optimization from day 1.
		To measure the resuslts, we use several tools to audit and benchmark our applications,
		including (but not limit to): Chrome devtool timeline & audit, Google PageSpeed Insights, Web Page Test, Website Grader...
	`
  },
  {
    cat: "tooling",
    name: "Yeoman generator for Nau Workflow",
    value: 20,
    icon: "img/yeoman.png",
    desc: `
		Yeoman is an open source, command-line interface set of tools mainly used to generate
		structure and scaffolding for new projects, especially in JavaScript and Node.js.
		At Nau, we have developed a Yeoman generator that help quickly set up new projects aligned with
		Nau's conventions and standards.
	`
  },
  {
    cat: "tooling",
    name: "live-server",
    value: 30,
    icon: "live-server",
    desc: `
		A Node.js-based developer web server for quickly test apps and web pages with some
		magic of 'auto-reload' on the browser.
	`
  },
  {
    cat: "tooling",
    name: "PostCSS",
    value: 30,
    icon: "img/postcss.svg",
    desc: `
		PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.<br>
		We use PostCSS mainly for auto-vendor-prefixing, but very soon we'll use it for NextCSS compilation.
	`
  },
  {
    cat: "backend",
    name: "Elastic Search",
    value: 10,
    icon: "Elastic;Search",
    desc: `
		A specialized database software for high performance search queries.
	`
  },
  {
    cat: "backend",
    name: "Keystone CMS",
    value: 50,
    icon: "img/keystonejs.png",
    desc: `
		The de-facto CMS system for website built with Node.js. It can be compared with
		Wordpress of PHP language.
	`
  },
  {
    cat: "backend",
    name: "KoaJS",
    value: 10,
    icon: "img/koajs.png",
    desc: `
		The advanced and improved version of ExpressJS, with leaner middlewares architecture
		thanks to the avent of ES6 generators.
	`
  },
  {
    cat: "backend",
    name: "Loopback",
    value: 30,
    icon: "img/loopback.svg",
    desc: `
		Powerful API-focused web framework built for Node.js. It feature easy to use configurations
		and auto API documentation page.
	`
  },
  {
    cat: "backend",
    name: "Restify",
    value: 20,
    icon: "img/restify.png",
    desc: `
		High performance API development framework, built for Node.js. It has some convenient wrapper
		to automatically generate admin backoffice site and API documentation page.
	`
  },
  {
    cat: "backend",
    name: "MongoDB",
    value: 70,
    icon: "img/mongodb.png",
    desc: `
		The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,
		high performance NoSQL database and can be used for small and large websites.
	`
  },
  {
    cat: "backend",
    name: "NodeJS",
    value: 100,
    icon: "img/nodejs.svg",
    desc: `
		Node.js is a cross-platform JavaScript runtime environment.
		Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to
		other server-side solution. Node.js ecosystem is growing very fast and is trusted by a lot of big companies who
		are adopting it to enhance current products as well as for new ones.
	`
  },
  {
    cat: "platform",
    name: "Docker Platform",
    value: 10,
    icon: "img/docker.svg",
    desc: `
		Docker is an open-source project that automates the deployment of applications inside software containers.
		At Nau, we're still learning this technology to later facilitate easy web app deployments.
	`
  },
  {
    cat: "platform",
    name: "MeteorJS",
    value: 80,
    icon: "img/meteor.svg",
    desc: `
		MeteorJS is a free and open-source JavaScript web framework written using Node.js.
		Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.
		It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe
		pattern to automatically propagate data changes to clients without requiring the developer
		to write any synchronization code.
	`
  },
  {
    cat: "platform",
    name: "Phonegap",
    value: 50,
    icon: "img/phonegap.png",
    desc: `
		A platform, library and tool for building hybrid mobile app.
	`
  },
  {
    cat: "platform",
    name: "Reaction Commerce",
    value: 20,
    icon: "img/reactioncommerce.png",
    desc: `
		Reaction Commerce is the first open source, real-time platform to
		combine the flexibility developers and designers want with the stability
		and support businesses need. ReactionCommerce is based on MeteorJS platform.
	`
  },
  {
    cat: "platform",
    name: "ReactNative",
    value: 10,
    icon: "img/reactnative.png",
    desc: `
		React Native lets you build mobile apps using only JavaScript.
		It uses the same design as React, letting us compose a rich
		mobile UI from declarative components.
	`
  },
  {
    cat: "platform",
    name: "SquareSpace",
    value: 30,
    icon: "img/squarespace.svg",
    desc: `
		Squarespace is a SaaS-based content management system-integrated ecommerce-aware website builder and blogging platform.
		At Nau, we have built a website for Squarespace using their low-level API which allowed fully customization
		of the interface and other Front End functionalities.
	`
  },
  {
    cat: "language",
    name: "HTML5 & CSS3",
    value: 100,
    icon: "img/html5-css3.png",
    desc: `
		The languages of the Web Front End. At Nau, they are in our blood and with them we can build
		world-class websites with any kind of visual effects or designs requested.
	`
  },
  {
    cat: "language",
    name: "JavaScript",
    value: 100,
    icon: "img/javascript.png",
    desc: `
		JavaScript is the heart of modern Web front end development and essential element of any Single Page
		Applications. In Nau, we invest a good deal in training developers to have good control of this universal language
		and now caplable of developing full stack websites with only JavaScript.
	`
  },
  {
    cat: "language",
    name: "CSS Next",
    value: 10,
    icon: "img/cssnext.png",
    desc: `
		The CSS language specs of the future but with the help of PostCSS (like Babel for ES6),
		we can use CSS Next today.
	`
  },
  {
    cat: "language",
    name: "GraphQL",
    value: 50,
    icon: "img/graphql.svg",
    desc: `
		GraphQL is a data query language developed by Facebook publicly released in 2015.
		It provides an alternative to REST and ad-hoc webservice architectures. In combination
		with RelayJS, this combo help us reduce the time to develop web apps for weeks.
	`
  },
  {
    cat: "language",
    name: "LESS CSS",
    value: 20,
    icon: "img/less.svg",
    desc: `
		A preprocessor language to be compiled to CSS. This language is not as popular nowadays and we
		only use them when requested.
	`
  },
  {
    cat: "language",
    name: "SASS (SCSS flavor)",
    value: 70,
    icon: "img/sass.png",
    desc: `
		This is our main CSS preprocessor language helping us lay structured foundation to CSS as well
		as assisting on writing more convenient BEM anotations.
	`
  },
  {
    cat: "language",
    name: "TypeScript 2",
    value: 30,
    icon: "img/typescript.png",
    desc: `
		The strict-typing flavor of ECMAScript, always requires a compiler to compile to vanilla JavaScript
		but the type checking and other syntactical sugar are exceptional. Right now, we only use it for
		Angular 2 projects when needed.
	`
  },
  {
    cat: "workflow",
    name: "code.naustud.io",
    value: 100,
    icon: "img/naustudio.svg",
    desc: `
		A set of guidelines, presets, configs and stadard documentation for Nau developers.
		Please visit the document site at: <a href='http://code.naustud.io' target='_blank'>code.naustud.io</a>
	`
  },
  {
    cat: "workflow",
    name: "Mobile First",
    value: 100,
    icon: "Mobile First",
    desc: `
		This is one of our most important principle for web and mobile development.
		More details will be discussed in blog later.
	`
  },
  {
    cat: "workflow",
    name: "BabelJS",
    value: 50,
    icon: "img/babel.png",
    desc: `
		The de-facto tool to work with ECMAScript 6 and ReactJS nowadays.
	`
  },
  {
    cat: "workflow",
    name: "CSS BEM Notation",
    value: 70,
    icon: "CSS BEM Notation",
    desc: `
		Our naming standard for CSS, which enhance collaboration, documentation and reusability of
		CSS rules.
	`
  },
  {
    cat: "workflow",
    name: "Front End Code Guide",
    value: 30,
    icon: "Front End;Code Guide",
    desc: `
		Based on an existing best practice document for HTML and CSS. We're adopting it as our standards
		and guideline.
	`
  },
  {
    cat: "workflow",
    name: "ESLint",
    value: 20,
    icon: "img/eslint.svg",
    desc: `
		The tool to check and validate JavaScript code when we develop and prevent potential issues with code.
	`
  },
  {
    cat: "workflow",
    name: "Gitflow Workflow",
    value: 70,
    icon: "img/gitflow.png",
    desc: `
		Our code version control tool is Git, and Gitflow is one of its workflow standard which
		ensure good collaboration and avoid conflict-resolving efforts. For more info, visit: code.naustud.io
	`
  },
  {
    cat: "workflow",
    name: "GulpJS",
    value: 50,
    icon: "img/gulp.png",
    desc: `
		GulpJS is a task automation tools written for Node.js. It is among the most popular
		Front End and Node project automation tools nowadays
	`
  },
  {
    cat: "workflow",
    name: "Nau Code Styles",
    value: 50,
    icon: "Nau Code Styles",
    desc: `
		Based on AirBnB's well-defined JavaScript code styles. Our derivation has some different standards such as
		TAB indentation. This code style has an accompanied ESLint config.
	`
  },
  {
    cat: "workflow",
    name: "Stylelint",
    value: 50,
    icon: "img/stylelint.svg",
    desc: `
		Our on-stop tool to validate both CSS and SCSS with a set of conventions and guidelines from our best practice.
	`
  },
  {
    cat: "workflow",
    name: "SystemJS",
    value: 20,
    icon: "SystemJS",
    desc: `
		A module loader library that come along Angular 2. Its use is scarce, however.
	`
  },
  {
    cat: "workflow",
    name: "Webpack",
    value: 30,
    icon: "img/webpack.svg",
    desc: `
		A module bundler library that is becoming de-facto tool to use in ReactJS or SPA apps nowadays.
	`
  },
  {
    cat: "legacy",
    name: "AngularJS 1",
    value: 10,
    icon: "img/angular1.png",
    desc: `
		Angular 1. Deprecated
	`
  },
  {
    cat: "legacy",
    name: "Backbone",
    value: 30,
    icon: "img/backbone.png",
    desc: `
		A Model-View library. Deprecated
	`
  },
  {
    cat: "legacy",
    name: "Grunt & Automation Stack",
    value: 30,
    icon: "img/grunt.svg",
    desc: `
		Grunt task automation tool. Deprecated
	`
  },
  {
    cat: "legacy",
    name: "jQuery",
    value: 50,
    icon: "img/jquery.png",
    desc: `
		Deprecated, because <a href='http://youmightnotneedjquery.com/' target='_blank'>youmightnotneedjquery.com</a>
	`
  },
  {
    cat: "legacy",
    name: "RequireJS & AMD",
    value: 30,
    icon: "img/requirejs.svg",
    desc: `
		AMD module loader. Deprecated and replaced by ES module and Webpack.
	`
  },
  {
    cat: "legacy tooling",
    name: "Browser Sync",
    value: 40,
    icon: "Browser Sync",
    desc: `
		Web development server popular among gulp/grunt web apps. No deprecated and replaced by live-server
		or webpackDevServer.
	`
  },
  {
    cat: "legacy tooling",
    name: "Git Pre-commit",
    value: 30,
    icon: "Git;Pre-commit",
    desc: `
		Pre-commit hook for git, now deprecated due to slow commit time. Code validation should be done
		in the code editor.
	`
  },
  {
    cat: "legacy tooling",
    name: "http-server",
    value: 20,
    icon: "http-server",
    desc: `
		A quick test web server based on Node.js, deprecated and replaced by live-server.
	`
  },
  {
    cat: "legacy tooling",
    name: "LiveReload",
    value: 20,
    icon: "Live;Reload",
    desc: `
		A propritery auto-reload solution for web developers, now deprecated in favor of live-server and
		hot module reload in Webpack.
	`
  }
];
