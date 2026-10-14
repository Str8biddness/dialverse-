/** The first playable DIALVERSE scripts. No AI model is called in this preview. */
export const STORIES = {
  oracle: {
    name: 'The Oracle', subtitle: 'Your future is on the line', symbol: '✧', voice: { pitch: .89, rate: .94 },
    opening: 'Ah. The line is finally open. Welcome, traveler. Tonight, three doors have appeared where there was once only darkness. What lies behind them is your choice. Remember: this is a fictional reading, not a prediction of real events.',
    scenes: {
      start: { text: 'One door shines gold. One is covered in mirrors. One has no handle at all. Which calls to you?', choices: [
        { text: 'The golden door', next: 'gold' }, { text: 'The mirror door', next: 'mirror' }, { text: 'The door with no handle', next: 'void' }
      ]},
      gold: { text: 'A bell rings in a city made of sunlight. On a pedestal sit two objects: a crown made of paper and a key made of glass. You may take only one.', choices: [
        { text: 'Take the paper crown', next: 'ending_crown' }, { text: 'Take the glass key', next: 'ending_key' }
      ]},
      mirror: { text: 'Inside the mirrors, hundreds of versions of you are applauding. One reflection turns away and points at a tiny red envelope. Do you follow the reflection or open the envelope?', choices: [
        { text: 'Follow the reflection', next: 'ending_reflection' }, { text: 'Open the red envelope', next: 'ending_letter' }
      ]},
      void: { text: 'The door opens when you stop looking for its handle. Beyond it, a clock ticks backwards. A voice asks: would you rather remember tomorrow or change yesterday?', choices: [
        { text: 'Remember tomorrow', next: 'ending_tomorrow' }, { text: 'Change yesterday', next: 'ending_yesterday' }
      ]},
      ending_crown: { text: 'The crown dissolves into confetti, and the whole city cheers. Your fictional fate: you become the ruler of celebrations. Your sacred duty? Never cancel a birthday party.', ending: 'The Confetti Monarch' },
      ending_key: { text: 'The glass key opens a locked room containing a single cupcake and a note: "The treasure was the dramatic entrance." Your fictional fate: Keeper of Grand Entrances.', ending: 'Keeper of Grand Entrances' },
      ending_reflection: { text: 'You follow the reflection into a ballroom. All the other versions of you wait for a decision. You choose the music, and every mirror finally smiles. Your ending: The One Who Set the Rhythm.', ending: 'The Rhythm Keeper' },
      ending_letter: { text: 'The red envelope contains a small card: "You were always allowed to invent the next chapter." The mirrors crack into harmless sparkling light. Your ending: The Unwritten Chapter.', ending: 'The Unwritten Chapter' },
      ending_tomorrow: { text: 'Tomorrow arrives in the form of a very confused pigeon wearing a wristwatch. It hands you a ticket marked "one more adventure." Your ending: The Keeper of Tomorrow.', ending: 'Keeper of Tomorrow' },
      ending_yesterday: { text: 'You step into yesterday and discover that even the ghosts are late for their appointments. You leave a note for your past self: "Take the scenic route." Your ending: The Clockbreaker.', ending: 'The Clockbreaker' }
    }
  },
  roast: {
    name: 'The Roast Line', subtitle: 'The spotlight is yours', symbol: '✳', voice: { pitch: 1.08, rate: 1.03 },
    opening: 'Welcome to the Roast Line! I am your completely fictional comedy host, and yes, my microphone costs more than my social skills. This is a good-natured roast, so we keep it playful. How much heat can you handle?',
    scenes: {
      start: { text: 'Choose your roast intensity. No personal traits required—just a little courage.', choices: [
        { text: 'Warm-up round', next: 'mild' }, { text: 'Turn up the heat', next: 'hot' }, { text: 'Roast the host instead', next: 'reverse' }
      ]},
      mild: { text: 'You have the energy of someone who sets six alarms and negotiates with every single one. What shall we roast next?', choices: [
        { text: 'My procrastination', next: 'ending_calendar' }, { text: 'My terrible jokes', next: 'ending_comedian' }
      ]},
      hot: { text: 'Bold choice. Your to-do list filed a missing-person report against you. Even your calendar has started saying "thoughts and prayers." Pick your final challenge.', choices: [
        { text: 'Take the speed round', next: 'ending_speed' }, { text: 'Challenge the microphone', next: 'ending_mic' }
      ]},
      reverse: { text: 'Wait, you want to roast ME? Fine. I run on a machine, yet somehow I still manage to have less battery than your social plans. Want to finish me off?', choices: [
        { text: 'Tell the host to get new material', next: 'ending_host' }, { text: 'Challenge the host to a pun duel', next: 'ending_pun' }
      ]},
      ending_calendar: { text: 'Your calendar has officially unsubscribed from your promises. The audience awards you the Golden Snooze Button. Wear it with absolutely no urgency.', ending: 'The Golden Snooze Button' },
      ending_comedian: { text: 'Your jokes are so legendary that even the laugh track needed a second opinion. But you committed to the bit, so you win the Plastic Microphone of Honor.', ending: 'Plastic Microphone of Honor' },
      ending_speed: { text: 'Three, two, one—your Wi-Fi has more stable relationships than your weekend plans! The studio explodes with laughter. You survived the Speed Round.', ending: 'Speed Round Survivor' },
      ending_mic: { text: 'You and the microphone stare each other down. The mic squeals first. Congratulations, you are undefeated in an argument against audio equipment.', ending: 'Microphone Champion' },
      ending_host: { text: 'Ouch. The host has been sent to a fictional writers’ room to rethink everything. You win the coveted Empty Joke Book.', ending: 'Host Roaster' },
      ending_pun: { text: 'I tell a joke about construction. You refuse to laugh because I am still working on it. The crowd gives you a standing ovation. Pun champion!', ending: 'Pun Duel Champion' }
    }
  },
  mystery: {
    name: 'The Mystery Line', subtitle: 'Case file 001: The Missing Clock', symbol: '⌖', voice: { pitch: .83, rate: .96 },
    opening: 'Detective, thank goodness. This is the Night Bureau. A clock vanished from the Bellweather Hotel at precisely midnight. Curiously, the lobby clock never stopped ticking. This case is fictional, but the choices are yours.',
    scenes: {
      start: { text: 'Two witnesses were awake. The night porter heard footsteps, and the watchmaker saw the lights flicker. Who do you question?', choices: [
        { text: 'Question the night porter', next: 'porter' }, { text: 'Question the watchmaker', next: 'watchmaker' }
      ]},
      porter: { text: 'The porter says: "No one entered the hotel. But the service elevator arrived empty at midnight." He hands you a brass token stamped with a moon. What next?', choices: [
        { text: 'Inspect the service elevator', next: 'ending_elevator' }, { text: 'Follow the moon symbol', next: 'ending_moon' }
      ]},
      watchmaker: { text: 'The watchmaker laughs: "Everyone thinks time was stolen. Perhaps the thief stole what time was hiding." She reveals an inventory ledger with one page missing. What next?', choices: [
        { text: 'Find the missing ledger page', next: 'ending_ledger' }, { text: 'Inspect the lobby clock', next: 'ending_lobby' }
      ]},
      ending_elevator: { text: 'Inside the elevator shaft maintenance office, you find the missing clock wrapped in a hotel towel. The culprit? An overenthusiastic stage magician preparing a surprise party. Case closed.', ending: 'The Elevator Alibi' },
      ending_moon: { text: 'The moon token opens a cabinet containing the clock and a list of late-night riddles. A secret puzzle club borrowed it for its annual meeting. You uncover the Midnight Society.', ending: 'The Midnight Society' },
      ending_ledger: { text: 'The missing page records a maintenance order: "Clock to be cleaned at 11:59 p.m." The hotel manager forgot to tell anyone. The mystery was paperwork all along.', ending: 'The Paper Trail' },
      ending_lobby: { text: 'Behind the lobby clock you discover a second clock, completely identical. The "vanished" clock had been swapped during repairs. The mystery ends with a very embarrassed watchmaker.', ending: 'The Double Clock' }
    }
  }
};

/** Candidate public-facing stops based on published city and tourism listings.
 * Coordinates are intentionally NOT fabricated; physical field verification is pending.
 * Prototype uses a self-attested clue answer, never claims geofence verification.
 */
export const STOPS = [
  { name: 'Logan County Courthouse', address: '601 Broadway St, Lincoln, IL 62656', phase: 'The first transmission', intro: 'The Archivist whispers: "Our missing signal began near a stone dome. Listen carefully."', clue: 'The courthouse that stands here was constructed in which year?', answers: ['1853', '1905', '1945', '2005'], correct: 1, success: 'Signal fragment one recovered. The voice says: "A bell can mark the hour, but only a city can keep its story."', source: 'https://www.lincolnil.gov/abraham-lincoln-history' },
  { name: 'Lincoln City Hall (exterior)', address: '700 Broadway St, Lincoln, IL 62656', phase: 'The silent caller', intro: 'A second message arrives: "An old building is remembered for a telephone in an unlikely place."', clue: 'What unusual object is a well-known feature of City Hall?', answers: ['A rooftop telescope', 'An exterior phone booth', 'A stone lighthouse', 'A clock made of glass'], correct: 1, success: 'Fragment two acquired. Your guide says: "The city once answered calls. Tonight, the calls answer back."', source: 'https://www.lincolnil.gov/lincoln-route-66' },
  { name: 'Historic Train Depot / Visitor Center (exterior)', address: '101 N Chicago St, Lincoln, IL 62656', phase: 'The lost departure', intro: 'Static clears. "The third fragment waits near a place where journeys once began. Stay well away from the active railway and use legal crossings."', clue: 'Before it became a visitor center, this building was primarily a…', answers: ['Railroad depot', 'Hospital', 'Theater', 'Fire station'], correct: 0, success: 'Fragment three restored. "The last message has no ticket," the Archivist says, "only a page number."', source: 'https://www.lincolnil.gov/lincoln-route-66' },
  { name: 'Lincoln Public Library (exterior)', address: '725 Pekin St, Lincoln, IL 62656', phase: 'The last page', intro: 'The final transmission arrives. "Stories can be carried in a voice, but where do cities keep their written worlds?"', clue: 'Which fictional object should you place inside the imaginary archive to complete the signal?', answers: ['A racing trophy', 'A library book', 'A train wheel', 'A basketball'], correct: 1, success: 'All four signal fragments join. The Archivist reveals the truth: there was no ghost—only a fictional message hidden across the city. You have completed The Echoes of Lincoln.', source: 'https://www.destinationlogancountyil.com/play-and-discover/historic-downtowns' }
];

export const EMPTY_PROGRESS = Object.freeze({ storiesCompleted: 0, endings: [], fieldIndex: 0, discoveries: [] });
export function makeNewProgress(){ return { storiesCompleted: 0, endings: [], fieldIndex: 0, discoveries: [] }; }
export function normalizeProgress(value){
  const x = value && typeof value === 'object' ? value : {};
  return {
    storiesCompleted: Number.isInteger(x.storiesCompleted) ? Math.max(0,Math.min(x.storiesCompleted,99999)) : 0,
    endings: Array.isArray(x.endings) ? [...new Set(x.endings.filter(v=>typeof v==='string').slice(0,100))] : [],
    fieldIndex: Number.isInteger(x.fieldIndex) ? Math.max(0,Math.min(x.fieldIndex,STOPS.length)) : 0,
    discoveries: Array.isArray(x.discoveries) ? [...new Set(x.discoveries.filter(v=>typeof v==='string').slice(0,100))] : []
  };
}
export function nextScene(storyKey, sceneKey, choiceIndex){
  const story = STORIES[storyKey];
  const node = story?.scenes?.[sceneKey];
  if(!node || !Array.isArray(node.choices) || !node.choices[choiceIndex]) return null;
  const next = node.choices[choiceIndex].next;
  return story.scenes[next] ? next : null;
}
export function correctAnswer(stopIndex, answerIndex){ return STOPS[stopIndex]?.correct === answerIndex; }
