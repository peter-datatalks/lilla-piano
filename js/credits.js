// Credits & licences screen. Attribution that CC BY sources require must be visible in the app,
// not only in the repository (see LICENSES-AUDIT.md and LICENSES/).

const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

export const CREDITS_HTML = `
<section>
  <h3>Lilla Piano</h3>
  <p>App, artwork, instrument icons and the moose logo © Lilla Piano. Melodies are traditional or by composers
  in the public domain; the simplified arrangements and left-hand parts are made for this app.</p>
</section>
<section>
  <h3>Instrument sounds</h3>
  <p><strong>FluidR3_GM</strong> by Frank Wen, © 2000–2002, 2008 Frank Wen, © 2008 Toby Smithe,
  released under the ${a('LICENSES/FluidR3_GM.txt', 'MIT licence')}.
  Rendered to MP3 by Benjamin Gleitzman, ${a('https://github.com/gleitz/midi-js-soundfonts', 'midi-js-soundfonts')}
  (${a('LICENSES/midi-js-soundfonts-MIT.txt', 'MIT')}; the FluidR3_GM set is released under
  ${a('https://creativecommons.org/licenses/by/3.0/', 'CC BY 3.0')}). Files used unchanged.</p>
</section>
<section>
  <h3>Fonts</h3>
  <p><strong>Baloo 2</strong> © 2019 The Baloo 2 Project Authors (Ek Type) and <strong>Nunito</strong> © 2014 The Nunito
  Project Authors, both under the SIL Open Font License 1.1
  (${a('LICENSES/Baloo2-OFL.txt', 'Baloo 2')}, ${a('LICENSES/Nunito-OFL.txt', 'Nunito')}).</p>
</section>
<section>
  <h3>Music sources</h3>
  <p>Six Chopin pieces (Waltz in C♯ minor, Waltz Op. 69 No. 1, Funeral March, Tristesse, Fantaisie-Impromptu,
  Mazurka Op. 7 No. 1) are based on ${a('https://github.com/pl-wnifc/humdrum-chopin-first-editions', 'Chopin First Editions')},
  © Fryderyk Chopin Institute, licensed ${a('https://creativecommons.org/licenses/by/4.0/', 'CC BY 4.0')}; melodies simplified.</p>
  <p>Monti, Csárdás: checked against ${a('https://commons.wikimedia.org/wiki/File:Monti_Csárdás.png', 'Monti Csárdás.png')}
  (Wikimedia Commons, ${a('https://creativecommons.org/licenses/by/3.0/', 'CC BY 3.0')}) and the public-domain edition
  by G. dos Santos (IMSLP).</p>
  <p>Melodies were transcribed and cross-checked using ${a('https://www.mutopiaproject.org/', 'the Mutopia Project')},
  Wikipedia and ${a('https://commons.wikimedia.org/', 'Wikimedia Commons')} scores
  (${a('https://creativecommons.org/licenses/by-sa/4.0/', 'CC BY-SA')}), ${a('https://openscore.cc/', 'OpenScore')} (CC0),
  ${a('https://www.musikverket.se/svensktvisarkiv/', 'Svenskt visarkiv')}, ${a('https://www.mamalisa.com/', 'Mama Lisa’s World')},
  dalok.theisz.hu, nashe.com.ua, IMSLP and archive.org scans of public-domain editions. Thank you!</p>
</section>`;
