## Welcome to devGalaktika

![alt text](https://github.com/danesto/galaktika/public/logo.png?raw=true)

Galaktika is a next.js boilerplate for creating a simple and minimalistic portfolio/blog
with focus on performance and experience over design and features. It is mostly inspired by [Bear Blog](https://bearblog.dev/) and [Hacker News](https://news.ycombinator.com/) to provide basic functionalities focused on content.

It is a great starting point for developers who just want to create a personal portfolio or
blog with the focus on content by providing you with an oportunity to start publishing your content right away.
Of course you could customize the colors, some styles and other stuff, but if you just care about writing, everything is already set up for you.

It uses MDX for writing articles and TailwindCSS for styling and is optimized for performance and basic SEO metadata.
It comes with preconfigured dark/light theme switcher and optional PostHog analytics integration.

### Where to start?

Once you get the access, just fork the repo and look around;

- File Structure:
  - `articles` folder: contains all your mdx blog posts
  - `lib` folder: contains some configuration level files togehter with metadata defined for static route pages
  - `components` folder: contains basic components used in the boiler-plate all which you can tweak and change per your needs

### Pages

Galaktika comes preconfigures with 3 pages. Since it is using next.js' app router, all pages are defined within the app/ directory.
Those 3 pages are: `home`, `blog` and `projects` page. You can update and change the structure of each depending on your preferences.
They contain basic SEO metadata imported from `/util/metadata` directory. `home` and `blog` are using to `ArticlesList` comoponent to display
articles, while `projects` page is importing the content from the `_projects.mdx` file within the same directory. Top level `not-found` page is also
present within the app folder and it is just displaying a basic 404 message.

### Updating the Logo

...

### Articles

...

### Custom MDX components

...

### Post utils

...

### Analytics

...

### Dark Theme

...

### Changing the Theme colors

....

### Favicon

...

### Dependencies

...
