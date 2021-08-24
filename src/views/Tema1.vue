<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Obligaciones y formalidades aduaneras

    .row.justify-content-center.mb-4
      .col-lg-3
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img1.svg',
            alt='Texto que describa la imagen',
            style='width: 305px'
          )
      .col-lg-9.align-self-center
        p.mb-4 En esta temática se profundizará sobre las formalidades aduaneras y los requisitos para el desarrollo de las actividades propias del comercio exterior, destacándose los principales elementos de los vínculos jurídicos que existen entre las administraciones aduaneras y las personas que directa o indirectamente quieran operar en esta modalidad y que tengan una relación con cualquier régimen o modalidad aduanera.
        p.mb-4 Así mismo, se profundizará sobre las obligaciones procedimentales y documentales de la actividad aduanera y de esta forma, facilitar el aprendizaje y cumplimiento de cada uno de los compromisos correspondientes a las principales funciones realizadas en el comercio exterior, garantizando el correcto funcionamiento que se derivan de estas.

    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Obligados aduaneros

    p.mb-4 Antes de hacer referencia a los obligados aduaneros, es importante definir qué es un usuario aduanero y así, profundizar en los términos que se utilizarán en el desarrollo de la unidad temática. Un usuario aduanero es aquel que realiza operaciones de importación o exportación de bienes y/o servicios. Acá algunas definiciones:
    .contenedorColor
      .row.justify-content-center(style='margin-bottom: 80px')
        .col-lg-10
          LineaTiempoB.color-acento-contenido.mb-5(:datos='datosLineaTiempoB')

    .row.justify-content-center
      .col-lg-8.mb-5
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Obligados aduaneros Decreto 1165 de 2019, artículo 7
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/especial1.svg',
            alt='Obligados aduaneros Decreto 1165 de 2019, artículo 7',
            style='width: 850px'
          )

    .row.justify-content-center.bg-top
      .col-lg-11.mb-5.mt-5
        p.mb-4 Los obligados aduaneros, se establecen desde el Artículo 8 del Decreto 1165 de 2019, en donde están precisados de manera general al describirse como:
        p.mb-4 “Las obligaciones derivadas de su intervención y por el suministro de toda documentación e información exigida por la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).” Decreto 1165 de 2019.
        p.mb-4 Es decir, que contempla un concepto sobre los obligados aduaneros y menciona las características que los definen para determinar sus responsabilidades de acuerdo con el desarrollo de sus actividades y elementos constitutivos. A continuación, se describen los principales obligados aduaneros:

    h4.text-center.mb-5 Principales obligados aduaneros

    .row.justify-content-center
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo='n')
          .row
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img2.svg',
                  alt='imagen ambiental',
                  style='width: 235px'
                )

            .col-md-6.mb-4.mb-md-0
              h4 Comercializadora Internacional (C.I.)
              p Es una persona jurídica que sirve como instrumento de apoyo en las actividades de exportación, promocionando a través de la comercialización en mercados internacionales los productos colombianos. Debe estar inscrito en el Ministerio de Comercio Industria y Turismo o contar con la autorización de la Dirección de Impuestos y Aduanas Nacionales para poder operar.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Centro de distribución logística internacional
              p Es una persona jurídica que, con autorización de la Dirección de Impuestos y Aduanas Nacionales, cuenta con un depósito previamente habilitado y que se ubica en un puerto, aeropuerto o en las infraestructuras logísticas especializadas (ILE) con un lugar de arribo específico. Su principal función es el almacenamiento, en estos espacios podrá ingresar mercancías extranjeras nacionales o en proceso de finalización de un régimen suspensivo o de transformación y/o ensamble, para luego ser distribuidos a través del reembarque, importación o exportación.
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img3.svg',
                  alt='imagen ambiental',
                  style='width: 279px'
                )

          .row
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img4.svg',
                  alt='imagen ambiental',
                  style='width: 217px'
                )

            .col-md-6.mb-4.mb-md-0
              h4 Depósito franco
              p Es una persona natural o jurídica previamente autorizada por la Dirección de Impuestos y Aduanas Nacionales, que habilitando un lugar de carácter privado puede almacenar, exhibir o vender mercancías a personas que ingresen o salgan del territorio aduanero nacional.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Operador
              p Es una persona jurídica previamente autorizada por la Dirección de Impuestos y Aduanas Nacionales para celebrar un contrato de transporte multimodal asumiendo la calidad de porteador en la ejecución o cumplimiento de la ejecución del transporte o parte de este.
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img5.svg',
                  alt='imagen ambiental',
                  style='width: 208px'
                )

          .row
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img6.svg',
                  alt='imagen ambiental',
                  style='width: 217px'
                )

            .col-md-6.mb-4.mb-md-0
              h4 Exportador
              p Es una persona natural o jurídica que desarrolla actividades de exportación de bienes y servicios con destino a mercados internacionales o a zona franca industrial de bienes y servicios.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Importador
              p Es una persona natural o jurídica que desarrolla actividades de importación de bienes y servicios provenientes de otros países o desde zona franca industrial de bienes y servicios.
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img7.svg',
                  alt='imagen ambiental',
                  style='width: 209px'
                )

          .row
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img8.svg',
                  alt='imagen ambiental',
                  style='width: 295px'
                )

            .col-md-6.mb-4.mb-md-0
              h4 Usuario operador de zona franca permanente
              p Es una persona jurídica que cuenta con autorización del Ministerio de Comercio, Industria y Turismo o por la Dirección de Impuestos y Aduanas Nacionales para desarrollar actividades de dirección, administración, supervisión y promoción de una o varias zonas francas, así como para calificar a los usuarios que la conforman.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Usuario aduanero permanente
              p Es una persona jurídica con autorización de la Dirección de Impuestos y Aduanas Nacionales por cumplir con las condiciones contempladas en la norma aduanera y que además tiene prerrogativas en el ejercicio de sus operaciones aduaneras. Asimismo, un usuario aduanero permanente no debe tener la calidad de depósito público.
            .col-md-6
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img9.svg',
                  alt='imagen ambiental',
                  style='width: 295px'
                )

    .contenedorColor--azulado.mb-5
      .row.p-5(style='justify-content: center')
        .col-lg-6.align-self-center
          p.mb-4 Por último, es importante saber que los obligados financieros son aquellos que se dedican a las actividades de importación y exportación, ya sea el declarante del régimen aduanero o el operador de comercio exterior, los obligados aduaneros directos y los que desarrollan de manera indirecta operaciones propias del comercio exterior o suministran información a solicitud de la administración aduanera o los obligados aduaneros indirectos.
          p.mb-4 El vínculo jurídico que hay entre las administraciones aduaneras y las personas que de forma directa o indirecta desarrollen actividades de comercio exterior, crean entre sí una obligación financiera, trátese de cualquier régimen, modalidad u operación aduanera y los requisitos que se deriven en el cumplimiento de las obligaciones previstas en la norma, de esta forma garantiza que los procesos son ejecutados de forma eficaz y qué acciones pueden suceder, como: mercancías que están bajo la potestad aduanera y los obligados, los intereses, recargos, tasas, sanciones, tributos aduaneros, a que haya lugar.
        .col-lg-6
          figure(data-aos='fade-left')
            img.mx-auto(
              src='@/assets/curso/tema1/img10.svg',
              alt='imagen ambiental',
              style='width: 390px'
            )

    p.mb-4 Por otro lado, es importante conocer qué hace un operador en comercio exterior. Por eso en la siguiente tabla se presentan las principales características de su función:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img11.svg',
            alt='imagen ambiental',
            style='width: 340px'
          )
      .col-lg-8.align-self-center
        h4.mb-5 Funciones del operador de comercio exterior
        p.mb-4(style='font-size: 16px') El operador de comercio exterior, es quien desarrolla en forma directa o indirecta, en cualquier formalidad aduanera, actividades propias, sean estas de destinos, regímenes, operaciones aduaneras, entre otras.
          p.mb-1(style='font-size: 16px') Sus principales funciones son apoyar con su servicio a través de la asesoría y servicios complementarios los procesos de comercio exterior, garantizando que la normatividad y obligaciones aduaneras se cumplan.
          p.mb-0(style='font-size: 16px') Las principales representaciones de las personas como operadores en comercio exterior son las agencias de aduanas, los agentes marítimos o agentes terrestres y el operador del transporte multimodal, entre otros.

    p.mb-5 En cuanto a los #[strong declarantes], el Decreto 1165 de 2019 presenta de manera detallada las generalidades de los declarantes, además de ofrecer a modo de lista los considerados declarantes frente a la normativa aduanera. A continuación, se relacionan los declarantes contemplados en el decreto:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Generalidades de los declarantes Decreto 1165 de 2019. Título II Capítulo 1
      .col-lg-12.mb-5
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/especial2.svg',
            alt='Generalidades de los declarantes Decreto 1165 de 2019. Título II Capítulo 1',
            style='width: 1200px'
          )

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-secundario.px-3.py-4.mb-5.degra
          .row.justify-content-around.align-items-center
            .col-4.col-sm-.col-lg-2
              img.mx-auto(
                src='@/assets/curso/tema1/iconW.svg',
                style='width: 93px'
              )
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0.text-small Es preciso destacar que en la figura 2, se contiene la información de manera general; sin embargo, es pertinente que se estudie con más detalle cada una de las características que se especifican en las diversas generalidades presentadas en el Decreto 1165, Artículo 32 del mismo decreto; por lo que se le invita a consultar dicho documento en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(
                    :href='obtenerLink("/downloads/prueba.pdf")',
                    target='_blank'
                  )
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Los regímenes aduaneros de importación y exportación

    .row.mb-4
      .col-lg-6
        p.mb-4 Es importante que consulte el Decreto 1165 en el Capítulo 1, con el fin de conocer cuáles son las disposiciones legales establecidas para desarrollar las exportaciones e importaciones de mercancías y los regímenes que se establecen para cada uno de estos procesos de comercio exterior.
        p.mb-4 Cabe destacar, que para el Régimen de Exportación de mercancías es la DIAN quien establece qué mercancías podrán ser exportadas por aduanas y define las rutas de transporte a que haya lugar.
        p.mb-4 Para la importación, se debe seguir un proceso dentro de la formalidad de desaduanamiento. Se empieza con el cumplimiento de las obligaciones aduaneras, ya sea del transportador o quien importa la mercancía y que puede ser en el momento del embarque de lo importado o en la llegada de estas al país de origen hasta la entrega que deba hacerse en el lugar que se determine para disponer de ellas o quien sitúe para su respectiva entrega o al sometimiento del régimen aduanero respectivo.
      .col-lg-5
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img12.svg',
            alt='imagen ambiental',
            style='width: 610px'
          )

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Conceptos de exportación e importación

      .col-lg-8.mb-5
        .row.justify-content-center(
          style='background-color: #f3f9ff; border-radius: 25px'
        )
          .col-lg-12
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon7.svg', alt='AvatarTop')
              .tarjeta.color-primario
                .p-4.py-5
                  h4 Exportación:
                  p.mb-0 es la salida de mercancías del territorio aduanero nacional con destino a otro país.

          .col-lg-12
            .tarjeta-avatar-b.mb-0
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon8.svg', alt='AvatarTop')
              .tarjeta.color-primario
                .p-4.py-5
                  h4 Importación:
                  p.mb-0 es la introducción de mercancías de procedencia extranjera al territorio aduanero nacional.

    .row.mb-4
      h4.mb-4 Los regímenes aduaneros
      .col-lg-6
        p.mb-4 El régimen aduanero concebido en la legislación aduanera permite conocer el tratamiento que se aplica a los declarantes, a la mercancía que se encuentra en potestad aduanera y en el que es necesaria la presentación por sí mismo a través de una agencia del formulario de declaración aduanera o el formato que hace sus veces.
        p.mb-4 Toda mercancía que se destine a formar parte del régimen aduanero debe tener una declaración aduanera para el régimen que aplica, cumpliendo con los requisitos y condiciones establecidos para cada uno de ellos según lo contempla el Decreto 1165 de 2019.
        p.mb-4 Finalmente, la clasificación de los regímenes aduaneros son los siguientes:
        ul.lista-ul.ms-4
          li 
            i.fas.fa-check
            | Régimen aduanero de importación
          li 
            i.fas.fa-check
            | Régimen aduanero de exportación
          li 
            i.fas.fa-check
            | Deposito aduanero
          li 
            i.fas.fa-check
            | Transito

      .col-lg-6
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img13.svg',
            alt='imagen ambiental',
            style='width: 500px'
          )

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Cabe destacar, que estos cuatro grupos son principales y contienen regímenes aduaneros más específicos; su definición se establece de acuerdo a la finalidad de la mercancía, a excepción del depósito aduanero.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Los regímenes aduaneros

      .col-lg-10.mb-5
        figure(data-aos='fade-left')
          img.mx-auto(
            src='@/assets/curso/tema1/especial3.svg',
            alt='Los regímenes aduaneros',
            style='width: 1030px'
          )

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 La entidad encargada de emitir las resoluciones de clasificación arancelaria es la DIAN y puede ser solicitadas de manera anticipada por cualquier particular, organismo o entidad interesada tal como se establece en los artículos 304 y siguientes del Decreto 1126; o de forma posterior a la importación de mercancías. Esta resolución de clasificación arancelaria es un documento de soporte de declaración aduanera de importación y su no existencia no exime al declarante de la obligación de hacer la respectiva clasificación de la mercancía por la aplicación directa del Arancel de Aduanas en las unidades funcionales.

    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Documentos soporte de la actividad aduanera

    .row.justify-content-center
      .col-lg-7
        p.mb-4 Los documentos requeridos y especificaciones de los mismos se convierten en la etapa más relevante cuando se va a realizar un proceso de exportación o importación porque permiten a través de estos trámites realizar una gestión aduanera adecuada y oportuna.
        p.mb-4 Al respecto el Decreto 2685 en su Artículo 7 establece:
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 “Las declaraciones de importación, exportación y tránsito aduanero deberán presentarse en los formularios oficiales que para el efecto determine la Dirección de Impuestos y Aduanas Nacionales, a través de medios electrónicos, o magnéticos, o excepcionalmente por medios documentales cuando ésta así lo autorice. En circunstancias especiales, la Dirección de Impuestos y Aduanas Nacionales podrá autorizar la presentación de declaraciones utilizando formularios habilitados para el efecto”.

      .col-lg-5.align-self-center
        figure.mb-5
          img.mx-auto(
            src='@/assets/curso/tema1/img14.svg',
            alt='imagen ambiental',
            style='width: 500px'
          )

    p.mb-5 Se presentan a continuación, los documentos soporte, requeridos en los procesos exportador e importador. Y se invita a consultar de manera autónoma cada uno de ellos para que descubran sus particularidades y características y puedan diligenciarlas de la mejor manera:

    .row.justify-content-center
      .col-lg-11
        .row(style='justify-content: space-evenly')
          .col-lg-6.mb-5(style='padding-right: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon5.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas1
                .p-5.pb-0
                  h3.text-center La factura comercial
                  p.text-center Es el documento que se expide al cliente, bien sea en inglés o español y que da prueba de una relación comercial y deben cumplir con los requisitos determinados por la ley a saber:
                  .row.justify-content-center
                    .col-11
                      ul.lista-ul
                        li 
                          i.fas.fa-check
                          p.mb-0 Consecutivo de facturación.
                        li 
                          i.fas.fa-check
                          p.mb-0 Periodo.
                        li 
                          i.fas.fa-check
                          p.mb-0 Valor de la negociación y moneda en la cual se negocia.
                        li 
                          i.fas.fa-check
                          p.mb-0 Cantidades de producto objeto de la negociación.
                        li 
                          i.fas.fa-check
                          p.mb-0 Subpartida arancelaria.
                        li 
                          i.fas.fa-check
                          p.mb-0 Descripción de los productos.
                        li 
                          i.fas.fa-check
                          p.mb-0 Incoterm o término de negociación que se está utilizando.
                        li 
                          i.fas.fa-check
                          p.mb-0 Forma de pago de la negociación.
          .col-lg-6.mb-5(style='padding-left: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon6.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas2
                .p-5.pb-0
                  h3.text-center Lista de empaque
                  p.text-center Permite identificar y manipular la mercancía dentro de los procedimientos aduaneros establecidos o las inspecciones necesarias a la carga. No es un documento obligatorio pero sí sugerido y deben indicar lo siguiente:
                  .row.justify-content-center
                    .col-11
                      ul.lista-ul(style='padding-bottom: 35px')
                        li 
                          i.fas.fa-check
                          p.mb-0 Lugar y fecha de embarque.
                        li 
                          i.fas.fa-check
                          p.mb-0 Número de periodo..
                        li 
                          i.fas.fa-check
                          p.mb-0 Fecha, nombre y razón social del vendedor y comprador
                        li 
                          i.fas.fa-check
                          p.mb-0 Cantidad y tipo de embalaje con su numeración y contenido.
                        li 
                          i.fas.fa-check
                          p.mb-0 Peso bruto y neto.
                        li 
                          i.fas.fa-check
                          p.mb-0 Volumen de carga.

    .row.justify-content-center
      .col-lg-11
        .row(style='justify-content: space-evenly')
          .col-lg-6.mb-5(style='padding-right: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon9.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas1
                .p-5.pb-0
                  h3.text-center Vistos buenos
                  p.text-center Es el requerimiento exigido por algunas autoridades especiales en el territorio nacional y dependen de las características del producto que se desea exportar y los trámites respectivos que se deban cumplir a través de la Ventanilla Única de comercio exterior. Cabe destacar que hay productos de libre exportación no condicionados a los registros o vistos buenos.
          
          .col-lg-6.mb-5(style='padding-left: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon10.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas2
                .p-5.pb-0
                  h3.text-center Carta de responsabilidad
                  p.text-center Es un documento fundamental en el proceso de exportación con el objetivo de acompañar las mercancías durante su desplazamiento en el territorio nacional. Su función es hacer saber a las autoridades competentes que las mercancías que saldrán del país no tienen ninguna contaminación, armas, explosivos o precursores químicos.

    .row.justify-content-center.mb-5
      .col-lg-11
        .row(style='justify-content: space-evenly')
          .col-lg-6.mb-5(style='padding-right: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon11.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas1
                .p-5.pb-0
                  h3.text-center Certificado de origen
                  p.text-center Es una condición que deben cumplir los bienes o mercancías originarios de Colombia en cumplimiento del marco del acuerdo comercial que aplique dependiendo del destino o mercado externo al que se desee exportar. Así mismo, debe contar con el Registro de Producción.

          .col-lg-6.mb-5(style='padding-left: 20px')
            .tarjeta-avatar(data-aos='flip-left')
              img(src='@/assets/curso/tema1/icon12.svg', alt='AvatarTop')
              .bordeSuperior.cac.fblanco.bg-tarjetas2
                .p-5.pb-0
                  h3.text-center Otros documentos exigidos para exportar
                  p.text-center Las fichas técnicas, fichas de manipulación del producto y el seguro.

    p.mb-4 Además de los documentos anteriores, se relacionan a continuación los documentos soporte contemplados en el Decreto 1165 de 2019 para presentar la declaración de exportación:
    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 Documentos soporte para presentar la declaración de exportación
          table
            caption Nota. Elaboración propia a partir del Decreto 1165 de 2019
            tr
              th(style='font-size: 17px; width: 45%') Estos son los documentos para realizar una exportación en Colombia
              td
                ul.lista-ul
                  li 
                    i.fas.fa-check
                    p.mb-0 Registro como exportador.
                  li 
                    i.fas.fa-check
                    p.mb-0 Estudio de mercado y localización de la demanda potencial.
                  li 
                    i.fas.fa-check
                    p.mb-0 Ubicación de la subpartida arancelaria.
            tr
              th(style='font-size: 17px') Procedimiento ante el Ministerio de Comercio, Industria y Turismo
              td
                ul.lista-ul
                  li 
                    i.fas.fa-check
                    p.mb-0 Solicitud de Determinación de Origen – Declaración Juramentada.
            tr
              th(style='font-size: 17px') En el trámite de exportación estos son los documentos necesarios ante la DIAN
              td
                ul.lista-ul
                  li 
                    i.fas.fa-check
                    p.mb-0 Factura Comercial.
                  li 
                    i.fas.fa-check
                    p.mb-0 Lista de Empaque (si se requiere).
                  li 
                    i.fas.fa-check
                    p.mb-0 Registro sanitario o Vistos Buenos (si lo requiere el producto).
                  li 
                    i.fas.fa-check
                    p.mb-0 Documento de Transporte.
                  li 
                    i.fas.fa-check
                    p.mb-0 Otros documentos exigidos para el producto exportador.
            tr
              th.px-4.py-3(colspan='2', style='font-size: 17px') 
                p.mb-0 #[strong Procedimientos cambiarios (reintegro de divisas)]

    p.mb-4 En relación con los documentos soporte, para presentar la declaración de importación el Decreto 1165 de 2019 exige el cumplimiento obligatorio de unas condiciones fijadas en el Artículo 117, que reza de la siguiente manera:
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 “Para efectos aduaneros, el declarante está obligado a obtener antes de la presentación y aceptación de la declaración y a conservar por un período de cinco (5) años contados a partir de dicha fecha, el original de los siguientes documentos que deberá poner a disposición de la autoridad aduanera, cuando esta así lo requiera”.
        .row.justify-content-center
          .col-6
            p.mb-4 Dicha normativa fija una condición y presentación que el declarante está obligado a realizar, además de establecer un tiempo de conservación de los documentos originales que deben ser presentados según el requerimiento de las autoridades aduaneras.
            p.mb-4 A continuación, se presentan los documentos soporte para la declaración de importación contemplados en el Decreto 1165 de 2019. Es obligatorio que el importador antes de la presentación y aceptación de la declaración de importación se diligencie los siguientes documentos:
          .col-6
            figure.mb-5
              img.mx-auto(
                src='@/assets/curso/tema1/img15.svg',
                alt='imagen ambiental',
                style='width: 500px'
              )

    .row.justify-content-center.bg-top2
      .col-lg-10.mt-5
        PasosA.color-secundario.mb-5(tipo='n')
          .row
            .col-md-5
              .row.card-custom--left
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon13.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col-9.align-self-center
                  p.mb-2 Registro o licencia de importación que ampare la mercancía

          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col-auto.align-self-center
                  p.mb-2 Factura comercial
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon14.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )

          .row
            .col-md-5
              .row.card-custom--left
                .col-auto.align-self-center
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon15.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col-9.align-self-center
                  p.mb-2 Documento de transporte
          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col-auto.align-self-center
                  p.mb-2 Lista de empaque
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon16.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
          .row
            .col-md-5
              .row.card-custom--left
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon17.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col-9.align-self-center
                  p.mb-2 Certificado de sanidad
          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col-auto.align-self-center
                  p.mb-2 Lista de empaque
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon16.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )

          .row
            .col-md-5
              .row.card-custom--left
                .col-auto
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon19.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col-9.align-self-center
                  p.mb-2 Mandato, cuando no exista endoso aduanero
          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col.align-self-center
                  p.mb-2 Declaración andina del valor en aduana, si se requiere
                .col-auto.align-self-center
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon20.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )

          .row
            .col-md-5
              .row.card-custom--left
                .col-auto.align-self-center
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon20.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col.align-self-center
                  p.mb-2 Declaración de exportación o el documento que acredite la operación de exportación
          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col.align-self-center
                  p.mb-2 Las autorizaciones previas para la importación de determinadas mercancías establecidas por la DIAN
                .col-auto.align-self-center
                  figure
                    img.mx-auto.ali-self-center(
                      src='@/assets/curso/tema1/icon22.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )

          .row
            .col-md-7
              .row.justify-content-center.card-custom--left
                .col-auto.align-self-center
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon15.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )
                .col.align-self-center
                  p.mb-2 Documento de constitución del consorcio o unión temporal si la operación de comercio exterior se consiga, endosan o expiden a nombre de esta.

          .row.justify-content-end
            .col-md-5
              .row.card-custom--right
                .col.align-self-center
                  p.mb-2 Otros certificados o vistos buenos, si se requieren
                .col-auto.align-self-center
                  figure
                    img.mx-auto(
                      src='@/assets/curso/tema1/icon17.svg',
                      alt='imagen ambiental',
                      style='width: 58px'
                    )

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Los documentos soporte para la declaración de importación mencionados anteriormente deben conservarse según lo que estipulado en el Artículo 177, y el declarante deberá registrar el número y fecha de la presentación y aceptación de la declaración de importación. En relación con las declaraciones manuales de importación el Decreto 360 de 2021 en su Artículo 177 en el parágrafo 1 precisa sobre su conservación y exige que el declarante debe consignar el número y fecha de la presentación y aceptación de la declaración de importación a la cual corresponden. Cuando se trate de un documento soporte electrónico se debe realizar a través de la declaración de importación correspondiente a través los de los servicios informáticos electrónicos de la DIAN.
                  br
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.mx-auto(
                  src='@/assets/curso/tema1/img16.svg',
                  alt='imagen ambiental',
                  style='width: 338px'
                )

    p.mb-4 Frente a las mercancías que están amparadas a través de un registro o licencia de importación, certificado de origen, documento de transporte, factura comercial, sean objeto de despachos parciales, el declarante deberá dejar constancia de cada una de las declaraciones presentadas al dorso del original o copia del documento correspondiente, indicando el número de aceptación de la declaración de importación, la fecha y la cantidad declarada.

    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Proceso de importación de mercancías al territorio aduanero nacional

    .row.justify-content-center
      .col-lg-6
        p.mb-4 Para que una mercancía del exterior ingrese al territorio aduanero nacional se debe desarrollar una actividad conocida como importación y debe surtir un proceso que está descrito en el marco aduanero nacional. Una vez surtido el procedimiento para el ingreso de la mercancía, esta debe estar sometida a un destino aduanero o a una operación aduanera especial de ingreso.
        p.mb-4 La importación es la actividad donde se hace el ingreso al territorio aduanero nacional de mercancías provenientes del exterior o que provengan de un depósito franco. Para la importación de mercancías al territorio aduanero nacional, es importante cumplir con las condiciones que se exigen en el marco normativo estipulado, que prevé desde las prohibiciones expresas, hasta las restricciones que pueden ser superadas. Es importante destacar, que el depósito franco es un destino aduanero y las mercancías allí almacenadas se podrán vender a viajeros que entren o salgan del país y que previamente cumplan con el régimen de importación de viajeros.
      .col-auto
        figure.mb-4
          img.mx-auto(
            src='@/assets/curso/tema1/img17.svg',
            alt='imagen ambiental',
            style='width: 598px'
          )
    p.mb-4 Los regímenes de importación que se establecen en el Decreto 1165 de 2019 y se consignan en la siguiente tabla. Los invitamos a hacer una lectura del Decreto 1165, Título 5, capítulos del 1 al 17:

    .titulo-sexto.color-primario
      p.mb-0 Régimen de importación contemplado en el Decreto 1165 de 2019, Título 5 Capítulo 1-17

    .tabla-a.color-primario.mb-5 
      table
        caption Nota. Elaboración propia a partir del Decreto 1165 de 2019
        thead
          tr
            th(style='font-size: 18px; width: 20%') Cap&iacute;tulo
            th(style='font-size: 18px') Denominaci&oacute;n
        tbody
          tr
            th(style='font-size: 16px')
              br
              | Cap&iacute;tulo I
            td
              | Llegada de la mercanc&iacute;a al territorio aduanero nacional.
              br
              | Art&iacute;culo 155 - Selecci&oacute;n para reconocimiento de carga.
              br
              | Art&iacute;culo 156 - Reconocimiento de la carga.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 2
            td Provisiones de a bordo para consumo y para llevar.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 3
            td Proceso de importaci&oacute;n.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 4
            td
              | Importaci&oacute;n ordinaria.
              br
              | Art&iacute;culo 184 - Toma de muestras por parte de la autoridad aduanera.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 5
            td Importaci&oacute;n con franquicia.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 6
            td Reimportaci&oacute;n por perfeccionamiento pasivo.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 7
            td Reimportaci&oacute;n en el mismo estado.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 8
            td Importaci&oacute;n en cumplimiento de garant&iacute;a.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 9
            td Importaci&oacute;n temporal para reexportaci&oacute;n en el mismo estado.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 10
            td
              | Importaci&oacute;n temporal para perfeccionamiento activo.
              br
              | Secci&oacute;n 1 &ndash; Clases de importaci&oacute;n temporal para perfeccionamiento activo.
              br
              | Secci&oacute;n 2 &ndash; Importaci&oacute;n temporal para perfeccionamiento activo de bienes de capital. Secci&oacute;n 3 &ndash; Importaci&oacute;n temporal en desarrollo de sistemas especiales de importaci&oacute;n &ndash; exportaci&oacute;n.
              br
              | Secci&oacute;n 4 &ndash; Importaci&oacute;n temporal para procesamiento industrial.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 11
            td
              | Importaci&oacute;n para transformaci&oacute;n o ensamble Art&iacute;culo 250 - Importaci&oacute;n para transformaci&oacute;n y/o ensamble.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 12
            td Tr&aacute;fico postal y env&iacute;os urgentes.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 13
            td
              | Entregas urgentes.
              br
              | Art&iacute;culo 265 - Entregas urgentes.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 14
            td Viajeros.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 15
            td
              | Importaci&oacute;n de petr&oacute;leo y/o combustibles l&iacute;quidos derivados del petr&oacute;leo por poliductos y/o oleoductos.
              br
              | Art&iacute;culo 288 - Importaci&oacute;n de petr&oacute;leo y/o combustibles l&iacute;quidos derivados del petr&oacute;leo por poliductos u oleoductos.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 16
            td Declaraciones de legalizaci&oacute;n y correcci&oacute;n y modificaci&oacute;n de la declaraci&oacute;n.
          tr
            th(style='font-size: 16px') Cap&iacute;tulo 17
            td
              | Clasificaci&oacute;n, origen y valoraci&oacute;n.
              br
              | Secci&oacute;n I &ndash; Resoluciones anticipadas.
              br
              | Secci&oacute;n 2 &ndash; Clasificaciones Arancelarias.
              br
              | Secci&oacute;n 3 &ndash; Origen de las mercanc&iacute;as.
              br
              | Secci&oacute;n 4 &ndash; Valor en aduana de las mercanc&iacute;as importadas.

    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-secundario.px-3.py-4.mb-5.degra
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src='@/assets/curso/tema1/iconW.svg', style='width: 93px')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0.text-small Le invitamos a consultar el Decreto 1165 de 2019 en relación con la lectura y conocimiento de cada uno de los capítulos relacionados en el cuadro anterior del régimen de importación:
                .col-sm-auto
                  a.boton.color-acento-botones(
                    :href='obtenerLink("/downloads/prueba.pdf")',
                    target='_blank'
                  )
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center
      .col-lg-6
        p.mb-4 Frente a los #[strong regímenes especiales] de importación es necesario destacar que su principal característica es, que tienen en cuenta el tipo y finalidad de la importación incluyéndolos en diversos grupos dependiendo de su naturaleza y de allí, se generan los respectivos pagos de los derechos e impuestos a la importación, así como los plazos, consolidación y tarifas únicas o la vinculación a los regímenes que no generan el pago de estos derechos si las mercancías permanecen en el sometimiento de los mismos.
        p.mb-4 Los formatos utilizados en estos regímenes pueden ser la declaración aduanera de importación o similares que son de fácil diligenciamiento porque tiene procedimientos simples y claros.
      .col-lg-5
        figure.mb-4
          img.mx-auto(
            src='@/assets/curso/tema1/img18.svg',
            alt='imagen ambiental',
            style='width: 500px'
          )

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 Regímenes especiales de importación
        figure.mb-4(data-aos='fade-left')
          img.mx-auto(
            src='@/assets/curso/tema1/especial4.svg',
            alt='imagen ambiental',
            style='width: 615px'
          )

    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-secundario.px-3.py-4.mb-5.degra
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src='@/assets/curso/tema1/iconW.svg', style='width: 93px')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0.text-small Le invitamos a consultar la página web del Ministerio de Comercio, Industria y Turismo, donde se brinda información relevante para la importación en Colombia. ¿Cómo importar a Colombia?:
                .col-sm-auto
                  a.boton.color-acento-botones(
                    :href='obtenerLink("/downloads/prueba.pdf")',
                    target='_blank'
                  )
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Proceso de exportación de mercancías del territorio aduanero nacional

    p.mb-4 Para entender con mayor claridad el proceso de exportación, nos remitimos al concepto considerado en el Decreto 1165 de 2019 y es el siguiente:
    .row.justify-content
      .col-lg-10
        .cajon.color-primario.p-4.mb-5
          p.mb-0 “La exportación es la salida de mercancías del territorio aduanero nacional con destino a otro país. También se considera exportación, además de las operaciones expresamente consagradas como tales en este decreto, la salida de mercancías a una Zona Franca, en los términos previstos en decreto”.

    .cajon-b.color-acento-contenido.p-3.mb-5
      p.mb-0 Es decir, que las mercancías que quieran salir del territorio nacional a los mercados internacionales, deben someterse a un régimen aduanero de exportación o a una operación aduanera especial de salida y cumplir con las formalidades aduaneras dictadas en esta materia que garantice el cumplimiento de los requisitos que la norma consagra, además de las condiciones fijadas en las prohibiciones que al respecto señala la ley.

    .row.justify-content-center
      .col-lg-5
        figure.mb-5
          img.mx-auto(
            src='@/assets/curso/tema1/img19.svg',
            alt='imagen ambiental',
            style='width: 500px'
          )
      .col-lg-7
        p.mb-4 Con base a lo anterior, es importante mencionar que:
        ul.lista-ul
          li.mb-4 
            i.fas.fa-check
            p.mb-0 Esta definición no hace distinción ni referencia al tipo de mercancías que pretenden salir del territorio aduanero nacional.
          li.mb-4 
            i.fas.fa-check
            p.mb-0 Se podrán someter al régimen aduanero de exportación aquellas mercancías propias o extranjeras en condición de libre circulación a excepción de aquellas donde la exportación se configure como forma final de un régimen aduanero.
          li.mb-5
            i.fas.fa-check
            p.mb-0 Para las mercancías extranjeras que permanecen de forma temporal y no están en libre circulación, pero quieran salir del territorio aduanero nacional o del depósito, deberán solicitar un reembarque o una reexportación. Cabe destacar, que en estas dos figuras las mercancías no se someten a un régimen aduanero.

    p.mb-4 Por otra parte, y de acuerdo al del Régimen de Exportación del Decreto 1165 de 2019 en su Artículo 340 se presentan las modalidades del régimen de exportación y estos se muestran a continuación:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-5(style='')
        .tarjeta-avatar(data-aos='flip-left')
          img(src='@/assets/curso/tema1/icon23.svg', alt='AvatarTop')
          .bordeSuperior.cac.fblanco.bg-tarjetas1
            .p-5.pb-0
              .row.justify-content-center
                .col-11
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación definitiva.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación temporal para perfeccionamiento pasivo.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación temporal para reimportación en el mismo estado.
                    li 
                      i.fas.fa-check
                      p.mb-0 Reexportación.
                    li 
                      i.fas.fa-check
                      p.mb-0 Reembarque.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación por tráfico postal y envíos urgente.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación de muestras sin valor comercial.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportaciones temporales realizadas por viajeros.
                    li 
                      i.fas.fa-check
                      p.mb-0 Exportación de menajes.
                    li 
                      i.fas.fa-check
                      p.mb-0 Programas Especiales de Exportación.

    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-secundario.px-3.py-4.mb-5.degra
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src='@/assets/curso/tema1/iconW.svg', style='width: 93px')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0.text-small Le invitamos a consultar la página web del Banco de la Republica donde se brinda información relevante para la exportación de un bien:
                .col-sm-auto
                  a.boton.color-acento-botones(
                    :href='obtenerLink("/downloads/prueba.pdf")',
                    target='_blank'
                  )
                    span Descargar
                    i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: 'DIAN',
        texto:
          'En relación con la Unidad Administrativa Especial de la Dirección de Impuestos y Aduanas Nacionales- DIAN; los usuarios aduaneros tienen una clasificación que se identifica en el Registro Único Tributario (RUT)  con el código de responsabilidad 10 y es definido como “Aquella persona natural o jurídica, que interviene directa o indirectamente en las operaciones de importación y/o exportación de bienes y/o servicios y/o de tránsito aduanero”..',
        icono: require('@/assets/curso/tema1/icon1.svg'),
      },
      {
        titulo: 'Decreto 1185',
        texto:
          'El usuario Aduanero es “La persona natural, la persona jurídica o sucursal de sociedad extranjera, que parte o interviene, como importador, exportador, consorcio, unión temporal o declarante en los regímenes, modalidades, operaciones aduaneras o en cualquier trámite aduanero. También se considera usuario aduanero toda aquella persona que requiera autorización, habilitación o registro para actuar ante la administración aduanera”. <br><br>  <div class="cajon color-primario p-4 mb-0"><p class="mb-0">Como ejemplo de aplicación nativa podemos mencionar a Instagram o WhatsApp, a través de la cual, se pueden enviar mensajes de voz, tomar fotos,</p></div>',
        icono: require('@/assets/curso/tema1/icon2.svg'),
      },
      {
        titulo: 'Decreto 1165 Artículo 5',
        texto:
          'En relación a la obligación, los obligados y los responsables aduaneros, contempla el alcance de la obligación aduanera, estableciendo esto como una relación formal, que abarca todas las obligaciones aduaneras emprendidas desde la administración aduanera.<br>Además establece la naturaleza de dicha obligación, la cual es de carácter personal, sin perjuicio de que pueda ser aplicada la norma en las mercancías mediante el abandono o el decomiso, al ser consideradas como una garantía preferente sobre otros elementos constitutivos.',
        icono: require('@/assets/curso/tema1/icon3.svg'),
      },
      {
        titulo: 'Decreto 1165 Artículo 7',
        texto:
          'Además clasifica los obligados aduaneros en directos e indirectos, precisando que los directos son las personas o entidades que se dedican a las actividades de importación y exportación, los declarantes  de un régimen aduanero y los operadores de comercio exterior; asimismo, los obligados aduaneros indirectos son aquellas personas o entidades que han realizado o intervenido de manera indirecta en los procesos de formalidad, trámite u operación aduanera y, en la medida de su intervención se determina la responsabilidad correspondiente frente a las autoridades competentes en especial a la información y documentación requerida por la DIAN.',
        icono: require('@/assets/curso/tema1/icon4.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
