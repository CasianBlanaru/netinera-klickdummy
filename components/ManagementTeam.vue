<template>
  <div class="mx-auto p-5 max-w-[1200px]">
    <!-- Management Profile Card -->
    <div v-for="(profile, index) in managementProfiles" :key="index" class="mb-20">
      <!-- Profile Content -->
      <div class="mx-auto px-5 sm:px-4 md:px-5 max-w-[580px]">
        <h2 class="mb-4 font-inter font-bold text-[#1E1E1E] sm:text-xl text-2xl">
          {{ profile.name }}
        </h2>
        <div class="mb-4 font-inter font-normal text-[#1E1E1E] sm:text-sm text-base leading-[150%] tracking-[-0.176px]">
          {{ profile.description }}
        </div>
        <div v-if="profile.personal" class="mb-4 font-inter font-normal text-[#1E1E1E] sm:text-sm text-base leading-[150%] tracking-[-0.176px]">
          {{ profile.personal }}
        </div>
      </div>

      <!-- Quote Section -->
      <div class="mt-[60px] text-center">
        <p class="mx-auto mb-[30px] px-5 sm:px-4 md:px-5 max-w-[1012px] font-merriweather text-[#1E1E1E] text-[30px] sm:text-[22px] md:text-[26px] leading-[150%] tracking-[-0.57px]">
          "{{ profile.quote }}"
        </p>
        
        <!-- Profile Image Placeholder -->
        <div class="bg-[#FF9B50] mx-auto mb-[30px] rounded-full w-[120px] sm:w-[100px] h-[120px] sm:h-[100px]">
          <!-- Image can be added here -->
        </div>

        <!-- Profile Footer -->
        <div class="font-inter text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
          {{ profile.name }}
        </div>
        <div class="font-inter text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
          {{ profile.position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ManagementProfile {
  name: string;
  position: string;
  description: string;
  personal?: string;
  quote: string;
}

const managementProfiles: ManagementProfile[] = [
  {
    name: 'Fabrizio Favara',
    position: 'CEO',
    description: 'Fabrizio Favara ist der CEO von NETINERA. Der gelernte Wirtschaftswissenschaftler ist der Schiene seit vielen Jahren verbunden. Nach Stationen als CEO von Iryo, dem ersten privaten spanischen Hochgeschwindigkeits-Unternehmen, wurde er Chef-Stratege von FS, dem italienischen Mutter-Konzern von NETINERA Deutschland. Im Jahr 20?? übernahm Fabrizio Favara den Chefposten bei NETINERA Deutschland. Sein Ziele: Eine Verdoppelung des Umsatzes in den nächsten Jahren. Dafür soll das Angebot zu einem Multi-Business-Portfolio erweitert werden – mit Langstreckendestinationen, mehr regionalen Transporten und einem Ausbau des Geschäftes mit mobilitätseingeschränkten Personen.',
    personal: 'Fabrizio Favara ist verheiratet, er lebt mit seinen zwei Kindern und einer Katze in Rom. Er liebt das Surfen und das Skifahren, und – wenn beides nicht möglich ist – spielt er gerne Schach.',
    quote: 'Die schlanke Organisation weiter ausbauen. Die Digitalisierung vorantreiben. Die Potentiale der KI nutzen.'
  },
  {
    name: 'Markus Resch',
    position: 'Geschäftsführer Finanzen',
    description: 'Markus Resch ist seit dem 01.05.2013 bei NETINERA als Geschäftsführer für den Bereich Finanzen zuständig. Der Diplom-Betriebswirt (FH) arbeitete zunächst als Steuerberater, bevor er bei Veolia Verkehr als Leiter Finanzen einstieg. Zuletzt gehörte er bei Veolia der Geschäftsführung Deutschland an. Seit Mai 2013 kümmert sich Markus Resch als CFO um die Finanzen NETINERA. An NETINERA schätzt er vor allem den ausgeprägten Teamgeist und das Unternehmertum.',
    personal: 'Markus Resch lebt mit seiner Frau, zwei Kindern und einer Katze in München. In seiner Freizeit wechselt er gerne von der Schiene zu Kufe oder Kiel: Als Fan der Red Bulls München besucht Markus Resch gerne die Heimspiele seiner Mannschaft in der SAP-Arena oder er segelt auf den bayerischen Seen.',
    quote: 'Ich möchte mit NETINERA eine überzeugende Wachstumsstory schreiben.'
  },
  {
    name: 'Alexander Sterr',
    position: 'Geschäftsführer Personal und Recht',
    description: 'Alexander Sterr ist seit 2005 in verschiedenen Führungspositionen der NETINERA Gruppe tätig. Davor war er als Fachanwalt für Arbeitsrecht in einer Kanzlei in München beschäftigt. Seit 2013 ist Alexander Sterr Geschäftsführer Personal und Recht bei NETINERA und damit verantwortlich für die 6500 Mitarbeitenden des Unternehmens. Als Sohn eines Busfahrers hat Alexander Sterr nach eigenen Worten früh gelernt, was es heißt, im Schichtbetrieb zu arbeiten. Das präge auch seine Perspektive als Arbeitsdirektor bei NETINERA.',
    personal: 'Alexander Sterr lebt mit seiner Frau und zwei Katzen in München. Wenn er nicht gerade beruflich auf Achse ist, verbringt er Zeit mit Familie und Freunden, beim Sport und in der Natur.',
    quote: 'Ich bin stolz, schon so lange bei einem der größten privaten Verkehrsunternehmen in Deutschland zu arbeiten.'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:wght@400&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-merriweather {
  font-family: 'Merriweather', serif;
}
</style> 