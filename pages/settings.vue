<template>
  <div class="profileedit-page">
    <div class="profileedit-container">
      <h1 class="page-title">{{ $t('profileedit.title') }}</h1>

      <form @submit.prevent="submitForm" class="profileedit-form">
        <div class="form-grid">
          <!-- Full Name -->
          <div class="form-group">
            <label class="input-label">{{ $t('profileedit.full_name') }}</label>
            <input
                type="text"
                v-model="formData.full_name"
                :placeholder="$t('profileedit.full_name_placeholder')"
                class="form-input"
                required
            >
          </div>

          <!-- Email (disabled) -->
          <div class="form-group">
            <label class="input-label">{{ $t('profileedit.email') }}</label>
            <input
                type="email"
                v-model="formData.email"
                class="form-input"
                disabled
            >
          </div>

          <!-- Password -->
          <div class="form-group">
            <label class="input-label">{{ $t('profileedit.password') }}</label>
            <div class="password-wrapper">
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password"
                  :placeholder="$t('profileedit.password_placeholder')"
                  class="form-input"
                  minlength="8"
              >
              <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="save-btn" :disabled="isLoading">
            <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
            {{ isLoading ? $t('profileedit.saving') : $t('profileedit.save') }}
          </button>
          <button type="button" class="delete-btn" @click="confirmDelete">
            {{ $t('profileedit.delete') }}
          </button>
        </div>
      </form>
    </div>

    <!-- Delete Confirmation Modal -->
    <transition name="modal-fade">
      <div v-if="showDeleteModal" class="modal-overlay" @click.self="showDeleteModal = false">
        <div class="modal-content">
          <div class="modal-header">
            <h3>{{ $t('profileedit.delete_confirmation') }}</h3>
            <button class="modal-close" @click="showDeleteModal = false">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ $t('profileedit.delete_warning') }}</p>
          </div>
          <div class="modal-actions">
            <button @click="deleteProfile" class="confirm-delete-btn">
              {{ $t('profileedit.confirm_delete') }}
            </button>
            <button @click="showDeleteModal = false" class="cancel-btn">
              {{ $t('profileedit.cancel') }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Notification -->
    <transition name="notification-slide">
      <div v-if="notification.show" class="notification" :class="notification.type">
        <div class="notification-content">
          <i :class="notification.icon"></i>
          <span>{{ notification.message }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

export default {
  setup() {
    const { t } = useI18n();

    const formData = ref({
      email: '',
      full_name: '',
      password: ''
    });

    const isLoading = ref(false);
    const showDeleteModal = ref(false);
    const showPassword = ref(false);
    const notification = ref({
      show: false,
      type: '',
      message: '',
      icon: ''
    });

    // Fetch user data from localStorage
    const fetchUserData = () => {
      formData.value = {
        email: localStorage.getItem('email') || '',
        full_name: localStorage.getItem('full_name') || '',
        password: ''
      };
    };

    // Update profile
    const submitForm = async () => {
      isLoading.value = true;
      try {
        const token = localStorage.getItem('access_token');

        const requestData = {
          full_name: formData.value.full_name,
          password: formData.value.password || undefined
        };

        const response = await axios.patch(
            'https://abuexpresslogisticscargo.com/api/edit/',
            requestData,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
        );

        // Update localStorage
        localStorage.setItem('full_name', formData.value.full_name);

        showNotification({
          message: t('profileedit.update_success'),
          type: 'success',
          icon: 'fas fa-check-circle'
        });
      } catch (error) {
        console.error('Update error:', error.response?.data || error);
        showNotification({
          message: error.response?.data?.detail || t('profileedit.update_error'),
          type: 'error',
          icon: 'fas fa-exclamation-circle'
        });
      } finally {
        isLoading.value = false;
      }
    };

    // Delete profile
    const deleteProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        await axios.delete(
            'https://abuexpresslogisticscargo.com/api/edit/',
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
        );

        showNotification({
          message: t('profileedit.delete_success'),
          type: 'success',
          icon: 'fas fa-check-circle'
        });

        localStorage.clear();
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } catch (error) {
        console.error('Delete error:', error);
        showNotification({
          message: t('profileedit.delete_error'),
          type: 'error',
          icon: 'fas fa-exclamation-circle'
        });
        showDeleteModal.value = false;
      }
    };

    const confirmDelete = () => {
      showDeleteModal.value = true;
    };

    const showNotification = ({message, type, icon}) => {
      notification.value = { show: true, message, type, icon };
      setTimeout(() => {
        notification.value.show = false;
      }, 5000);
    };

    onMounted(() => {
      fetchUserData();
    });

    return {
      formData,
      isLoading,
      showDeleteModal,
      showPassword,
      notification,
      submitForm,
      confirmDelete,
      deleteProfile
    };
  }
};
</script>

<style scoped>
/* Main Container */
.profileedit-page {
  width: 100%;
  padding: 30px;
  background: #0A0A0A;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
}

/* Header */
.page-title {
  color: #FFEE00;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Form Styles */
.profileedit-form {
  padding: 1.5rem 0;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #FFEE00;
  font-weight: 500;
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 0.85rem 1.25rem;
  background: #2a2a2a;
  border: 1px solid #444;
  color: #fff;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #FFEE00;
  box-shadow: 0 0 0 3px rgba(255, 238, 0, 0.1);
  outline: none;
}

.form-input:disabled {
  background: #333;
  color: #aaa;
  cursor: not-allowed;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 1.1rem;
}

.toggle-password:hover {
  color: #FFEE00;
}

/* Buttons */
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  gap: 1rem;
}

.save-btn, .delete-btn {
  padding: 0.85rem 1.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.save-btn {
  background: #FFEE00;
  color: #000000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.save-btn:hover {
  background: linear-gradient(135deg, #3e8e41, #1B5E20);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.save-btn:disabled {
  background: #555;
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
}

.delete-btn {
  background: linear-gradient(135deg, #f44336, #c62828);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.delete-btn:hover {
  background: linear-gradient(135deg, #e53935, #b71c1c);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: #2a2a2a;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 1px solid #444;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1a;
}

.modal-header h3 {
  margin: 0;
  color: #FFEE00;
  font-size: 1.4rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s;
}

.modal-close:hover {
  color: #FFEE00;
}

.modal-body {
  padding: 1.5rem;
  color: #ddd;
  line-height: 1.6;
}

.modal-actions {
  padding: 1.25rem;
  border-top: 1px solid #444;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: #1f1f1f;
}

.confirm-delete-btn, .cancel-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.confirm-delete-btn {
  background: linear-gradient(135deg, #f44336, #c62828);
  color: white;
}

.confirm-delete-btn:hover {
  background: linear-gradient(135deg, #e53935, #b71c1c);
}

.cancel-btn {
  background: #444;
  color: white;
}

.cancel-btn:hover {
  background: #555;
}

/* Notification */
.notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: white;
  z-index: 1000;
  max-width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.notification.success {
  background: rgba(46, 125, 50, 0.9);
}

.notification.error {
  background: rgba(198, 40, 40, 0.9);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.notification-content i {
  font-size: 1.3rem;
}

/* Animations */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

.notification-slide-enter-active {
  transition: all 0.3s ease-out;
}
.notification-slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.notification-slide-enter-from,
.notification-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .profileedit-page {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }

  .save-btn, .delete-btn {
    width: 100%;
  }

  .modal-actions {
    flex-direction: column;
  }

  .confirm-delete-btn, .cancel-btn {
    width: 100%;
  }
}
</style>
