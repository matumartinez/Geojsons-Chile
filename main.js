const W = 520;
const H = 820;

// ── Data ──────────────────────────────────────────────────────────────────────

const DISTRICTS = [
  { num: 1,  region: 'Arica y Parinacota', file: 'distritos electorales/distrito 1 (Arica y Parinacota).json' },
  { num: 2,  region: 'Tarapacá',            file: 'distritos electorales/distrito 2 (Tarapacá).json' },
  { num: 3,  region: 'Antofagasta',         file: 'distritos electorales/distrito 3 (Antofagasta).json' },
  { num: 4,  region: 'Atacama',             file: 'distritos electorales/distrito 4 (Atacama).json' },
  { num: 5,  region: 'Coquimbo',            file: 'distritos electorales/distrito 5 (Coquimbo).json' },
  { num: 6,  region: 'Valparaíso',          file: 'distritos electorales/distrito 6 (Valparaíso).json' },
  { num: 7,  region: 'Valparaíso',          file: 'distritos electorales/distrito 7 (Valparaíso).json' },
  { num: 8,  region: 'RM',                  file: 'distritos electorales/distrito 8 (RM).json' },
  { num: 9,  region: 'RM',                  file: 'distritos electorales/distrito 9 (RM).json' },
  { num: 10, region: 'RM',                  file: 'distritos electorales/distrito 10 (RM).json' },
  { num: 11, region: 'RM',                  file: 'distritos electorales/distrito 11 (RM).json' },
  { num: 12, region: 'RM',                  file: 'distritos electorales/distrito 12 (RM).json' },
  { num: 13, region: 'RM',                  file: 'distritos electorales/distrito 13 (RM).json' },
  { num: 14, region: 'RM',                  file: 'distritos electorales/distrito 14 (RM).json' },
  { num: 15, region: "O'Higgins",           file: "distritos electorales/distrito 15 (O'Higgins).json" },
  { num: 16, region: "O'Higgins",           file: "distritos electorales/distrito 16 (O'Higgins).json" },
  { num: 17, region: 'Maule',               file: 'distritos electorales/distrito 17 (Maule).json' },
  { num: 18, region: 'Maule',               file: 'distritos electorales/distrito 18 (Maule).json' },
  { num: 19, region: 'Ñuble',               file: 'distritos electorales/distrito 19 (Ñuble).json' },
  { num: 20, region: 'Bío-Bío',             file: 'distritos electorales/distrito 20 (Bío-Bío).json' },
  { num: 21, region: 'Bío-Bío',             file: 'distritos electorales/distrito 21 (Bío-Bío).json' },
  { num: 22, region: 'La Araucanía',        file: 'distritos electorales/distrito 22 (La Araucanía).json' },
  { num: 23, region: 'La Araucanía',        file: 'distritos electorales/distrito 23 (La Araucanía).json' },
  { num: 24, region: 'Los Ríos',            file: 'distritos electorales/distrito 24 (Los Ríos).json' },
  { num: 25, region: 'Los Lagos',           file: 'distritos electorales/distrito 25 (Los Lagos).json' },
  { num: 26, region: 'Los Lagos',           file: 'distritos electorales/distrito 26 (Los Lagos).json' },
  { num: 27, region: 'Aysén',               file: 'distritos electorales/distrito 27 (Aysén).json' },
  { num: 28, region: 'Magallanes',          file: 'distritos electorales/distrito 28 (Magallanes).json' },
];

const PROVINCES = [
  { name: 'Arica',                    region: 'Arica y Parinacota' },
  { name: 'Parinacota',               region: 'Arica y Parinacota' },
  { name: 'Iquique',                  region: 'Tarapacá'           },
  { name: 'El Tamarugal',             region: 'Tarapacá'           },
  { name: 'Antofagasta',              region: 'Antofagasta'        },
  { name: 'El Loa',                   region: 'Antofagasta'        },
  { name: 'Tocopilla',                region: 'Antofagasta'        },
  { name: 'Chañaral',                 region: 'Atacama'            },
  { name: 'Copiapó',                  region: 'Atacama'            },
  { name: 'Huasco',                   region: 'Atacama'            },
  { name: 'Choapa',                   region: 'Coquimbo'           },
  { name: 'Elqui',                    region: 'Coquimbo'           },
  { name: 'Limarí',                   region: 'Coquimbo'           },
  { name: 'Isla de Pascua',           region: 'Valparaíso'         },
  { name: 'Los Andes',                region: 'Valparaíso'         },
  { name: 'Petorca',                  region: 'Valparaíso'         },
  { name: 'Quillota',                 region: 'Valparaíso'         },
  { name: 'San Antonio',              region: 'Valparaíso'         },
  { name: 'San Felipe de Aconcagua',  region: 'Valparaíso'         },
  { name: 'Valparaiso',               region: 'Valparaíso'         },
  { name: 'Chacabuco',                region: 'RM'                 },
  { name: 'Cordillera',               region: 'RM'                 },
  { name: 'Maipo',                    region: 'RM'                 },
  { name: 'Melipilla',                region: 'RM'                 },
  { name: 'Santiago',                 region: 'RM'                 },
  { name: 'Talagante',                region: 'RM'                 },
  { name: 'Cachapoal',                region: "O'Higgins"          },
  { name: 'Cardenal Caro',            region: "O'Higgins"          },
  { name: 'Colchagua',                region: "O'Higgins"          },
  { name: 'Cauquenes',                region: 'Maule'              },
  { name: 'Curicó',                   region: 'Maule'              },
  { name: 'Linares',                  region: 'Maule'              },
  { name: 'Talca',                    region: 'Maule'              },
  { name: 'Ñuble',                    region: 'Ñuble'              },
  { name: 'Arauco',                   region: 'Bío-Bío'            },
  { name: 'Bio Bío',                  region: 'Bío-Bío'            },
  { name: 'Concepción',               region: 'Bío-Bío'            },
  { name: 'Cautín',                   region: 'La Araucanía'       },
  { name: 'Malleco',                  region: 'La Araucanía'       },
  { name: 'Ranco',                    region: 'Los Ríos'           },
  { name: 'Valdivia',                 region: 'Los Ríos'           },
  { name: 'Chiloé',                   region: 'Los Lagos'          },
  { name: 'Llanquihue',               region: 'Los Lagos'          },
  { name: 'Osorno',                   region: 'Los Lagos'          },
  { name: 'Palena',                   region: 'Los Lagos'          },
  { name: 'Aisén',                    region: 'Aysén'              },
  { name: 'Capitán Prat',             region: 'Aysén'              },
  { name: 'Coihaique',                region: 'Aysén'              },
  { name: 'General Carrera',          region: 'Aysén'              },
  { name: 'Antártica Chilena',        region: 'Magallanes'         },
  { name: 'Magallanes',               region: 'Magallanes'         },
  { name: 'Tierra del Fuego',         region: 'Magallanes'         },
  { name: 'Última Esperanza',         region: 'Magallanes'         },
];

// ── Colors ────────────────────────────────────────────────────────────────────

const REGION_COLORS = [
  '#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f',
  '#edc948', '#b07aa1', '#ff9da7', '#9c755f', '#bab0ac',
  '#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854',
  '#ffd92f',
];

const regions = [...new Set(DISTRICTS.map(d => d.region))];
const districtColor = d3.scaleOrdinal().domain(regions).range(REGION_COLORS);

const PROVINCE_COLOR = '#5aaa8c';
const REGION_COLOR   = '#e07b54';

const REGIONS = [
  'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama',
  'Coquimbo', 'Valparaíso', 'RM', "O'Higgins", 'Maule', 'Ñuble',
  'Bío-Bío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes',
];

// ── SVG & zoom ────────────────────────────────────────────────────────────────

const svg     = d3.select('#map').attr('width', W).attr('height', H);
const g       = svg.append('g');
const tooltip = d3.select('#tooltip');

const zoom = d3.zoom()
  .scaleExtent([1, 12])
  .on('zoom', event => g.attr('transform', event.transform));

svg.call(zoom);

// ── Generic render ────────────────────────────────────────────────────────────

const cache = {};

async function render(file, fillColor, tooltipFn) {
  svg.transition().duration(250).call(zoom.transform, d3.zoomIdentity);

  if (!cache[file]) {
    cache[file] = await d3.json(encodeURIComponent(file).replace(/%2F/g, '/'));
  }
  const geojson = cache[file];

  const projection = d3.geoMercator()
    .fitExtent([[24, 24], [W - 24, H - 24]], geojson);
  const path = d3.geoPath().projection(projection);

  g.selectAll('path')
    .data(geojson.features)
    .join(
      enter  => enter.append('path').attr('class', 'district').attr('opacity', 0),
      update => update,
      exit   => exit.remove()
    )
    .attr('d', path)
    .attr('fill', fillColor)
    .transition().duration(200)
    .attr('opacity', 1);

  g.selectAll('path')
    .on('mousemove', (event, d) => {
      tooltip
        .style('opacity', 1)
        .style('left', (event.clientX + 14) + 'px')
        .style('top',  (event.clientY - 40) + 'px')
        .html(tooltipFn(d));
    })
    .on('mouseleave', () => tooltip.style('opacity', 0));
}

// ── Select ────────────────────────────────────────────────────────────────────

const select = document.getElementById('district-select');

const grpD = document.createElement('optgroup');
grpD.label = 'Distritos Electorales';
DISTRICTS.forEach((d, i) => {
  const opt = document.createElement('option');
  opt.value = `d:${i}`;
  opt.textContent = `Distrito ${d.num} — ${d.region}`;
  grpD.appendChild(opt);
});
select.appendChild(grpD);

const grpP = document.createElement('optgroup');
grpP.label = 'Provincias';
PROVINCES.forEach((p, i) => {
  const opt = document.createElement('option');
  opt.value = `p:${i}`;
  opt.textContent = `${p.name} — ${p.region}`;
  grpP.appendChild(opt);
});
select.appendChild(grpP);

const grpR = document.createElement('optgroup');
grpR.label = 'Regiones';
REGIONS.forEach((name, i) => {
  const opt = document.createElement('option');
  opt.value = `r:${i}`;
  opt.textContent = name;
  grpR.appendChild(opt);
});
select.appendChild(grpR);

function renderSelected() {
  const [type, idx] = select.value.split(':');

  if (type === 'r') {
    const name = REGIONS[+idx];
    render(
      `regiones/${name}.json`,
      REGION_COLOR,
      feat => `<strong>${feat.properties.name}</strong>
               <span class="region-name">${name}</span>`
    );
  } else if (type === 'd') {
    const d = DISTRICTS[+idx];
    render(
      d.file,
      districtColor(d.region),
      feat => `<strong>Distrito ${d.num} &mdash; ${feat.properties.name}</strong>
               <span class="region-name">${d.region}</span>`
    );
  } else {
    const p = PROVINCES[+idx];
    render(
      `provincias/${p.name} (${p.region}).json`,
      PROVINCE_COLOR,
      feat => `<strong>${feat.properties.name}</strong>
               <span class="region-name">Provincia de ${p.name}</span>`
    );
  }
}

select.addEventListener('change', renderSelected);

// Initial render
renderSelected();
