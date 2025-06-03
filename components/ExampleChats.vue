<template>
  <div>
    <!-- <h1 class="text-xl mb-4">ECharts Example</h1> -->
    <VChart :option="chartOptions" style="height: 300px; width: 100%" />
  </div>
</template>

<script setup>
const chartOptions = {
  title: {
    text: "Users notes Growth",
  },
  tooltip: {},
  xAxis: {
    data: ["Jan", "Feb", "Mar", "Apr", "May"],
  },
  yAxis: {},
  series: [
    {
      name: "Users",
      type: "bar",
      data: [5, 20, 36, 10, 10],
    },
  ],
};
</script>
