<template>
  <div>
    <PressReleaseDetail
      date="24.1.2025"
      company="NETINERA DEUTSCHLAND"
      title="metronom erhält Zuschlag für Verkehrsvertrag ENNO II"
      imageCaption="Ich bin eine optionale Bildunterschrift"
      imagePlaceholder
      aboutTitle="Über Netinera"
      :aboutContent="aboutText"
      :contacts="contacts"
    >
      <template #content>
        <p class="mb-10">
          Eisenbahn AG (ODEG), eine Tochtergesellschaft der NETINERA Deutschland GmbH, hat den Zuschlag des Landes Mecklenburg-Vorpommern (MV) und der VMV – Verkehrsgesellschaft Mecklenburg-Vorpommern mbH für das Teilnetz Westmecklenburg II für weitere 15 Jahre erhalten. Die Betriebsaufnahme wird im Dezember 2025 erfolgen, der Verkehrsvertrag läuft bis Dezember 2040.
        </p>

        <p class="mb-10">
          Der neue Verkehrsvertrag knüpft nahtlos an den Bestandsvertrag an. Der Verkehrsvertrag umfasst jährlich 2,3 Mio. Zugkilometer. Für den Zugbetrieb werden dazu neue Arbeitsplätze in der Region geschaffen.
        </p>

        <p class="mb-10">
          Das Angebot auf der RB13 und RB14 wird an den Wochenenden durchgängig auf einen Ein-Stunden-Takt verdichtet. Die Leistungen der Linie RB15 und der Saisonverkehr auf der mecklenburgischen Südbahn werden fortgeführt.
        </p>

        <p class="mb-10">
          Das Land hat im neuen Verkehrsvertrag den schrittweisen Einsatz von Neufahrzeugen mit batterieelektrischem Antrieb vorgegeben. Ab Dezember 2027 sollen die ersten emissionsfreien batterieelektrischen Züge (BEMU) den Verkehr aufnehmen.
        </p>

        <p class="mb-10">
          "Wir bedanken uns bei unseren Kolleginnen und Kollegen bei ODEG und NETINERA, die zusammen diesen wichtigen Verkehrsvertrag gewinnen konnten. Das innovative Betriebskonzept hat die Verantwortlichen überzeugt. So wird die Erfolgsgeschichte der ODEG im Netz Westmecklenburg mit Parchim als Werkstatt-Standort und Gründungsort der ODEG fortgesetzt. Das freut mich besonders", so Fabrizio Favara, CEO von NETINERA Deutschland GmbH.
        </p>

        <div class="mb-10">
          <p class="mb-2.5 font-medium">Folgende Strecken werden bedient:</p>
          <p>RB13: Rehna <> Schwerin <> Parchim (Stundentakt)</p>
          <p>RB14: Parchim <> Hagenow Stadt (Stundentakt)</p>
          <p>RB15: Waren <> Inselstadt Malchow (Zwei-Stundentakt)</p>
        </div>

        <div class="mb-10">
          <p class="mb-2.5 font-medium">Beinhaltet Saisonverkehre:</p>
          <p>RB15 Waren <> Inselstadt Malchow <> Plau am See</p>
          <p>RB19 Parchim <> Lübz <> Plau am See</p>
        </div>

        <div>
          <p class="mb-2.5 font-medium">Fahrzeugeinsatz:</p>
          <p>batterieelektrische Triebzüge BEMU (zweiteilig) ab Ende 2027, der Einsatz erfolgt stufenweise</p>
          <p>Dieseltriebwagen Stadler RegioShuttle als Reserveflotte bis Ende 2032</p>
        </div>
      </template>
    </PressReleaseDetail>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

const aboutText = 'Die NETINERA-Gruppe gehört zu Trenitalia und damit zur Ferrovie dello Stato Italiane (FS-Gruppe), einem der größten Verkehrsunternehmen in ganz Europa. Mit mehr als 6.500 Mitarbeitern auf Schiene und Straße und einem Umsatz von 1,2 Mrd.€* ist die NETINERA-Gruppe eines der führenden Verkehrsunternehmen in Deutschland. Zu NETINERA gehören unter anderem die Eisenbahngesellschaften und Marken metronom, erixx, erixx Holstein, enno, vlexx, ODEG sowie Die Länderbahn DLB mit ihren Marken alex, trilex, vogtlandbahn, oberpfalzbahn und waldbahn.';

const contacts = [
  {
    name: 'Robert von der Heide',
    position: 'Leiter Kommunikation',
    phone: '+49 (0)151 40645704',
    email: 'kommunikation@netinera.de'
  },
  {
    name: 'Nina Massek',
    position: 'Referentin Kommunikation',
    phone: '+49 151 40645749',
    email: 'kommunikation@netinera.de'
  }
];
</script> 