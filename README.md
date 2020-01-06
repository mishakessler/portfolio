# Misha Kessler <!-- omit in toc -->
## Portfolio <!-- omit in toc -->

- [OVERVIEW](#OVERVIEW)
  - [Goals](#Goals)
- [DESIGN](#DESIGN)
  - [Personal Brand](#Personal-Brand)
  - [Iconography](#Iconography)
- [DEVELOPMENT](#DEVELOPMENT)
  - [Title](#Title)
  - [Languages, Frameworks, Libraries](#Languages-Frameworks-Libraries)
  - [Component Heirarchy](#Component-Heirarchy)

<br>

## OVERVIEW

This GitHub repo is for the personal portfolio site of Misha Kessler. As a young professional with diverse expertise and involvement in multiple industries, I was challenged to design and develop a website that could adequately communicate my experience while not overcrowding the user interface or causing inadvertent information overload.

### Goals

- Planning Goals
  - Create a thoroughly developed, helpful `README.md` file for my GitHub visitors.

- Design Goals
  - Package all of my prior and ongoing experiences and job positions, across all of my prior industries, 
  - Utilize best practices in UX/UI design for accessibility, navigability, and findability.
  - Exude my values and personality through visual appeal, clean design, and engaging interactivity.

- Development Goals
  - A well-structured React app, using smartly organized, modular, reusable components.
  - Smartly-architected data, allowing me to udpate my positions, passion projects, case studies, interviews, committees, memberships, and more, with minimal effort.
  - Clean, linted code, following naming conventions and style guides.

- Feature Goals
  - Downloadable files, including my technical resume, advocacy resume, _curriculum vitae_, speaker one sheet, etc.
  - Ample contact options, including social media and a form that automatically alerts my personal email.

- Styling Goals
  - Beautifully-styled components, utilizing my personal brand and color psychology to create a consistent, recognizable, friendly, knowledgeable digital presence and "feel."

- Future Features
  - New Landing Page (Make React Spring Cards in-page; combine "About" and add "featured in" logos.)
  - [Loading Indicators with React.Suspense](https://clubhouse.io/developer-how-to/reacts-suspense-is-going-to-evolve-over-the-coming/)
  - [Dark Mode Toggle](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)
  - [Multi-frame Rotation on Scroll](https://stackoverflow.com/questions/36723891/scroll-animation-change-image-on-scroll-so-it-appears-to-rotate/36730212)
  - React Spring Cards for Featured Advocacy Snippets/Quotes
  - Digital Resume with React Timeline (Component with positions; downloads.)
  - Project GIFs on Card Hover
  - Leadership Case Studies (Pop-ups with more information, videos, pictures rendered.)
  - Thought Pieces (Blog Posts)

<br>

## DESIGN

### Personal Brand

Throughout my years in the mental health and suicide prevention industries, my personal brand grew through various roles and contributions in social justice advocacy, public speaking, depressive disorders expertise, data and research consulting, public policy oversight, and more.

As my technical and design interests grew, I often started small projects as experiments, but this soon let to having a personal "logo," a color palette, custom iconography, and more... Ultimately, my own brand identity. This 

### Iconography

Custom Icons

Font Awesome Icons

| Code       | Icon                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| Wordpress  | wordpress                                                              |
| HTML       | html5                                                                  |
| CSS        | css3                                                                   |
| PHP        | php                                                                    |
| JavaScript | js square                                                              |
| jQuery     | https://icon-library.net/images/jquery-icon-png/jquery-icon-png-27.jpg |
| Node.js    | node-js                                                                |
| Express.js | https://pacewisdom.com/img/services/express/logo_Express.png           |
| React.js   | react                                                                  |
| PostGreSQL | server                                                                 |
| MySQL      | server                                                                 |
| Ruby       | gem                                                                    |
| Rails      | subway                                                                 |

| Apps                   | Icon                                                           |
| :--------------------- | :------------------------------------------------------------- |
| Git                    | git                                                            |
| GitHub                 | github square                                                  |
| Slack                  | slack                                                          |
| Responsive             | mobile-alt                                                     |
| Adobe Photoshop        | adobe                                                          |
| Adobe Illustrator      | https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg |
| Adobe InDesign         | https://cdn.worldvectorlogo.com/logos/indesign-cc.svg          |
| Accessibility Concerns | universal access                                               |

<br>

## DEVELOPMENT

### Title

### Languages, Frameworks, Libraries 

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Spring   | _Lorem ipsum dolor sit amet, consectetur._ |

### Component Heirarchy

``` structure
src
|__ assets/
      |__ graphics/
      |__ images/
      |__ projects/
            |__ barrel-aged/
            |__ cara-mia/
            |__ crisis-international/
            |__ crisis-international-enterprise/
            |__ live-through-this/
            |__ mental-healthable/
            |__ misha-kessler/
            |__ remedient/
            |__ rmdyio/
            |__ seven-summits/
            |__ six-feet-over/
|__ components/
      |__ cards/
            |__ Advocate.jsx
            |__ Designer.jsx
            |__ Developer.jsx
            |__ Entrepreneur.jsx
            |__ Hobbyist.jsx
      |__ case-studies/
            |__ DevelopmentCaseStudy.jsx
      |__ indices/
            |__ AdvocacyIndex.jsx
            |__ DesignIndex.jsx
            |__ DevelopmentIndex.jsx
            |__ LeadershipIndex.jsx
      |__ modules/
            |__ Header.jsx
            |__ Hero.jsx
            |__ Ipsum.jsx
            |__ Lorem.jsx
            |__ CTA.jsx
            |__ Footer.jsx
      |__ plug-ins/
            |__ ScrollToTop.jsx
|__ data/
      |__ AdvocacyProjects.jsx
      |__ DesignProjects.jsx
      |__ LeadershipProjects.jsx
      |__ WebsiteProjects.jsx
|__ pages/
      |__ About.jsx
      |__ Advocacy.jsx
      |__ Contact.jsx
      |__ Design.jsx
      |__ Development.jsx
      |__ Leadership.jsx
      |__ ErrorPage.jsx
      |__ Landing.jsx
      |__ SpaceTime.jsx
```
