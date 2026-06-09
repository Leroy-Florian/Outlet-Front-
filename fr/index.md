---
layout: home

hero:
  name: Outlet
  text: De l'infrastructure backend .NET en copier-coller
  tagline: Un port générique, plusieurs adapters interchangeables. Copiez le code dans votre repo et appropriez-le — shadcn/ui, mais pour les préoccupations backend en .NET.
  actions:
    - theme: brand
      text: Qu'est-ce qu'Outlet ?
      link: /fr/guide/introduction
    - theme: alt
      text: Démarrage
      link: /fr/guide/getting-started
    - theme: alt
      text: Voir sur GitHub
      link: https://github.com/Leroy-Florian/Outlet-CLI

features:
  - icon: 📦
    title: Vous possédez le code
    details: Aucune dépendance runtime à Outlet. Le désinstaller ne casse rien — le code vit dans votre repo et vous est propre à éditer.
  - icon: 🔌
    title: Adapters interchangeables
    details: Chaque préoccupation expose un port générique minimal avec plusieurs adapters interchangeables. Changez de provider derrière le même port en une ligne de DI.
  - icon: 🧪
    title: Hexagonal et testé
    details: Les contrats n'ont aucune dépendance externe. Chaque item du registre compile et est testé — le manifeste ne ment jamais.
---

<div class="home-section">

## Comment ça marche

<p class="lead">Trois commandes entre un projet vide et une infrastructure fonctionnelle, indépendante du provider, que vous possédez entièrement.</p>

<div class="home-steps">
  <div class="home-step">
    <span class="num">1</span>
    <h3>Initialiser</h3>
    <p>Lancez <code>outlet init</code> dans votre solution. Outlet détecte votre environnement à partir des valeurs MSBuild évaluées et écrit un lockfile <code>outlet.json</code>.</p>
  </div>
  <div class="home-step">
    <span class="num">2</span>
    <h3>Ajouter une préoccupation</h3>
    <p>Lancez <code>outlet add email-smtp</code>. Les dépendances sont résolues, les namespaces réécrits pour votre projet, et les packages NuGet ajoutés via CPM.</p>
  </div>
  <div class="home-step">
    <span class="num">3</span>
    <h3>Posséder &amp; échanger</h3>
    <p>Le code est à vous : éditez-le librement. SendGrid plutôt que SMTP ? Ajoutez l'adapter et changez une ligne <code>AddXxx()</code> — le port reste identique.</p>
  </div>
</div>

## Depuis le terminal

```shell
dotnet tool install -g outlet

outlet init
outlet add email-smtp
outlet list
```

```csharp
// Même port, provider interchangeable — changer tient en une ligne.
services.AddSmtpEmail(options => options.Host = "smtp.example.com");
// services.AddSendGridEmail(options => options.ApiKey = "...");

public sealed class WelcomeNotifier(IEmailSender email)
{
    public Task SendAsync(User user) =>
        email.SendAsync(new EmailMessage(user.Address, "Welcome!", "..."));
}
```

</div>
