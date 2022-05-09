import { Icon } from '@aotw/components/src/icon';
import { Column, Data } from '@aotw/components/src/table';

export const columnsStub: Column[] = [
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "types", name: "Type(s)" },
  { key: "bus", name: "Burning Shadows", abbreviation: "BUS" },
  { key: "cec", name: "Cosmic Eclipse", abbreviation: "CEC" },
  { key: "cpa", name: "Champion's Path", abbreviation: "CPA" },
  { key: "dpi", name: "Detective Pikachu", abbreviation: "DPI" },
  { key: "drm", name: "Dragon Majesty", abbreviation: "DRM" },
  { key: "hif", name: "Hidden Fates", abbreviation: "HIF" },
  { key: "slg", name: "Shining Legends", abbreviation: "SLG" },
  { key: "smp", name: "Sun & Moon Black Star Promos", abbreviation: "SMP" },
  { key: "ssp", name: "Sword & Shield Black Star Promos", abbreviation: "SSP" },
  { key: "teu", name: "Team Up", abbreviation: "TEU" },
  { key: "viv", name: "Vivid Voltage", abbreviation: "VIV" },
  { key: "yaa", name: "Yellow A Alternate", abbreviation: "YAA" }
];

export const dataStub: Data[] = [
  {
    id: "001",
    name: "Bulbasaur",
    types: "Grass/Poison",
    dpi: Icon.DOT,
    slg: Icon.DOT,
    smp: Icon.DOT
  },
  {
    id: "002",
    name: "Ivysaur",
    types: "Grass/Poison",
    slg: Icon.DOT
  },
  {
    id: "003",
    name: "Venusaur",
    types: "Grass/Poison",
    cec: Icon.DOT,
    cpa: Icon.DOT,
    slg: Icon.DOT,
    smp: Icon.DOT,
    ssp: Icon.DOT,
    teu: Icon.DOT
  },
  {
    id: "004",
    name: "Charmander",
    types: "Fire",
    bus: Icon.DOT,
    hif: Icon.DOT,
    dpi: Icon.DOT,
    drm: Icon.DOT,
    teu: Icon.DOT,
    viv: Icon.DOT,
    yaa: Icon.DOT
  },
  {
    id: "005",
    name: "Charmeleon",
    types: "Fire"
  },
  {
    id: "006",
    name: "Charizard",
    types: "Fire/Flying"
  },
  {
    id: "007",
    name: "Squirtle",
    types: "Water"
  },
  {
    id: "008",
    name: "Wartortle",
    types: "Water"
  },
  {
    id: "009",
    name: "Blastoise",
    types: "Water"
  }
];