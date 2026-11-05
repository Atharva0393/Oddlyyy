const fs = require('fs');

const letters = fs.readFileSync('public/letters.svg', 'utf8');
const dot = fs.readFileSync('public/dot.svg', 'utf8');
const doodle = fs.readFileSync('public/doodle.svg', 'utf8');

const getPath = (svg) => {
  const m = svg.match(/<path d="([^"]+)"/);
  return m ? m[1] : '';
};

const lettersPath = getPath(letters);
const dotPath = getPath(dot);
const doodlePath = getPath(doodle);

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="51 12 698 221" width="698" height="221" fill="none" aria-label="oddlyyy.">
  <path d="${lettersPath}" fill="#202028" fill-rule="evenodd" />
  <path d="${dotPath}" fill="#A04C34" fill-rule="evenodd" />
</svg>`;

fs.writeFileSync('public/oddlyyy-logo.svg', fullSvg);
console.log('Created public/oddlyyy-logo.svg successfully!');

// Save paths to json for easy React component import
fs.writeFileSync('src/components/ui/oddlyyy-logo-paths.json', JSON.stringify({
  letters: lettersPath,
  dot: dotPath,
  doodle: doodlePath,
  viewBox: "51 12 698 221",
  width: 698,
  height: 221,
  aspectRatio: 698 / 221
}, null, 2));
console.log('Created src/components/ui/oddlyyy-logo-paths.json');

