const keyMoments = [
  {
    title: "A Deadly Standoff",
    body: `The traveler felt the humid weight of the jungle close in as the lion emerged from the tangles of vines. Barehanded and exhausted, he anchored his feet in the loam, locking eyes with the predator instead of bolting. Every muscle in his body steadied while he raised his arms wide to appear larger than he was.`
  },
  {
    title: "Turning Fear into Fuel",
    body: `When the lion lunged, he pivoted behind a buttress root and let adrenaline guide him. He rammed a broken sapling between its ribs, forcing a roar that rattled the canopy. He used that moment to throw sand and splintered bark into the lion's eyes, forcing the beast to blink and stagger.`
  },
  {
    title: "Trapping the Apex Hunter",
    body: `He spotted a snare of hanging lianas and vaulted toward them, drawing the lion after him. At the last instant, he dove aside, looping the vines across the cat's forelegs. The lion crashed forward, momentum driving it into a sinkhole hidden beneath a mat of ferns.`
  },
  {
    title: "The Final, Defiant Push",
    body: `As the lion thrashed, he seized a jagged stone and struck the vulnerable bridge of its nose again and again. The blows stunned the predator long enough for him to cinch the vines into a muzzle, pinning its jaws shut while its strength bled away.`
  },
  {
    title: "Echoes of Survival",
    body: `Breath ragged, the traveler held the vines until the lion lay still. Jungle birds resumed their songs, and the traveler finally let himself collapse, every heartbeat a reminder that courage, ingenuity, and refusal to yield had turned an impossible encounter into survival.`
  }
];

export default function Page() {
  return (
    <main>
      <h1>When the Hunter Falls</h1>
      <section>
        <p>
          Deep within the emerald labyrinth of the African jungle, a lone traveler confronted the raw verdict of nature:
          a lion, rippling with fury, blocking the only path out. With no weapon, no shelter, and no hope of outrunning
          the beast, he staked his life on courage sharpened by desperation. What followed was a relentless, instinct-driven
          duel between human grit and apex ferocity.
        </p>
        {keyMoments.map((moment) => (
          <article key={moment.title}>
            <h2>{moment.title}</h2>
            <p>{moment.body}</p>
          </article>
        ))}
        <blockquote>
          In the hush that followed, the traveler realized his victory was not won with claws or fangs, but with a mind
          that refused to break.
        </blockquote>
        <div className="cta">
          Courage, creativity, and unyielding resolve turned the odds in his favor—and reminded him that survival is a story
          we write one heartbeat at a time.
        </div>
      </section>
    </main>
  );
}
