import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

const colors = {
  gray100: '#F9F9FD',
  gray200: '#E9E9F4',
  gray300: '#C5C5D3',
  gray400: '#A0A1B2',
  gray500: '#7C7D8C',
  gray600: '#585968',
  gray700: '#343546',
  gray800: '#242536',
  blue100: '#D9DDFE',
  blue200: '#AAAFEF',
  blue300: '#7B82E1',
  blue400: '#4C54D2',
  blue500: '#392DD1',
  blue600: '#2D23A7',
  blue700: '#21197D',
  blue800: '#383f6e',
  green100: '#D3F2E2',
  green200: '#96DFBA',
  green300: '#58CD92',
  green400: '#1BBA6A',
  green500: '#148E50',
  green600: '#0D6137',
  green700: '#06351D',
  green800: '#0D2521',
  red100: '#F5ACB8',
  red200: '#F18295',
  red300: '#EC5871',
  red400: '#E72F4E',
  red500: '#E2052A',
  red600: '#BE032D',
  red700: '#99022F',
  red800: '#750032',
  yellow100: '#F9EBD0',
  yellow200: '#F5DBA2',
  yellow300: '#F1CB74',
  yellow400: '#EDBB46',
  yellow500: '#E9AB18',
  yellow600: '#D19200',
  yellow700: '#9D6E00',
  yellow800: '#694900',
  white: '#ffffff',
  black: '#131520'
};

const keyList = Object.keys(colors);
const getStyle = (key) => ({
  backgroundColor: colors[key],
  width: 60,
  height: 60,
  borderRadius: 50,
  margin: 5
});

const sectionOptionsNoProps = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

setAddon(chaptersAddon);
storiesOf('Colors', module)
  // @ts-ignore
  .addWithChapters('Palette', {
    chapters: [
      {
        info: 'Use color variables. Kindly avoid using directly.',
        sections: [
          {
            sectionFn: () => (
              <div className="d-flex flex-wrap text-center text-secondary" style={{ width: 950 }}>
                {keyList.map((key) => {
                  return (
                    <div key={key} className="mx-4 my-2">
                      <div style={getStyle(key)} />
                      <small>
                        <b>{key}</b>
                        <div>{colors[key]}</div>
                      </small>
                    </div>
                  );
                })}
              </div>
            ),
            options: sectionOptionsNoProps
          }
        ]
      }
    ]
  });
