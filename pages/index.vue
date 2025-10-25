<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
    <div class="max-w-4xl w-full text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Bem-vindo ao Nuxt 4</h1>
      <p class="text-xl text-gray-600 mb-12">
        Uma aplicação moderna construída com Nuxt 4 $ Tailwind CSS. Explore as possibilidades infinitas do desenvolvimento web.
      </p>
      
      <div class="flex gap-4 justify-center mb-16">
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Começar Agora
        </button>
        <button class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
          Saiba Mais
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <!-- Card Performance -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Performance</h3>
          <p class="text-gray-600">
            Aplicação otimizada com carregamento rápido e experiência fluída.
          </p>
        </div>

        <!-- Card Responsivo -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Responsivo</h3>
          <p class="text-gray-600">
            Design adaptável que funciona perfeitamente em todos os dispositivos.
          </p>
        </div>

        <!-- Card Moderno -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Moderno</h3>
          <p class="text-gray-600">
            Tecnologias de ponta para uma experiência de desenvolvimento superior.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>