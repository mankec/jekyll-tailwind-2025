# Jekyll with Tailwind barebone setup, deployable on GitHub Pages

This is an updated version of [jekyll-tailwind-2024](https://github.com/gusano/jekyll-tailwind-2024) so it can work with `jekyll 4.4.1`. Thanks to them for doing most of the work!

## Getting started

```
git clone git@github.com:mankec/jekyll-tailwind-2025.git
git remote rm git@github.com:mankec/jekyll-tailwind-2025.git
git remote add origin your-git-ssh-url
```

Now you can make changes and push them to your own repo.

I used Yarn. You can remove `yarn.lock` and run `npm` if you prefer it over Yarn.

```
bundle
yarn
bundle exec jekyll s --livereload
```

## GitHub Pages

This is an updated setup I took from this [blog post](https://mzrn.sh/2023/10/26/how-to-use-tailwind-css-with-jekyll-on-github-pages/). You are encouraged to read it. It's well-written and easy to understand.

This project already has everything set up, but there's a few things you will need to do on your own.
On GitHub go to your repo's settings and [enable](https://docs.github.com/en/pages/quickstart) GitHub Pages.

After that you will need to set [SSH Private Key](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-ssh-private-key-deploy_key) or [Personal Access Token](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-personal-access-token-personal_token).

Now that you have done it go to `.github/workflows/github-pages.yml` and update `PEACEIRIS_ACTIONS_DEPLOY_KEY` with a name that you chose.
