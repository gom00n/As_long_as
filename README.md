# As Long As

**Put time into perspective.**

A web tool that helps you understand the duration of historical and current events by comparing them to each other. Ever wondered how the Ukraine War compares to World War I? Or how long the iPhone has been around compared to the Space Race?

🔗 **Live Demo:** [gom00n.github.io/as-long-as](https://gom00n.github.io/as-long-as/)

![Screenshot](screenshot.png)

## Features

### 🔍 Find a Historical Match
Select a current or recent event (like the Ukraine War, COVID pandemic, or Trump's presidency) and instantly find a historical event of similar duration.

### 📊 Compare Time Periods
Enter any two date ranges and see how they compare — get the exact ratio and duration breakdown.

### ⚡ Quick Select Gallery
Click on famous historical events to instantly load them into the comparison tool.

## Events Database

The database includes 100+ events from 1900 onwards, organized by category:

- **Wars & Conflicts** — World Wars, Vietnam, Korea, Gulf War, etc.
- **US Presidents** — From Theodore Roosevelt to Biden
- **Cold War Era** — Space Race, Berlin Wall, Cuban Missile Crisis
- **Economic Events** — Great Depression, Dot-com bubble, 2008 Crisis
- **Social Movements** — Civil Rights, Apartheid, Arab Spring
- **Technology** — Apollo Program, Internet era, Smartphone revolution
- **Pandemics** — Spanish Flu, HIV/AIDS, COVID-19
- **Cultural** — Beatles, MTV era, Marvel Cinematic Universe
- And many more...

## Project Structure

```
as-long-as/
├── index.html          # Main application
├── data/
│   └── events.js       # Historical events database
└── README.md           # This file
```

## Contributing

Want to add more events? The database is in `data/events.js`. Each event needs:

```javascript
{ 
    name: "Event Name", 
    start: "YYYY-MM-DD", 
    end: "YYYY-MM-DD"  // or TODAY for ongoing events
}
```

## Local Development

Just open `index.html` in your browser. No build tools required!

For local server (optional):
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

Then open `http://localhost:8000`

## Inspired By

The idea came from news articles comparing the duration of current events to historical ones — like when the Ukraine War surpassed the length of WWII for Russia. This tool lets anyone explore these comparisons interactively.

## Author

Created by [@gom00n](https://github.com/gom00n)

---

*Time is relative. Perspective is everything.*
