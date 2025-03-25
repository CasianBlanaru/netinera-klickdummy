<template>
  <div class="bg-white min-h-screen">
    <HeroHeader
      title="Nachhaltig in die Zukunft"
      subtitle="ÖPNV & NACHHALTIGKEIT"
      titleId="sustainability-title"
      subtext="Der Individualverkehr wird zunehmend zur Belastung für Mensch und Umwelt. Gerade in den Städten dominieren Autos den Lebensraum der Menschen – mit allen erwartbaren Folgen: Die Luft ist schlecht. Parkplätze gibt es kaum. Und täglich grüßt der Stau. Eine Geduldsprobe für die Autofahrer. Und ein Alptraum für die Anwohner. Es ist nicht übertrieben zu sagen, dass ohne unsere Verkehrsleitungen so mancher Stadt der Verkehrskollaps drohte."
    />
  </div>
  <article
    class="flex flex-col items-center bg-white w-full"
    aria-labelledby="sustainability-title"
  >
    <div class="flex flex-col items-center px-5">
      <section class="bg-white p-10 max-sm:p-6 max-md:p-8 w-full max-w-4xl">
    
        <div class="flex flex-col gap-16 max-sm:gap-8 max-md:gap-12">
          <!-- First section: Text on left, image on right -->
          <SustainabilitySection
            :reverse="false"
            title="Schiene statt Stau"
            :content="railContent"
            :caption="imageCaptionText"
          />

          <!-- Second section: Image on left, text on right -->
          <SustainabilitySection
            :reverse="true"
            title="Zug um Zug mehr Fahrgäste"
            :content="passengersContent"
            :caption="imageCaptionText"
          />
        </div>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
const railContent = `Als Mobilitätsanbieter im Schienennahverkehr sind wir Teil der
  Lösung, nicht Teil des Problems. In vielen Regionen Deutschlands
  entlasten unsere Züge die Straßen und senken die CO₂-Emissionen
  gegenüber dem Individualverkehr um ca. 80%. So können jährlich
  viele Millionen Tonnen CO₂ auf unseren Strecken eingespart
  werden. Das ist nicht nur ein wichtiger Beitrag zum Klimaschutz.
  Es steigert auch Gesundheit und Lebensqualität der Bürger, macht
  die Innenstädte attraktiver und kommt so letztlich auch der
  lokalen Wirtschaft zugute.`

const passengersContent = `Unsere Branche ist im Aufwind. Der Personenverkehr auf der
  Schiene boomt. Der Eisenbahnverkehr wächst inzwischen stärker
  als der PKW-Verkehr. Immer mehr Menschen entscheiden sich für
  die gute alte Eisenbahn. Aus dem Vorortzug ist ein zeitgemäßes
  und attraktives Verkehrsmittel geworden. Von den Bürgern
  geliebt. Vom Klima gebraucht. Und von der Politik gefördert.`

const imageCaptionText = "Ich bin eine optionale Bildunterschrift"

</script>
