
<template>
  <div class="delivery-signature-container">
    <div class="signature-card">
      <div class="canvas-container">
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
        <div v-if="!hasSignature" class="placeholder">
          {{ $t('drawing.sign_here') }}
        </div>
      </div>

      <div class="controls">
        <div class="tools-row">
          <div class="tool-group">
            <label>{{ $t('drawing.color') }}</label>
            <input type="color" v-model="color" class="color-picker" />
          </div>

          <div class="tool-group">
            <label>{{ $t('drawing.line_width') }}</label>
            <select v-model="lineWidth" class="line-width-select">
              <option value="2">2px</option>
              <option value="4">4px</option>
              <option value="6">6px</option>
            </select>
          </div>

          <button @click="clearCanvas" class="tool-button">
            <i class="icon-clear"></i>
            {{ $t('drawing.clear') }}
          </button>
        </div>

        <div class="delivery-form">
          <div class="form-group">
            <label for="shipmentId">{{ $t('drawing.shipment_id') }}</label>
            <input
                id="shipmentId"
                type="text"
                v-model="shipmentId"
                :disabled="isSubmitting || deliveryStatus"
                @change="checkDeliveryStatus"
                class="shipment-input"
            />
          </div>

          <div class="action-buttons">
            <button
                @click="submitDelivery"
                :disabled="isSubmitting || deliveryStatus || !shipmentId || !hasSignature"
                class="submit-button"
            >
              <i class="icon-check"></i>
              {{ deliveryStatus ? $t('drawing.delivered') : $t('drawing.confirm_delivery') }}
            </button>

            <button
                @click="resetDelivery"
                :disabled="!deliveryStatus"
                class="reset-button"
            >
              <i class="icon-reset"></i>
              {{ $t('drawing.reset') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error" class="alert error">
      <i class="icon-error"></i>
      {{ error }}
    </div>

    <div v-if="successMessage" class="alert success">
      <i class="icon-success"></i>
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Refs
const canvas = ref(null);
const ctx = ref(null);
const color = ref('#000000');
const lineWidth = ref(4);
const shipmentId = ref('');
const isSubmitting = ref(false);
const deliveryStatus = ref(false);
const error = ref(null);
const successMessage = ref(null);
const lastX = ref(0);
const lastY = ref(0);
const isDrawing = ref(false);

// Computed
const hasSignature = computed(() => {
  if (!ctx.value) return false;
  const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height);
  return imageData.data.some(channel => channel !== 0);
});

// API configuration
const API_BASE_URL = 'https://abuexpresslogisticscargo.com/api';
const SHIPMENT_ENDPOINT = `${API_BASE_URL}/shipment`;
const DELIVERY_ENDPOINT = `${API_BASE_URL}/shipment-delivery`;

// Canvas initialization
const initializeCanvas = () => {
  const canvasEl = canvas.value;
  ctx.value = canvasEl.getContext('2d');

  // Set canvas size (responsive)
  const parentWidth = canvasEl.parentElement.clientWidth;
  canvasEl.width = parentWidth;
  canvasEl.height = Math.floor(parentWidth * 0.5); // 2:1 ratio

  // Style
  ctx.value.lineCap = 'round';
  ctx.value.lineJoin = 'round';
  ctx.value.strokeStyle = color.value;
  ctx.value.lineWidth = lineWidth.value;
  ctx.value.fillStyle = '#f8f9fa';
  ctx.value.fillRect(0, 0, canvasEl.width, canvasEl.height);
};

// Drawing functions
const startDrawing = (e) => {
  e.preventDefault();
  isDrawing.value = true;
  const rect = canvas.value.getBoundingClientRect();
  const coords = getCoordinates(e, rect);
  [lastX.value, lastY.value] = coords;
};

const draw = (e) => {
  if (!isDrawing.value) return;
  e.preventDefault();

  const rect = canvas.value.getBoundingClientRect();
  const [x, y] = getCoordinates(e, rect);

  ctx.value.beginPath();
  ctx.value.moveTo(lastX.value, lastY.value);
  ctx.value.lineTo(x, y);
  ctx.value.stroke();

  [lastX.value, lastY.value] = [x, y];
};

const stopDrawing = () => {
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
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.value.fillStyle = '#f8f9fa';
  ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);
};

// Delivery functions
const checkDeliveryStatus = async () => {
  if (!shipmentId.value) return;

  const token = localStorage.getItem('access_token');
  if (!token) {
    error.value = t('drawing.auth_required');
    return;
  }

  try {
    const response = await fetch(`${SHIPMENT_ENDPOINT}/${shipmentId.value}/`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(t('drawing.shipment_not_found'));
      }
      throw new Error(t('drawing.status_check_error'));
    }

    const data = await response.json();
    deliveryStatus.value = data.is_delivered;
    if (data.signature) {
      loadSignature(data.signature);
    }
  } catch (err) {
    error.value = err.message;
  }
};

const loadSignature = (signatureUrl) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    clearCanvas();
    ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
  };
  img.src = signatureUrl;
};

const canvasToBlob = () => {
  return new Promise((resolve) => {
    canvas.value.toBlob((blob) => {
      resolve(blob);
    }, 'image/png', 0.9);
  });
};

const submitDelivery = async () => {
  if (!shipmentId.value || deliveryStatus.value || !hasSignature.value) return;

  const token = localStorage.getItem('access_token');
  if (!token) {
    error.value = t('drawing.auth_required');
    return;
  }

  isSubmitting.value = true;
  error.value = null;
  successMessage.value = null;

  try {
    const signatureBlob = await canvasToBlob();
    const formData = new FormData();
    formData.append('is_delivered', 'true');
    formData.append('signature', signatureBlob, 'signature.png');

    const response = await fetch(`${DELIVERY_ENDPOINT}/${shipmentId.value}/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || t('drawing.submission_failed'));
    }

    const result = await response.json();
    deliveryStatus.value = result.is_delivered;
    successMessage.value = t('drawing.delivery_success');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (err) {
    error.value = err.message;
  } finally {
    isSubmitting.value = false;
  }
};

const resetDelivery = () => {
  deliveryStatus.value = false;
  clearCanvas();
  successMessage.value = null;
  error.value = null;
};

// Watch and lifecycle hooks
watch(color, (newVal) => {
  if (ctx.value) ctx.value.strokeStyle = newVal;
});

watch(lineWidth, (newVal) => {
  if (ctx.value) ctx.value.lineWidth = newVal;
});

onMounted(() => {
  initializeCanvas();
  window.addEventListener('resize', initializeCanvas);
});
</script>

<style scoped>
.delivery-signature-container {
  width: 100%;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 24px;
}

.header h2 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.header p {
  color: #7f8c8d;
  margin: 0;
}

.signature-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

.canvas-container {
  position: relative;
  width: 100%;
  background: #f8f9fa;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  touch-action: none;
  background: white;
}

.placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bdc3c7;
  font-size: 18px;
  pointer-events: none;
}

.controls {
  padding: 20px;
}

.tools-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}

.tool-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool-group label {
  font-size: 14px;
  color: #34495e;
}

.color-picker {
  width: 40px;
  height: 40px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  cursor: pointer;
  padding: 2px;
}

.line-width-select {
  padding: 8px 12px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  background: white;
  font-size: 14px;
}

.tool-button {
  padding: 8px 16px;
  background: #f1f2f6;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.tool-button:hover {
  background: #dfe6e9;
}

.delivery-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  color: #34495e;
  font-weight: 500;
}

.shipment-input {
  padding: 12px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;
}

.shipment-input:focus {
  border-color: #3498db;
  outline: none;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.submit-button {
  flex: 1;
  padding: 12px;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-button:hover:not(:disabled) {
  background: #27ae60;
}

.submit-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.reset-button {
  flex: 1;
  padding: 12px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-button:hover:not(:disabled) {
  background: #c0392b;
}

.reset-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.error {
  background: #ffebee;
  color: #c62828;
  border: 1px solid #ef9a9a;
}

.success {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
}

/* Icons (можно заменить на реальные иконки) */
.icon-clear::before { content: '✕'; }
.icon-check::before { content: '✓'; }
.icon-reset::before { content: '↻'; }
.icon-error::before { content: '⚠'; }
.icon-success::before { content: '✓'; }

/* Адаптивность */
@media (max-width: 600px) {
  .delivery-signature-container {
    padding: 12px;
  }

  .tools-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .action-buttons {
    flex-direction: column;
  }

  .submit-button,
  .reset-button {
    width: 100%;
  }
}
</style>