/**
 * Office-themed placeholder photography.
 *
 * A hand-checked set of Unsplash photos of office spaces and people working in
 * them. Each slot's `seed` is hashed to pick one photo deterministically, so a
 * slot keeps the same image between reloads while different slots stay distinct.
 *
 * Swap for real photography (and `next/image`) once production assets land.
 */

const OFFICE_PHOTOS = [
  "photo-1497366216548-37526070297c", // open-plan office
  "photo-1497366811353-6870744d04b2", // meeting room, glass walls
  "photo-1522071820081-009f0129c71c", // team working on laptops
  "photo-1600880292203-757bb62b4baf", // coworkers collaborating
  "photo-1531973576160-7125cd663d86", // open-plan floor at work
  "photo-1524758631624-e2822e304c36", // office lounge
  "photo-1556761175-b413da4baf72", // team at a shared desk
  "photo-1542744173-8e7e53415bb0", // boardroom presentation
  "photo-1521737604893-d14cc237f11d", // team meeting, warm office
  "photo-1497215728101-856f4ea42174", // desk by floor-to-ceiling windows
  "photo-1517245386807-bb43f82c33c4", // working at a laptop
  "photo-1568992687947-868a62a9f521", // busy coworking space
];

/** Deterministic index into OFFICE_PHOTOS from a seed string. */
const photoForSeed = (seed: string) => {
  let h = 7;
  for (let i = 0; i < seed.length; i += 1) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return OFFICE_PHOTOS[Math.abs(h) % OFFICE_PHOTOS.length];
};

export const img = (seed: string, width: number, height: number) =>
  `https://images.unsplash.com/${photoForSeed(seed)}?w=${width}&h=${height}&fit=crop&crop=entropy&auto=format&q=70`;
