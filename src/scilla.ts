/* eslint-disable */

export const configuration = {
  comments: {
    lineComment: '//',
    blockComment: ['(*', '*)']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' }
  ],
  surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp('^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)'),
      end: new RegExp('^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)')
    }
  }
};

export const language = {
  // Set defaultToken to invalid to see what you do not tokenize yet
  // defaultToken: 'invalid',
  keywords: [
    // Keyword
    'send',
    'event',
    'match',
    'with',
    'end',
    'fun',
    'let',
    'in',
    'builtin',
    'accept',
    'import',
    'delete',
    'exists',
    'Some',
    'None',
    '_tag',
    '_eventname',
    'Main',
    '_sender',
    '_amount',
    'field',
    '_recipient',

    // Constant
    'True',
    'False',
    'library',
    'Emp',
    'contract',
    'Nil',
    'Zero',
    'Succ',
    'eq',
    'add',
    'sub',
    'mul',
    'lt',
    'eq',
    'concat',
    'Cons',
    'substr',
    'dist',
    'sha256hash',
    'put',
    'get',
    'remove',
    'contains[]',
    'blt',
    'badd',

    // Stdlib
    'ListUtils',
    'BoolUtils',
    'NatUtils',
    'PairUtils',
    'Schnorr',

    // StdlibMethods
    'andb',
    'orb',
    'negb',
    'list_head',
    'list_tail',
    'list_filter',
    'list_map',
    'list_append',
    'list_reverse',
    'list_sort',
    'list_exists',
    'list_forall',
    'list_find',
    'list_zip',
    'list_zip_with',
    'list_unzip',
    'list_to_map',
    'list_nth',
    'schnorr_sign',
    'schnorr_verify',
    'schnorr_gen_key_pair',
    'to_bystr',
    'nat_prev',
    'is_some_zero',
    'nat_eq',
    'nat_to_int',
    'uint32_to_nat_helper',
    'uint32_to_nat',
    'uint64_to_nat',
    'uint128_to_nat',
    'int32_to_nat',
    'int64_to_nat',
    'int128_to_nat',
    'fst',
    'snd'
  ],

  typeKeywords: [
    'Uint32',
    'Int32',
    'Uint64',
    'Int64',
    'Uint128',
    'Int128',
    'Uint256',
    'Int256',
    'String',
    'Bool',
    'Map',
    'BNum',
    'Option',
    'List',
    'Pair',
    'Message',
    'ByStr20',
    'ByStr32',
    'ByStr64',
    'ByStr'
  ],

  operators: [
    '=',
    '>',
    '<',
    '!',
    '~',
    '?',
    ':',
    '==',
    '<=',
    '>=',
    '!=',
    '&&',
    '||',
    '++',
    '--',
    '+',
    '-',
    '*',
    '/',
    '&',
    '|',
    '^',
    '%',
    '<<',
    '>>',
    '>>>',
    '+=',
    '-=',
    '*=',
    '/=',
    '&=',
    '|=',
    '^=',
    '%=',
    '<<=',
    '>>=',
    '>>>='
  ],

  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,

  // C# style strings
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // identifiers and keywords
      [
        /[a-z_$][\w$]*/,
        { cases: { '@typeKeywords': 'keyword', '@keywords': 'keyword', '@default': 'identifier' } }
      ],
      [/[A-Z][\w\$]*/, 'type.identifier'], // to show class names nicely

      // whitespace
      { include: '@whitespace' },

      // delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],

      // @ annotations.
      // As an example, we emit a debugging log message on these tokens.
      // Note: message are supressed during the first load -- change some lines to see them.
      [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/0[xX][0-9a-fA-F]+/, 'number.hex'],
      [/\d+/, 'number'],

      // delimiter: after number because of .\d floats
      [/[;,.]/, 'delimiter'],

      // strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

      // characters
      [/'[^\\']'/, 'string'],
      [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
      [/'/, 'string.invalid']
    ],

    comment: [
      [/[^\(*]+/, 'comment'],
      [/\(\*/, 'comment', '@push'], // nested comment
      [/\*\)/, 'comment', '@pop'],
      [/[\(*]/, 'comment']
    ],

    string: [
      [/[^\\"]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
    ],

    whitespace: [[/[ \t\r\n]+/, 'white'], [/\(\*/, 'comment', '@comment'], [/\/\/.*$/, 'comment']]
  }
};
