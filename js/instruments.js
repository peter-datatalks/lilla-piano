// Instrument catalogue. `gm` is the General MIDI sample set (FluidR3_GM), `synth` is the
// built-in synth preset used while samples load or when offline. `transpose` moves the
// keyboard into the instrument's natural range. `sustain` instruments loop while held.
// Icons are drawn in icons.js, keyed by instrument id.

export const FAMILIES = [
  { id: 'keys', name: 'Piano & orgel', icon: 'piano', color: '#e53935' },
  { id: 'strings', name: 'Stråkar', icon: 'violin', color: '#fb8c00' },
  { id: 'woodwinds', name: 'Träblås', icon: 'flute', color: '#43a047' },
  { id: 'brass', name: 'Bleckblås', icon: 'trumpet', color: '#f9a825' },
  { id: 'percussion', name: 'Slagverk', icon: 'timpani', color: '#1e88e5' },
  { id: 'sax', name: 'Saxofon', icon: 'alto_sax', color: '#8e24aa' },
];

const SUSTAIN = { sustain: true, release: 0.18 };
const PERC = { sustain: false, ignoreRelease: true };

export const INSTRUMENTS = [
  { id: 'piano', name: 'Piano', family: 'keys', gm: 'acoustic_grand_piano', synth: 'piano', release: 0.5 },
  { id: 'jazz', name: 'Jazzpiano', family: 'keys', gm: 'electric_piano_1', synth: 'jazz', release: 0.4 },
  { id: 'organ', name: 'Kyrkorgel', family: 'keys', gm: 'church_organ', synth: 'organ', ...SUSTAIN },
  { id: 'celesta', name: 'Celesta', family: 'keys', gm: 'celesta', synth: 'glock', transpose: 12, ...PERC },

  { id: 'violin', name: 'Fiol', family: 'strings', gm: 'violin', synth: 'organ', ...SUSTAIN },
  { id: 'viola', name: 'Altfiol', family: 'strings', gm: 'viola', synth: 'organ', ...SUSTAIN },
  { id: 'cello', name: 'Cello', family: 'strings', gm: 'cello', synth: 'organ', transpose: -12, ...SUSTAIN },
  { id: 'contrabass', name: 'Kontrabas', family: 'strings', gm: 'contrabass', synth: 'organ', transpose: -24, ...SUSTAIN },
  { id: 'strings', name: 'Stråkorkester', icon: 'violin', family: 'strings', gm: 'string_ensemble_1', synth: 'organ', ...SUSTAIN },
  { id: 'pizzicato', name: 'Pizzicato', family: 'strings', gm: 'pizzicato_strings', synth: 'piano', ...PERC },
  { id: 'harp', name: 'Harpa', family: 'strings', gm: 'orchestral_harp', synth: 'piano', ...PERC },

  { id: 'piccolo', name: 'Piccolaflöjt', family: 'woodwinds', gm: 'piccolo', synth: 'flute', transpose: 12, ...SUSTAIN },
  { id: 'flute', name: 'Flöjt', family: 'woodwinds', gm: 'flute', synth: 'flute', ...SUSTAIN },
  { id: 'oboe', name: 'Oboe', family: 'woodwinds', gm: 'oboe', synth: 'flute', ...SUSTAIN },
  { id: 'english_horn', name: 'Engelskt horn', family: 'woodwinds', gm: 'english_horn', synth: 'flute', ...SUSTAIN },
  { id: 'clarinet', name: 'Klarinett', family: 'woodwinds', gm: 'clarinet', synth: 'flute', ...SUSTAIN },
  { id: 'bassoon', name: 'Fagott', family: 'woodwinds', gm: 'bassoon', synth: 'flute', transpose: -12, ...SUSTAIN },

  { id: 'trumpet', name: 'Trumpet', family: 'brass', gm: 'trumpet', synth: 'trumpet', ...SUSTAIN },
  { id: 'horn', name: 'Valthorn', family: 'brass', gm: 'french_horn', synth: 'trumpet', ...SUSTAIN },
  { id: 'trombone', name: 'Trombon', family: 'brass', gm: 'trombone', synth: 'trumpet', transpose: -12, ...SUSTAIN },
  { id: 'tuba', name: 'Tuba', family: 'brass', gm: 'tuba', synth: 'trumpet', transpose: -24, ...SUSTAIN },

  { id: 'timpani', name: 'Pukor', family: 'percussion', gm: 'timpani', synth: 'piano', transpose: -12, ...PERC },
  { id: 'glock', name: 'Klockspel', family: 'percussion', gm: 'glockenspiel', synth: 'glock', transpose: 12, ...PERC },
  { id: 'xylophone', name: 'Xylofon', family: 'percussion', gm: 'xylophone', synth: 'glock', transpose: 12, ...PERC },
  { id: 'bells', name: 'Rörklockor', family: 'percussion', gm: 'tubular_bells', synth: 'glock', ...PERC },

  { id: 'soprano_sax', name: 'Sopransax', family: 'sax', gm: 'soprano_sax', synth: 'trumpet', transpose: 12, ...SUSTAIN },
  { id: 'alto_sax', name: 'Altsax', family: 'sax', gm: 'alto_sax', synth: 'trumpet', ...SUSTAIN },
  { id: 'tenor_sax', name: 'Tenorsax', family: 'sax', gm: 'tenor_sax', synth: 'trumpet', ...SUSTAIN },
  { id: 'baritone_sax', name: 'Barytonsax', family: 'sax', gm: 'baritone_sax', synth: 'trumpet', transpose: -12, ...SUSTAIN },
];

export const instrumentById = (id) => INSTRUMENTS.find((i) => i.id === id) || INSTRUMENTS[0];
