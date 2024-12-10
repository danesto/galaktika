<div align="center">
    <a href="https://devgalaktika.vercel.app/">
        <img src="https://github.com/danesto/galaktika/blob/main/public/logo.png?raw=true" />
    </a>
</div>

**Fork the repository to get started.**

## Welcome to Galaktika

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

Galaktika comes preconfigured with 3 pages. Since it is using next.js' app router, all pages are defined within the app/ directory.
Those 3 pages are: `home`, `blog` and `projects` page. You can update and change the structure of each depending on your preferences.
They contain basic SEO metadata imported from `/util/metadata` directory. `home` and `blog` are using to `ArticlesList` comoponent to display
articles, while `projects` page is importing the content from the `_projects.mdx` file within the same directory. Top level `not-found` page is also
present within the app folder and it is just displaying a basic 404 message.

### Updating the Logo

Logo Component lives within `components/logo.tsx`. It's currently displaying Galaktika logo, just replace the image/text with whatever your
want.

### Articles

Articles are `mdx` files located in the root `articles` directory.

_Name the files using lowercase and dashes_ name of the files also represents the id of that articles and the slug.
Single article page `[slug]` within the blog folder renders each content using MDXRemote component from `next-mdx-remote/rsc` package. It is rendered
on server side that's why the component is import from the `rsc` directory, if you want to tweak or change something around how your MDX is displayed
or add custom components you can do it by changing the MDXRemote component options, see more: [next-mdx-remote repo](https://github.com/hashicorp/next-mdx-remote)

### Custom MDX components

If you are directly importing the mdx file content into the `jsx` like it's done for `projects` page then you can modify and add components to the
`mdx-components.tsx` file in the root directory, it's the official described in
[next.js' documentation](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components).
If you however want to add custom components to the `[slug]` page that uses `MDXRemote` just refer to [next-mdx-remote repo](https://github.com/hashicorp/next-mdx-remote)

### Post utils

...

### Analytics

Galaktika has post hog analytics setup.
To enable it just register an account with posthog and add the env variables listed in env.example.
post-hog-anlytics-provider.tsx is configured to work with variables defined in your env.
**docs is still updating**

### Dark Theme

ThemeSwitcher component is included and located inside the `components` folder. It uses `next-theme` to render a provider that's controlling
a dark/light theme with TailwindCSS [see here for more details:](https://www.npmjs.com/package/next-themes). Default theme is set to dark.
Targetting the dark theme only when styling is done via tailwind's dark mode selector `dark:some-css-rule`

### Changing the Theme colors

You can change the appearance and background/foreground colors of the app just by changing the `--foreground` and `--background` css variables inside the globals.css file

### Favicon

Favicon is the image located in the root of app directory, just replace it with your own.

### Dependencies

- MDX
- next-themes
- tailwindcss
  ...
