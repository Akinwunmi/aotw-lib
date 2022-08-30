import { Column, Data } from '@aotw/components/src/table';

export const columnsStub: Column[] = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Name' },
  { key: 'types', name: 'Type(s)' },
  { key: 'bus', name: 'Burning Shadows', abbreviation: 'BUS', parent: 'Series' },
  { key: 'cec', name: 'Cosmic Eclipse', abbreviation: 'CEC', parent: 'Series' },
  { key: 'cpa', name: `Champion's Path`, abbreviation: 'CPA', parent: 'Series' },
  { key: 'dpi', name: 'Detective Pikachu', abbreviation: 'DPI', parent: 'Series' },
  { key: 'drm', name: 'Dragon Majesty', abbreviation: 'DRM', parent: 'Series' },
  { key: 'hif', name: 'Hidden Fates', abbreviation: 'HIF', parent: 'Series' },
  { key: 'slg', name: 'Shining Legends', abbreviation: 'SLG', parent: 'Series' },
  { key: 'smp', name: 'Sun & Moon Black Star Promos', abbreviation: 'SMP', parent: 'Series' },
  { key: 'ssp', name: 'Sword & Shield Black Star Promos', abbreviation: 'SSP', parent: 'Series' },
  { key: 'teu', name: 'Team Up', abbreviation: 'TEU', parent: 'Series' },
  { key: 'viv', name: 'Vivid Voltage', abbreviation: 'VIV', parent: 'Series' },
  { key: 'yaa', name: 'Yellow A Alternate', abbreviation: 'YAA', parent: 'Series' }
];

export const dataStub: Data[] = [
  {
    id: '001',
    name: 'Bulbasaur',
    types: 'Grass/Poison',
    dpi: 'dot',
    slg: 'dot',
    smp: 'dot'
  },
  {
    id: '002',
    name: 'Ivysaur',
    types: 'Grass/Poison',
    slg: 'dot'
  },
  {
    id: '003',
    name: 'Venusaur',
    types: 'Grass/Poison',
    cec: 'dot',
    cpa: 'dot',
    slg: 'dot',
    smp: 'dot',
    ssp: 'dot',
    teu: 'dot'
  },
  {
    id: '004',
    name: 'Charmander',
    types: 'Fire',
    bus: 'dot',
    hif: 'dot',
    dpi: 'dot',
    drm: 'dot',
    teu: 'dot',
    viv: 'dot',
    yaa: 'dot'
  },
  {
    id: '005',
    name: 'Charmeleon',
    types: 'Fire'
  },
  {
    id: '006',
    name: 'Charizard',
    types: 'Fire/Flying'
  },
  {
    id: '007',
    name: 'Squirtle',
    types: 'Water'
  },
  {
    id: '008',
    name: 'Wartortle',
    types: 'Water'
  },
  {
    id: '009',
    name: 'Blastoise',
    types: 'Water'
  }
];