# Outlet — Site vitrine & documentation

Site vitrine et documentation d'[Outlet](https://github.com/Leroy-Florian/Outlet-CLI),
le registre copier-coller d'infrastructure backend pour .NET. Construit avec
[VitePress](https://vitepress.dev/) ; la documentation (en/fr) a été migrée depuis
`Outlet-CLI/docs`.

## Développement

```shell
npm install
npm run dev      # serveur de dev avec HMR
npm run build    # build de production dans .vitepress/dist
npm run preview  # prévisualisation du build
```

## Déploiement

Le workflow `.github/workflows/deploy.yml` publie le site sur GitHub Pages à chaque
push sur `main`. Le site est servi sous `/Outlet-Front-/` (variable `SITE_BASE`) ;
passer à `/` une fois un domaine personnalisé configuré.
