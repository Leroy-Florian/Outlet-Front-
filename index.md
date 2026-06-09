---
layout: home

hero:
  name: Outlet
  text: Copy-paste backend infrastructure for .NET
  tagline: One generic port, several swappable adapters. Copy the code into your repo and own it — shadcn/ui, but for .NET backend concerns.
  actions:
    - theme: brand
      text: What is Outlet?
      link: /guide/introduction
    - theme: alt
      text: Getting started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/Leroy-Florian/Outlet-CLI

features:
  - icon: 📦
    title: You own the code
    details: No runtime dependency on Outlet. Uninstalling it breaks nothing — the code lives in your repo and is yours to edit.
  - icon: 🔌
    title: Swappable adapters
    details: Each concern exposes a minimal generic port with several interchangeable adapters. Switch provider behind the same port in one line of DI.
  - icon: 🧪
    title: Hexagonal & tested
    details: Contracts have zero external dependencies. Every registry item compiles and is tested — the manifest never lies.
---

<div class="home-section">

## How it works

<p class="lead">Three commands between an empty project and working, provider-agnostic infrastructure that you fully own.</p>

<div class="home-steps">
  <div class="home-step">
    <span class="num">1</span>
    <h3>Initialize</h3>
    <p>Run <code>outlet init</code> in your solution. Outlet detects your environment from evaluated MSBuild values and writes an <code>outlet.json</code> lockfile.</p>
  </div>
  <div class="home-step">
    <span class="num">2</span>
    <h3>Add a concern</h3>
    <p>Run <code>outlet add email-smtp</code>. Dependencies are resolved, namespaces are rewritten to match your project, and NuGet packages are added via CPM.</p>
  </div>
  <div class="home-step">
    <span class="num">3</span>
    <h3>Own &amp; swap</h3>
    <p>The code is yours: edit it freely. Want SendGrid instead of SMTP? Add the adapter and change one <code>AddXxx()</code> line — the port stays identical.</p>
  </div>
</div>

## From the terminal

```shell
dotnet tool install -g outlet

outlet init
outlet add email-smtp
outlet list
```

```csharp
// Same port, swappable provider — switching is a one-line change.
services.AddSmtpEmail(options => options.Host = "smtp.example.com");
// services.AddSendGridEmail(options => options.ApiKey = "...");

public sealed class WelcomeNotifier(IEmailSender email)
{
    public Task SendAsync(User user) =>
        email.SendAsync(new EmailMessage(user.Address, "Welcome!", "..."));
}
```

</div>
