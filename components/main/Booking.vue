<template>
  <div id="Booking" class="container booking-form">
    <h2 class="form-title">{{ $t('BookYourTrip') }}</h2>
    <div v-for="(field, index) in formFields" :key="index" class="form-group">
      <label :for="field.id" class="form-label" :style="{ textAlign: $i18n.locale === 'AR' ? 'right' : 'left' }">{{
        $t(field.label) }}</label>
      <template v-if="field.type === 'datepicker'">
        <DatePicker v-model="formData[field.id]" type="date" class="form-input"></DatePicker>
      </template>
      <template v-else-if="field.type === 'select'">
        <select :id="field.id" v-model="formData[field.id]" class="form-input form-select" :min-date='new Date()'>
          <option
v-for="(option, optionIndex) in field.options" :key="optionIndex" :value="option"
            :style="{ textAlign: $i18n.locale === 'AR' ? 'right' : 'left' }">
            {{ $t(option) }}</option>
        </select>
      </template>
      <template v-else>
        <input
:id="field.id" v-model="formData[field.id]" :type="field.type" class="form-input"
          :required="field.required" :min="field.id === 'adults' || field.id === 'children' ? 0 : undefined">
      </template>
    </div>
    <notifications title="Error" />
    <notifications title="success" />
    <button :disabled="!isFormComplete" class="btn form-submit" @click="submitForm">{{ $t('Submit') }}</button>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { required } from 'vuelidate/lib/validators';

import '@/assets/css/Booking.css'
export default {
  name: 'BookingVue',
  components: {
    DatePicker
  },
  data() {
    return {
      formData: {
        from: '',
        to: '',
        tripDate: new Date(),
        ticketClass: '',
        tripType: '',
        adults: null,
        children: null,
      },
      formFields: [
        {
          id: 'from',
          label: 'From',
          type: 'text',
          required: true,
        },
        {
          id: 'to',
          label: 'To',
          type: 'text',
          required: true,
        },
        {
          id: 'tripDate',
          label: 'tripDate',
          type: 'datepicker',
          required: true,
        },
        {
          id: 'ticketClass',
          label: 'ticketClass',
          type: 'select',
          required: true,
          options: ['Economy', 'Business', 'First'],
        },
        {
          id: 'tripType',
          label: 'tripType',
          type: 'select',
          required: true,
          options: ['OneWay', 'RoundTrip'],
        },
        {
          id: 'adults',
          label: 'adults',
          type: 'number',
          required: true,
        },
        {
          id: 'children',
          label: 'children',
          type: 'number',
          required: true,
        },
      ],
      datePickerOptions: {
        beforeCellClick: this.handleBeforeCellClick,
      },
    };
  },
  validations: {
    formData: {
      from: required,
      to: required,
      tripDate: required,
      ticketClass: required,
      tripType: required,
      adults: required,
      children: required,
    },
  },
  computed: {

    // Handle Check For Function Fill Fields
    isFormComplete() {
      return this.formFields.every((field) => {
        if (field.required) {
          const value = this.formData[field.id];
          return value !== null && value !== undefined && value !== '';
        }
        return true;
      });
    },
  },
  methods: {

    // Handle Submit Form
    submitForm() {
      if (this.isFormValid()) {
        this.handleFormSubmission();
      } else {
        this.$notify({
          title: 'Error',
          text: 'Please fill out all required fields and select valid options.',
          type: 'error'
        });
      }
    },
    // Check About Validation Form
    isFormValid() {
      // Check that required fields are not empty
      return this.formFields.every((field) => {
        if (field.required) {
          const value = this.formData[field.id];
          return value !== null && value !== undefined && value !== '';
        }
        return true;
      });
    },
    handleFormSubmission() {
      // Handle the form submission Such as Send Data Or Display Notification.
      this.$notify({
        title: 'Success',
        text: 'Form submitted successfully',
        type: 'success'
      });
    },
  },
};
</script>

<style scoped></style>
