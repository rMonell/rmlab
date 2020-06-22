<template>
  <div class="container w-full z-10">
    <magic-title
      :value="title"
      tag="h1"
      class="text-4xl font-bold uppercase mb-xl text-center md:text-left"
      from="bottom"
      to="initialY"
    />

    <contact-form />
  </div>
</template>

<script>
import MagicTitle from "~/components/global/MagicTitle";
import ContactForm from "~/components/pages/contact/ContactForm";

export default {
  components: {
    'magic-title': MagicTitle,
    'contact-form': ContactForm,
  },

  computed: {
    title() {
      return this.$store.state.locale.staticTrans.contact[this.$store.state.locale.value].title;
    }
  },
};
</script>