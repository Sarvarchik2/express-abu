<template>
  <client-only>
    <div ref="mapContainer" class="map-container"></div>
  </client-only>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";

const mapContainer = ref(null);

onMounted(async () => {
  if (!process.client) return;

  const L = (await import("leaflet")).default;

  const map = L.map(mapContainer.value).setView([41.2995, 69.2401], 1);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const branches = [
    { name: "Ташкент", coords: [41.2995, 69.2401], address: "ул. Амира Темура 10" },
    { name: "Пекин", coords: [39.90139758946015, 116.4055647042154], address: "пекин" },
    { name: "Нью-Йорк", coords: [40.5774, -73.9667], address: "1953 Coney Island ave" }
  ];

  branches.forEach(branch => {
    L.marker(branch.coords)
        .addTo(map)
        .bindPopup(`<b>${branch.name}</b><br>${branch.address}`);
  });
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
</style>
