<template>
  <form name="signup" class="signup" method="post" @submit.prevent="onSubmit" action="/api/signup" >
    <label for="email">Signup with your email</label>
    <input type="email" id="email" name="email" value="" required />
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
        method: form.method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${formData.get('email')}`
      })
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
