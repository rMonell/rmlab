<template>
      <form @submit="handleSubmit">
        <div class="flex flex-col mb-lg md:flex-row">
          <app-textfield
              @input="val => fullname = val"
              name="fullname"
              :value="fullname"
              :label="fullnameLabel"
              class="mb-lg w-full md:mb-0 md:mr-lg"
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
            @input="val => subject = val"
            name="subject"
            type="text"
            :value="subject"
            :label="subjectLabel"
            class="w-full mb-lg"
        />
        <app-textfield
            @input="val => message = val"
            name="message"
            :value="message"
            :label="messageLabel"
            tag="textarea"
            class="mb-xl h-24"
        />
        <app-button type="submit" class="w-full" :waiting="isWaiting" animated>{{ send }}</app-button>
        <transition name="slide-fade" mode="out-in" appear>
          <p v-if="error" class="text-base text-red-500 mt-lg" key="error">{{ errorMessage }}</p>
          <p v-if="success" class="text-base text-green-500 mt-lg" key="success">{{ successMessage }}</p>
        </transition>
      </form>
</template>

<script>
import emailjs from 'emailjs-com'
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
      subject: '',
      isWaiting: false,
      error: false,
      success: false,
    }
  },
  computed: {
    fullnameLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].fullname + ' *';
    },
    emailLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].email + ' *';
    },
    subjectLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].subject + ' *';
    },
    messageLabel() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].message + ' *';
    },
    send() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].send;
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
        from_name: this.fullname,
        from_email: this.email,
        subject: this.subject,
        message: this.message,
      }

      const serviceId = 'gmail'
      const templateId = 'rmlab'
      const userId = 'user_r8FGjOVBIMcsYObU4igli'

      this.error = false
      this.isWaiting = true

      event.preventDefault()

      if (this.fullname === '' || this.email === '' || this.message === '' || this.subject === '') {
        if (this.success) this.success = false

        this.isWaiting = false
        this.error = true
      } else {
        emailjs.send(serviceId, templateId, params, userId).then(() => {
          if (this.error) this.error = false

          this.isWaiting = false
          this.success = true

          this.fullname = ''
          this.email = ''
          this.message = ''
          this.subject = ''
        })
      }
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active { transition: all .3s ease }
.slide-fade-leave-active { transition: all .3s ease }

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>