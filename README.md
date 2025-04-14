# Jekyll with Tailwind barebone setup, deployable on GitHub Pages

This is an updated version of [jekyll-tailwind-2024](https://github.com/gusano/jekyll-tailwind-2024) so it can work with `jekyll 4.4.1`. Thanks to them for doing most of the work!

## Getting started

```
git clone git@github.com:mankec/jekyll-tailwind-2025.git my-new-repo
cd my-new-repo
git remote rm origin
git remote add origin your-git-ssh-url
```

Now you can make changes and push them to your own repo.

I used Yarn. You can remove `yarn.lock` and run `npm` if you prefer it over Yarn.

```bash
bundle
yarn
bundle exec jekyll s --livereload
```

## GitHub Pages

This is an updated setup I took from this [blog post](https://mzrn.sh/2023/10/26/how-to-use-tailwind-css-with-jekyll-on-github-pages/). You are encouraged to read it. It's well-written and easy to understand.


This project almost has everything set up, but there's a few things you will need to do on your own.

Create new branch called `gh-pages`. If you don't want to use GitHub GUI you can run these commands.

```
git checkout -b gh-pages
git push -u origin gh-pages
git checkout -
```

Go to your repo's settings and [enable](https://docs.github.com/en/pages/quickstart) GitHub Pages. Select `gh-pages` as a branch you want your site to be built from.

After that you will need to set [SSH Private Key](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-ssh-private-key-deploy_key) or [Personal Access Token](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-personal-access-token-personal_token). Deploy key needs to have allowed write access.

GitHub Workflow is in `.github/workflows/github-pages.yml`.

Update `url` and `baseurl` in `_config.yml`.

```yaml
url: 'https://your-username.github.io'
baseurl: 'your-repo-name'
```

## Liquid syntax highlighting

[Extension](https://marketplace.visualstudio.com/items/?itemName=sissel.shopify-liquid) for Liquid that I use doesn't support HTML. Therefore, I added in `.vscode/settings.json`.

```json
{
  "files.associations": {
    "*.html": "liquid"
  }
}
```

Now every HTML file have their Language Mode set to Liquid.
