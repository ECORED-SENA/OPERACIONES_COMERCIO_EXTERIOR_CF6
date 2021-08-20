<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Obligaciones y formalidades aduaneras
    


    
    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Obligados aduaneros
    
    
    
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
