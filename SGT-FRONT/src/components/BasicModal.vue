<script setup>
  const props = defineProps({ showModal: Boolean});
</script>

<template>
  <transition name="modal">
    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- header modal  -->
          <div class="modal-header flex items-center">
            <slot name="header">
            </slot>
            <button class="modal-default-button ml-auto w-8 h-8" @click="$emit('close-modal')">
              <font-awesome-icon icon="fa-solid fa-xmark" class="w-full h-full text-primary text-lg"/>
            </button>
          </div>
          <!-- body modal  -->
          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>
          <!-- footer slot  -->
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<style scoped>  
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: fit-content;
  max-width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>