<template>
  <div class="drawing-panel">
    <div class="toolbar">
      <button @click="clearCanvas">{{ $t('drawing.clear') }}</button>
      <input type="color" v-model="color" :title="$t('drawing.color')" />
      <select v-model="lineWidth" :title="$t('drawing.line_width')">
        <option value="1">1px</option>
        <option value="3">3px</option>
        <option value="5">5px</option>
        <option value="10">10px</option>
      </select>
      <button @click="submitDelivery" :disabled="isSubmitting || deliveryStatus">
        {{ deliveryStatus ? $t('drawing.delivered') : $t('drawing.confirm_delivery') }}
      </button>
    </div>
    <canvas
        ref="canvas"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart="startDrawing"
        @touchmove="draw"
        @touchend="stopDrawing"
    ></canvas>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const canvas = ref(null);
    let ctx = null;
    const isDrawing = ref(false);
    const color = ref('#000000');
    const lineWidth = ref(5);
    let lastX = 0;
    let lastY = 0;
    const isSubmitting = ref(false);
    const deliveryStatus = ref(false);
    const error = ref(null);
    const shipmentId = route.params.id;

    onMounted(() => {
      const canvasEl = canvas.value;
      ctx = canvasEl.getContext('2d');
      canvasEl.width = 500;
      canvasEl.height = 300;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Check initial delivery status
      checkDeliveryStatus();
    });

    const startDrawing = (e) => {
      e.preventDefault();
      isDrawing.value = true;
      const rect = canvas.value.getBoundingClientRect();
      [lastX, lastY] = getCoordinates(e, rect);
    };

    const draw = (e) => {
      if (!isDrawing.value) return;

      e.preventDefault();
      const rect = canvas.value.getBoundingClientRect();
      const [x, y] = getCoordinates(e, rect);

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = color.value;
      ctx.lineWidth = lineWidth.value;
      ctx.stroke();

      [lastX, lastY] = [x, y];
    };

    const stopDrawing = (e) => {
      e.preventDefault();
      isDrawing.value = false;
    };

    const getCoordinates = (e, rect) => {
      if (e.touches) {
        return [
          e.touches[0].clientX - rect.left,
          e.touches[0].clientY - rect.top
        ];
      }
      return [e.clientX - rect.left, e.clientY - rect.top];
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    };

    const checkDeliveryStatus = async () => {
      try {
        const response = await fetch(`https://abuexpresslogisticscargo.com/api/shipment-delivery/${shipmentId}/`);
        if (!response.ok) throw new Error('Failed to fetch delivery status');
        const data = await response.json();
        deliveryStatus.value = data.is_delivered;
      } catch (err) {
        console.error('Error checking delivery status:', err);
        error.value = t('drawing.status_check_error');
      }
    };

    const submitDelivery = async () => {
      if (deliveryStatus.value) return;

      isSubmitting.value = true;
      error.value = null;

      try {
        const dataUrl = canvas.value.toDataURL('image/png');

        const response = await fetch(`https://abuexpresslogisticscargo.com/api/shipment-delivery/${shipmentId}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_delivered: true,
            signature: dataUrl
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to confirm delivery');
        }

        const result = await response.json();
        deliveryStatus.value = result.is_delivered;
      } catch (err) {
        console.error('Error confirming delivery:', err);
        error.value = err.message || t('drawing.delivery_error');
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      canvas,
      color,
      lineWidth,
      isSubmitting,
      deliveryStatus,
      error,
      startDrawing,
      draw,
      stopDrawing,
      clearCanvas,
      submitDelivery
    };
  }
};
</script>

<style scoped>
.drawing-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  touch-action: none;
}

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

canvas {
  border: 2px solid #ccc;
  background: #fff;
  cursor: crosshair;
  touch-action: none;
}

button {
  padding: 5px 10px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: #4169e1;
}

button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

input[type="color"],
select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>