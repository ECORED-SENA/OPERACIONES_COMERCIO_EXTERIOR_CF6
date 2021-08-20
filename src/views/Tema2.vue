<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Inspecciones de mercancía en aduana
    


    
    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Principal marco normativo de inspección aduanera
    
    
    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Competencia legal de las autoridades de control
    
    
    
    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Control y requerimiento documental
    
    
    
    separador
    #t_2_4.titulo-segundo
      .h2 2.4 Proceso, procedimiento y ruta de la inspección aduanera, elementos y características





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
