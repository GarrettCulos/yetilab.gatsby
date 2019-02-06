import React from 'react';
import styled from 'styled-components';

const LOGO_Y = [[2, 2], [2, 3], [2, 4], [2, 6], [3, 4], [3, 6], [4, 4], [4, 6], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6]];
const LOGO_E = [[7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [8, 2], [8, 4], [8, 6], [9, 2], [9, 4], [9, 6], [10, 2], [10, 6]];
const LOGO_T = [[12, 2], [13, 2], [13, 3], [13, 4], [13, 5], [13, 6], [14, 2], [15, 2]];
const LOGO_I = [[17, 2], [17, 6], [18, 2], [18, 3], [18, 4], [18, 5], [18, 6], [19, 2], [19, 6], [20, 2], [20, 6]];

const LOGO_L = [[2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 6], [4, 6], [5, 6]];
const LOGO_A = [[7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [8, 2], [8, 5], [9, 2], [9, 5], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6]];
const LOGO_B = [
  [12, 2],
  [12, 3],
  [12, 4],
  [12, 5],
  [12, 6],
  [13, 2],
  [13, 4],
  [13, 6],
  [14, 2],
  [14, 4],
  [14, 6],
  [14, 6],
  [15, 2],
  [15, 3],
  [15, 4],
  [15, 5],
  [15, 6]
];
const LOGO_S = [
  [17, 2],
  [17, 3],
  [17, 4],
  [17, 6],
  [18, 2],
  [18, 4],
  [18, 6],
  [19, 2],
  [19, 4],
  [19, 6],
  [20, 2],
  [20, 4],
  [20, 5],
  [20, 6]
];

const getXCord = cord => cord[0];
const getYCord = cord => cord[1];
const LETtER_UNIT = 1;
const LOGO_YETI = [...LOGO_Y, ...LOGO_E, ...LOGO_T, ...LOGO_I];
const LOGO_LABS = [...LOGO_L, ...LOGO_A, ...LOGO_B, ...LOGO_S];
const YETI_CLASS = 'gIsu8S';

const generateSVGPhrase = words => {
  const letters = words.reduce((acc, word) => [...acc, ...word.letters], []);
  const totalShifts = words.reduce((acc, word) => ({ x: acc.x + word.shiftX || 0, y: acc.y + word.shiftY || 0 }), { x: 0, y: 0 });
  console.log(totalShifts);
  const maxX = Math.max(...letters.map(getXCord)) + LETtER_UNIT + totalShifts.x;
  const maxY = Math.max(...letters.map(getYCord)) + LETtER_UNIT + totalShifts.y;
  return (
    <svg preserveAspectRatio="meet" viewBox={`0 0 ${maxX} ${maxY}`} className={YETI_CLASS} width="auto" height="100%">
      {words.map(word => generateSVGWord(word.letters, word.className, word.includeBackground, word.shiftX, word.shiftY))}
    </svg>
  );
};

const generateSVGWord = (letterArray, wordClass, withBackground = false, shiftX = 0, shiftY = 0) => {
  const maxX = Math.max(...letterArray.map(getXCord)) + LETtER_UNIT + shiftX;
  const maxY = Math.max(...letterArray.map(getYCord)) + LETtER_UNIT + shiftY;
  return (
    <>
      {withBackground ? <polygon points={`0,0 0,${maxY} ${maxX},${maxY} ${maxX},0`} className={`${wordClass} bg`} /> : ''}
      {letterArray.map((letter, index) => {
        const p1 = `${shiftX + letter[0] - LETtER_UNIT},${shiftY + letter[1] - LETtER_UNIT}`;
        const p2 = `${shiftX + letter[0] - LETtER_UNIT},${shiftY + letter[1]}`;
        const p3 = `${shiftX + letter[0]},${shiftY + letter[1]}`;
        const p4 = `${shiftX + letter[0]},${shiftY + letter[1] - LETtER_UNIT}`;
        return (
          <polygon
            points={`${p1} ${p2} ${p3} ${p4}`}
            className={`letter ${wordClass ? wordClass : ''} ${letter[0]}-${letter[1]}-${index}`}
          />
        );
      })}
    </>
  );
};

const YetiLogoContainer = styled.div`
  height: 35px;
  &:hover .${YETI_CLASS} {
    .labs.letter {
      fill: var(--yeti-color-blue);
    }
  }

  & .${YETI_CLASS} {
    .yeti.bg {
      fill: var(--yeti-color-gold);
    }
    .letter {
      fill: var(--yeti-color-gray);
    }
    .labs.letter {
      fill: var(--yeti-color-white);
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;
`;
export const YetiLogo = ({ loading }) => {
  const phrase = [
    { letters: LOGO_YETI, className: 'yeti', includeBackground: true },
    { letters: LOGO_LABS, className: 'labs', shiftX: Math.max(...LOGO_YETI.map(getXCord)) + LETtER_UNIT }
  ];
  return (
    <LogoContainer>
      <YetiLogoContainer>{generateSVGPhrase(phrase)}</YetiLogoContainer>
    </LogoContainer>
  );
};
