import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

const colors = {
  white: '#ffffff',
  gray300: '#e9e9f4',
  gray500: '#7c7d8c',
  gray700: '#353545',
  black: '#131520',

  blue500: '#3740ff',
  blue700: '#2d23a5',

  yellow500: '#e9ab18',
  yellow700: '#d19200',

  red500: '#e2051a',
  red700: '#be032a'
};

const keyList = Object.keys(colors);
const getStyle = (key) => ({
  backgroundColor: colors[key],
  width: 80,
  height: 80,
  borderRadius: 50,
  margin: 10
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
              <div className="d-flex text-center">
                {keyList.map((key) => {
                  return (
                    <div key={key} style={{ margin: 15 }}>
                      <div style={getStyle(key)} />
                      <b>{key}</b>
                      <br />
                      <small>
                        <b>{colors[key]}</b>
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
