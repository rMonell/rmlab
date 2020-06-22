<template>
      <form @submit="handleSubmit">
        <div class="flex mb-lg">
          <app-textfield
              @input="val => fullname = val"
              name="fullname"
              :value="fullname"
              :label="fullnameLabel"
              class="mr-lg w-full md:w-2/5"
          />
          <app-textfield
              @input="val => email = val"
              name="email"
              type="email"
              :value="email"
              :label="emailLabel"
              class="w-full"
          />
        </div>
        <app-textfield
            @input="val => message = val"
            name="message"
            :value="message"
            :label="messageLabel"
            tag="textarea"
            class="mb-lg h-24"
        />
        <app-button type="submit" class="w-full" :waiting="isWaiting">{{ send }}</app-button>
        <p v-if="error" class="text-base text-red-500 mt-lg">{{ errorMessage }}</p>
        <p v-if="success" class="text-base text-green-500 mt-lg">{{ successMessage }}</p>
      </form>
</template>

<script>
import axios from 'axios'

import AppTextfield from "~/components/global/AppTextfield";
import AppButton from "~/components/global/AppButton";

export default {
  components: {
    'app-textfield': AppTextfield,
    'app-button': AppButton,
  },
  data() {
    return {
      fullname: '',
      email: '',
      message: '',
      isWaiting: false,
      error: false,
      success: false
    }
  },
  computed: {
    fullnameLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].fullname + ' *';
    },
    emailLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].email + ' *';
    },
    messageLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].message + ' *';
    },
    send: {
      get() {
        return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].send;
      },
      set(val) {
        return val
      }
    },
    errorMessage() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].error;
    },
    successMessage() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].success;
    }
  },
  methods: {
    handleSubmit(event) {
      const params = {
        fullname: this.fullname,
        email: this.email,
        message: this.message
      }

      this.error = false
      this.isWaiting = true

      event.preventDefault()

      if (this.fullname === '' || this.email === '' || this.message === '') {
        this.isWaiting = false
        this.error = true
      } else {
        axios.post('https://fieldgoal.io/f/BIdlvm', null, { params: params }).then(() => {
          this.isWaiting = false
          this.success = true
        })
      }
    }
  }
};
</script>