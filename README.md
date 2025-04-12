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
Go to your repo's settings and [enable](https://docs.github.com/en/pages/quickstart) GitHub Pages.

After that you will need to set [SSH Private Key](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-ssh-private-key-deploy_key) or [Personal Access Token](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-set-personal-access-token-personal_token).

GitHub Workflow is in `.github/workflows/github-pages.yml`.

Update `url` and `baseurl` in `_config.yml`.

```yaml
url: 'https://your-username.github.io'
baseurl: 'your-repo-name'
```

## Liquid syntax highlighting

I prefer using HTML over Markdown. However, [extension](https://marketplace.visualstudio.com/items/?itemName=sissel.shopify-liquid) I use for Liquid doesn't support syntax highlighting in HTML. Therefore, I have added in .vscode/settings.json.

```json
{
  "files.associations": {
    "*.html": "markdown"
  }
}
```

Now every HTML file will have Language Mode set to Markdown and syntax highlighting will work.
