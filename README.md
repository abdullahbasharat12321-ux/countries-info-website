# 🌍 Countries Info - Global Database Website

A beautiful, interactive website showcasing information about countries around the world with stunning animations and an intuitive user interface.

## Features

✨ **Amazing Animations**
- Smooth transitions and hover effects
- Twinkling star background
- Bouncing flags and pulsing badges
- Wave animations on cards
- Fade-in and scale animations

📊 **Comprehensive Data**
- Country information including:
  - Population statistics
  - Economic data (GDP, GDP per Capita)
  - Vital statistics (Birth rate, Death rate)
  - Geographic information
  - Global ranking and importance

🎯 **Interactive Features**
- Search functionality to find countries
- Filter by economy or population
- Detailed modal view for each country
- Responsive design for all devices
- Beautiful gradient backgrounds

🎨 **Modern Design**
- Dark theme with vibrant gradients
- Glassmorphism effects
- Professional color scheme
- Mobile-friendly layout
- Smooth scrolling

## File Structure

```
countries-info-website/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # JavaScript functionality
├── data.js          # Countries data
└── README.md        # Documentation
```

## How to Use

1. **Clone or Download** the repository
2. **Open `index.html`** in your web browser
3. **Browse countries** by:
   - Scrolling through the grid
   - Searching by country name or capital
   - Filtering by economy or population
4. **Click any country card** to view detailed information
5. **Close the modal** by clicking the X or outside the modal

## Key Sections

### Header
- Animated logo with bounce effect
- Global introduction message
- Beautiful gradient background

### Navigation
- Search bar with focus effects
- Filter buttons (All, Economy, Population)
- Sticky positioning for easy access

### Country Cards
- Flag emoji
- Country name
- Quick stats (Capital, Population, GDP, Rates)
- Global ranking badge
- Hover effects with scale and shadow

### Detailed Modal
- Full country information
- Organized sections:
  - Basic Information
  - Demographics
  - Economy
  - Global Importance & Ranking

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling, animations, and gradients
- **JavaScript** - Interactivity and DOM manipulation
- **Flexbox & Grid** - Modern layout techniques

## Animation Highlights

1. **Twinkling Stars** - Background animation
2. **Bounce Effect** - Logo and no-results emoji
3. **Wave Animation** - Flag emojis on hover
4. **Pulse Effect** - Ranking badges
5. **Slide & Fade** - Content entrance animations
6. **Scale Transform** - Card hover states
7. **Gradient Text** - Country names and titles

## Customization

### Add More Countries
Edit `data.js` and add country objects following this structure:

```javascript
{
    code: 'XX',
    name: 'Country Name',
    flag: '🏳️',
    capital: 'Capital City',
    region: 'Region',
    population: 0,
    area: 0,
    populationDensity: 0,
    birthRate: 0,
    deathRate: 0,
    gdp: 0,
    gdpPerCapita: 0,
    currency: 'XXX',
    unemploymentRate: 0,
    language: 'Language',
    ranking: 0,
    importance: 'Description of importance...'
}
```

### Modify Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --dark-color: #1f2937;
    --light-color: #f3f4f6;
}
```

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers

## Performance

- Optimized CSS animations
- Efficient DOM manipulation
- Lazy rendering on search/filter
- Smooth transitions at 60fps

## License

This project is open source and available for personal and educational use.

## Future Enhancements

- [ ] Add more countries to the database
- [ ] Implement sorting by different criteria
- [ ] Add country comparison feature
- [ ] Include historical data charts
- [ ] Add language localization
- [ ] Implement dark/light theme toggle
- [ ] Add data visualization with charts
- [ ] Create country relationship network

## Support

For issues or suggestions, please create an issue in the repository.

---

**Made with ❤️ by Abdullah Basharat** | 2024