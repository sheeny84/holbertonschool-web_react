interface MajorCredits {
  credits: number;
  readonly _brand: 'major';
}

interface MinorCredits {
  credits: number;
  readonly _brand: 'minor';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor',
  };
}

const major1: MajorCredits = {credits: 10, _brand: 'major'};
const major2: MajorCredits = {credits: 6, _brand: 'major'};
console.log(sumMajorCredits(major1, major2));

const minor1: MinorCredits = {credits: 1, _brand: 'minor'};
const minor2: MinorCredits = {credits: 2, _brand: 'minor'};
console.log(sumMinorCredits(minor1, minor2));
