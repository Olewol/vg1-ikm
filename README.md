# VG1 IKM – Virtuelle maskiner, Nettverk & Brukeradministrasjon

Undervisningsside for VG1 Informasjonsteknologi og medieproduksjon – Teknologiforståelse.

## Innhold

| Side | Beskrivelse |
|---|---|
| `index.html` | Startside med oversikt og kompetansemål |
| `dag1.html` | Dag 1 – Virtualisering, VMware, snapshot |
| `dag2.html` | Dag 2 – Nettverksmodi, IP, statisk IP |
| `dag3.html` | Dag 3 – Brukeradministrasjon Windows & Ubuntu |
| `ad-guide.html` | Active Directory på Windows Server 2025 (DC01) |
| `oppslagsverk.html` | Kommandoreferanse for Windows og Ubuntu |
| `kunnskapstest.html` | 16 spørsmål med skjult fasit |
| `dokumentasjonsmal.html` | Mal for elevenes innlevering |

## Teknisk

- Ren HTML/CSS/JS – ingen byggsteg nødvendig
- Autopubliseres via Netlify ved push til `main`
- Google Fonts via CDN (Space Grotesk, JetBrains Mono, Fraunces)

## Lokal utvikling

Åpne `index.html` direkte i nettleser, eller bruk en enkel HTTP-server:

```bash
python3 -m http.server 3000
```

## Deploy til Netlify

1. Push dette repoet til GitHub
2. Koble GitHub-repoet til Netlify (Sites → Import from Git)
3. Publish directory: `.` (rot)
4. Build command: (blank)
5. Netlify deployer automatisk ved hvert push til `main`

## Basert på

- Udir læreplanen IKM01-01
- NDLA Teknologiforståelse
- Microsoft Learn – Windows Server og Active Directory
