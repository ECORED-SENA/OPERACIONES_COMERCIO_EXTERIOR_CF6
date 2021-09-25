export default {
  global: {
    componenteFormativo: 'Procedimientos aduaneros',
    descripcionCurso:
      'Las operaciones de comercio exterior deben estar configuradas bajo una normativa legal vigente que permita comprender, realizar y ejecutar cada una de las actividades, acciones u operaciones conforme a lo previsto por el ente que lo regula para que a partir de lo normado se desarrollen cada uno de los requerimientos establecidos y se garantice la efectividad del proceso.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Obligaciones y formalidades aduaneras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Obligados aduaneros',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Los regímenes aduaneros de importación y exportación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Documentos soporte de la actividad aduanera',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Proceso de importación de mercancías al territorio aduanero nacional',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Proceso de exportación de mercancías del territorio aduanero nacional',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inspecciones de mercancía en aduana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principal marco normativo de inspección aduanera',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Competencia legal de las autoridades de control',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Control y requerimiento documental',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Proceso, procedimiento y ruta de la inspección aduanera, elementos y características',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castillo San Juan, B. C. (2020). PARTE I: Régimen de importación de bienes: llegada y desaduanamiento de mercancías; modalidades de importación. Banco de la República.',
      link: 'https://www.banrep.gov.co/es/jornadas-capacitacion-dcin-2015-1',
    },
    {
      referencia:
        'Decreto 2556 de 1991. Por el cual se reglamenta la Ley 13 de 1990. 4 de octubre de 1991.',
      link: '',
    },
    {
      referencia:
        'Decreto 390 de 2016. Por el cual se establece la regulación aduanera.07 de marzo del 2016.',
      link: '',
    },
    {
      referencia:
        'Decreto 1165 de 2019. Por el cual se dictan disposiciones relativas al régimen de aduanas en desarrollo de la Ley 1609 de 2013. 02 de julio de 2019.',
      link: '',
    },
    {
      referencia:
        'Decreto 1742 de 2020. Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales. 22 de diciembre del 2020.',
      link: '',
    },
    {
      referencia:
        'Decreto 360 de 2021. Por el cual se modifica el Decreto 1165 de 2019 relativo al Régimen de Aduanas y se dictan otras disposiciones. 07 de abril de 2021.',
      link: '',
    },
    {
      referencia:
        'Ley 01 de 1991. Por la cual se expide el Estatuto de Puertos Marítimos y se dictan otras disposiciones. 10 de enero de 1991. D.O. N. 39626',
      link: '',
    },
    {
      referencia:
        'Ley 101 de 1993. Ley General de Desarrollo Agropecuario y Pesquero. 23 de enero de 1993. D. O. N 41149.',
      link: '',
    },
    {
      referencia:
        'Procolombia. (2016). Lo que debe saber de la nueva legislación aduanera.',
      link:
        'https://procolombia.co/actualidad-internacional/agroindustria/lo-que-debe-saber-de-la-nueva-legislacion-aduanera',
    },
    {
      referencia:
        'Resolución 000046 de 2019 [Dirección de Impuestos y Aduanas Nacionales]. Por la cual se reglamenta el Decreto 1165 del 2 de julio de 2019. 26 de julio de 2008.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Autoridad aduanera',
      significado:
        'es la persona con función pública o la dependencia que, en los términos señalados por la ley y en cumplimiento de sus obligaciones, podrá exigir o controlar las normas aduaneras establecidas.',
    },
    {
      termino: 'Declarante',
      significado:
        'es la persona que realiza la actividad de suscripción o presentación de una declaración aduanera actuando en propia persona o por encargo de terceros. Las actividades que realiza deben ser de acuerdo con la naturaleza de su cargo.',
    },
    {
      termino: 'Medio de transporte',
      significado:
        'se entiende como aquella nave, aeronave, vagón de ferrocarril o vehículo de transporte por carretera, incluidos los remolques y semirremolques, cuando están incorporados a un tractor o a otro vehículo automóvil que movilizan mercancías.',
    },
    {
      termino: 'Mercancía',
      significado:
        'son aquellos bienes que pueden ser clasificados según nomenclatura arancelaria y sujetos a control aduanero.',
    },
    {
      termino: 'Trámite aduanero',
      significado:
        'es el proceso definido en el estatuto aduanero que presenta los pasos, actuaciones y diligencias del procedimiento aduanero desde el comienzo hasta el final del mismo.',
    },
    {
      termino: 'Usuario aduanero',
      significado:
        'es aquella persona natural, jurídica o sucursal de sociedad extranjera, que forma parte como, importador, exportador, consorcio, unión temporal o declarante en los regímenes, modalidades, operaciones aduaneras o un trámite aduanero específico.',
    },
  ],
  complementario: [
    {
      texto:
        'DIAN. (2017). Mesas de trabajo. Implementación Servicios Informáticos. Decreto 390 de 2016. SIE: Regímenes de Importación y Depósito - RID Mesas de trabajo Implementación Servicios Informáticos Decreto 390 de 2016 marzo de 2017.',
      tipo: 'Cartilla ',
      descarga: '/downloads/Regimen_de_Importacion_y_Deposito_RID.pdf',
    },
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). ¿Cómo importar a Colombia?',
      tipo: 'Página web',
      link:
        'https://www.mincit.gov.co/estudios-economicos/como-importar-a-colombia',
    },
    {
      texto:
        'Banco de la República. (s.f.). PARTE II: Régimen de exportación de mercancías e ingreso y salida de mercancías de y hacia una zona franca.',
      tipo: 'Pagina Web',
      link: 'https://www.banrep.gov.co/es/jornadas-capacitacion-dcin-2015-2',
    },
    {
      texto: 'Cufiño, G. (2020). Decreto 1165 de 2019 Colombia. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EpRNuTPWaFs',
    },
    {
      texto:
        'Ministerio de Hacienda y Crédito Público. (2019). Decreto 1165 de 2019. Disposiciones relativas al régimen de aduanas en desarrollo de la Ley 1609 de 2013.',
      tipo: 'Decreto PDF',
      descarga: '/downloads/DECRETO-1165-DEL-2-DE-JULIO-DE-2019.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marvin Alexis Sánchez Clavijo',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: ['Marcela Gonzalez Gomez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'John Andres Ayala angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
