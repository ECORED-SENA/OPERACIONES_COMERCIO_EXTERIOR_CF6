<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Obligaciones y formalidades aduaneras
    
    .row.justify-content-center.mb-4
      .col-lg-3
        figure
          img.mx-auto(src='@/assets/curso/tema1/img1.svg', alt='Texto que describa la imagen', style='width:305px;')
      .col-lg-9.align-self-center
        p.mb-4 En esta temática se profundizará sobre las formalidades aduaneras y los requisitos para el desarrollo de las actividades propias del comercio exterior, destacándose los principales elementos de los vínculos jurídicos que existen entre las administraciones aduaneras y las personas que directa o indirectamente quieran operar en esta modalidad y que tengan una relación con cualquier régimen o modalidad aduanera.
        p.mb-4 Así mismo, se profundizará sobre las obligaciones procedimentales y documentales de la actividad aduanera y de esta forma, facilitar el aprendizaje y cumplimiento de cada uno de los compromisos correspondientes a las principales funciones realizadas en el comercio exterior, garantizando el correcto funcionamiento que se derivan de estas.


    
    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Obligados aduaneros
    
    p.mb-4 Antes de hacer referencia a los obligados aduaneros, es importante definir qué es un usuario aduanero y así, profundizar en los términos que se utilizarán en el desarrollo de la unidad temática. Un usuario aduanero es aquel que realiza operaciones de importación o exportación de bienes y/o servicios. Acá algunas definiciones:
    .contenedorColor
      .row.justify-content-center(style='margin-bottom:80px;')
        .col-lg-10
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempoB")

    .row.justify-content-center
      .col-lg-8.mb-5
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Obligados aduaneros Decreto 1165 de 2019, artículo 7
        figure
          img.mx-auto(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen', style='width:610px;')

    p.mb-4 Los obligados aduaneros, se establecen desde el Artículo 8 del Decreto 1165 de 2019, en donde están precisados de manera general al describirse como: 
    p.mb-4 “Las obligaciones derivadas de su intervención y por el suministro de toda documentación e información exigida por la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).” Decreto 1165 de 2019.
    p.mb-4  Es decir, que contempla un concepto sobre los obligados aduaneros y menciona las características que los definen para determinar sus responsabilidades de acuerdo con el desarrollo de sus actividades y elementos constitutivos. A continuación, se describen los principales obligados aduaneros:

    .h4-text-center.mb-5 Principales obligados aduaneros

    .row.justify-content-center
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo="n")
          .row
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='imagen ambiental', style='width: 235px;')
          
            .col-md-6.mb-4.mb-md-0
              h4 Comercializadora Internacional (C.I.)
              p Es una persona jurídica que sirve como instrumento de apoyo en las actividades de exportación, promocionando a través de la comercialización en mercados internacionales los productos colombianos. Debe estar inscrito en el Ministerio de Comercio Industria y Turismo o contar con la autorización de la Dirección de Impuestos y Aduanas Nacionales para poder operar.
          
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Centro de distribución logística internacional
              p Es una persona jurídica que, con autorización de la Dirección de Impuestos y Aduanas Nacionales, cuenta con un depósito previamente habilitado y que se ubica en un puerto, aeropuerto o en las infraestructuras logísticas especializadas (ILE) con un lugar de arribo específico. Su principal función es el almacenamiento, en estos espacios podrá ingresar mercancías extranjeras nacionales o en proceso de finalización de un régimen suspensivo o de transformación y/o ensamble, para luego ser distribuidos a través del reembarque, importación o exportación.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style='width: 279px;')
          
          .row
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img4.svg', alt='imagen ambiental', style='width: 217px;')
                
            .col-md-6.mb-4.mb-md-0
              h4 Depósito franco
              p Es una persona natural o jurídica previamente autorizada por la Dirección de Impuestos y Aduanas Nacionales, que habilitando un lugar de carácter privado puede almacenar, exhibir o vender mercancías a personas que ingresen o salgan del territorio aduanero nacional.
          
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Operador
              p Es una persona jurídica previamente autorizada por la Dirección de Impuestos y Aduanas Nacionales para celebrar un contrato de transporte multimodal asumiendo la calidad de porteador en la ejecución o cumplimiento de la ejecución del transporte o parte de este.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img5.svg', alt='imagen ambiental', style='width: 208px;')
          
          .row
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style='width: 217px;')
                
            .col-md-6.mb-4.mb-md-0
              h4  Exportador
              p Es una persona natural o jurídica que desarrolla actividades de exportación de bienes y servicios con destino a mercados internacionales o a zona franca industrial de bienes y servicios.
          
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Importador
              p Es una persona natural o jurídica que desarrolla actividades de importación de bienes y servicios provenientes de otros países o desde zona franca industrial de bienes y servicios.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img7.svg', alt='imagen ambiental', style='width: 209px;')
          
          .row
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img8.svg', alt='imagen ambiental', style='width: 295px;')
                
            .col-md-6.mb-4.mb-md-0
              h4 Usuario operador de zona franca permanente
              p Es una persona jurídica que cuenta con autorización del Ministerio de Comercio, Industria y Turismo o por la Dirección de Impuestos y Aduanas Nacionales para desarrollar actividades de dirección, administración, supervisión y promoción de una o varias zonas francas, así como para calificar a los usuarios que la conforman.
          
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Usuario aduanero permanente
              p Es una persona jurídica con autorización de la Dirección de Impuestos y Aduanas Nacionales por cumplir con las condiciones contempladas en la norma aduanera y que además tiene prerrogativas en el ejercicio de sus operaciones aduaneras. Asimismo, un usuario aduanero permanente no debe tener la calidad de depósito público.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/tema1/img9.svg', alt='imagen ambiental', style='width: 295px;')
                



    
    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Los regímenes aduaneros de importación y exportación
    
    
    
    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Documentos soporte de la actividad aduanera
    
    
    
    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Proceso de importación de mercancías al territorio aduanero nacional
    
    
    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Proceso de exportación de mercancías del territorio aduanero nacional
    
  
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
