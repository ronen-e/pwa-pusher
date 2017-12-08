<template>
  <form name="signup" class="signup" method="post" @submit.prevent="onSubmit" action="/signup" accept-charset="UTF-8">
    <label for="email">Signup with your email</label>
    <input type="email" id="email" name="" value="" required />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
//  TODO onsubmit hook
export default {
  name: 'signup',
  data () {
    return {
    }
  },
  methods: {
    onSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      fetch(form.action, {
        method: form.method
      })
      console.log('submit', e)
      console.log('data', formData)
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

a {
  color: #35495E;
}
</style>
