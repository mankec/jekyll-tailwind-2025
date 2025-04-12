# Jekyll with Tailwind, barebone setup

This is an updated version of gusano's [jekyll-tailwind-2024](https://github.com/gusano/jekyll-tailwind-2024) so it can work with `jekyll 4.4.1`. Thanks to them for doing most of the work!

```
git clone git@github.com:mankec/jekyll-tailwind-2025.git
git remote rm git@github.com:mankec/jekyll-tailwind-2025.git
git remote add origin your-git-ssh-url
```

Now you can do what you want with it.

I used Yarn. You can remove `yarn.lock` and run `npm` if you prefer it over Yarn.

```
bundle
yarn
bundle exec jekyll s --livereload
```