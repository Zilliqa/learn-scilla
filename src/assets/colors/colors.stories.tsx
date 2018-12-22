import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import colors from './colors';
import chaptersAddon from 'react-storybook-addon-chapters';

const keyList = Object.keys(colors);
const getStyle = (key) => ({
  color: key === 'white' || key === 'gray300' ? 'black' : 'white',
  backgroundColor: colors[key],
  width: 100,
  height: 50,
  borderColor: 'black'
});

const sectionOptionsNoProps = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

setAddon(chaptersAddon);
storiesOf('Colors', module)
  // @ts-ignore
  .addWithChapters('All colors', {
    chapters: [
      {
        info: 'Use color variables. Kindly avoid using directly.',
        sections: [
          {
            sectionFn: () => (
              <div className="d-flex text-center">
                {keyList.map((key) => {
                  return (
                    <div key={key} style={getStyle(key)}>
                      {key}
                      <br />
                      <small>{colors[key]}</small>
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
