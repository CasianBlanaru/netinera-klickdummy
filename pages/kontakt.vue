<template>
  <div class="bg-white mb-18 min-h-screen">    
    <!-- Hero Banner -->
    <HeroHeader
      title="Kontakt"
      subtitle="Nehmen Sie Kontakt mit uns auf"
      titleId="sustainability-title"
      subtext=""
      />
    <!-- Main Content -->
    <div class="mx-auto px-[24px] sm:px-[16px] md:px-[20px] pt-20 max-w-[1200px]">
      <!-- Kontaktformular und Infos -->
      <div class="flex flex-wrap gap-[64px] sm:gap-[32px] md:gap-[32px]">
        <div class="flex-1 min-w-[300px]">
          <h2 class="mb-[24px] font-inter font-bold text-[24px] text-primary">
            Kontaktieren Sie uns
          </h2>
          <p class="mb-[32px] font-inter text-primary text-base leading-[150%] tracking-[-0.176px]">
            Wir freuen uns über Ihre Nachricht. Unser Team steht Ihnen gerne zur Verfügung und wird sich zeitnah mit Ihnen in Verbindung setzen.
          </p>
          
          <div class="mb-[40px]">
            <h3 class="mb-[16px] font-inter font-bold text-[18px] text-primary">Kontaktdaten</h3>
            <p class="mb-[8px] font-inter text-primary text-base leading-[150%]">
              <strong>Adresse:</strong> Bahnhofstraße 123, 10115 Berlin
            </p>
            <p class="mb-[8px] font-inter text-primary text-base leading-[150%]">
              <strong>Telefon:</strong> +49 (0) 30 123456789
            </p>
            <p class="mb-[8px] font-inter text-primary text-base leading-[150%]">
              <strong>E-Mail:</strong> info@netinera.de
            </p>
          </div>
        </div>
        
        <div class="flex-1 min-w-[300px]">
          <form class="space-y-[24px]">
            <div>
              <label class="block mb-[8px] font-inter text-primary text-base" for="name">Name</label>
              <input id="name" type="text" class="px-[16px] py-[12px] border border-gray-300 rounded-md w-full" placeholder="Ihr Name" />
            </div>
            
            <div>
              <label class="block mb-[8px] font-inter text-primary text-base" for="email">E-Mail</label>
              <input id="email" type="email" class="px-[16px] py-[12px] border border-gray-300 rounded-md w-full" placeholder="Ihre E-Mail-Adresse" />
            </div>
            
            <div>
              <label class="block mb-[8px] font-inter text-primary text-base" for="message">Nachricht</label>
              <textarea id="message" class="px-[16px] py-[12px] border border-gray-300 rounded-md w-full h-[200px]" placeholder="Ihre Nachricht"></textarea>
            </div>
            
            <div>
              <button type="submit" class="bg-primary hover:bg-primary-dark px-[28px] py-[14px] rounded-md font-medium text-white transition duration-300">
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 