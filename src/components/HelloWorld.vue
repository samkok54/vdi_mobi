<template>
  <div class="hello">
    <div class="ui steps"></div>
    <div class="ui three column grid">
      <div class="column"></div>
        <div class="column">
        <div class="ui segment">
          <h2 class="ui center aligned icon header">
            <i class="circular users icon"></i>
            Account Settings
          </h2>
            <div class="ui form">
             <div class="field">
               <label>Full Name</label>
               <input name="Full-Name" type="text" placeholder="Full Name" value="" v-model="fullName"></div>
               <div class="field">
                <label>Telephone Numbers</label>
                  <input name="Telephone Number" type="Number" placeholder="Telephone Numbers" value="" v-model="phone"></div>
                    <div class="field">
        <label>E-Mail</label>
        <input name="E-Mail" type="text" placeholder="E-Mail" value="" v-model="mail">
      </div>
        <div class="field">
        <label>Username</label>
        <input name="Username" type="text" placeholder="Username" value="" v-model="username">
      </div>
        <div class="field">
        <label>Password</label>
        <input name="Password" type="password" placeholder="Password" value="" v-model="password" >
      </div>
      <button class="ui button" type="submit" @click="submit">Register</button>
      <input class="ui button" type="button" onclick="location.href='https://vdicpsm.inet.co.th';" value="Go to Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fullName: '',
      phone: '',
      mail: '',
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (this.fullName !== '' && this.phone !== '' && this.mail !== '' && this.username !== '' && this.password !== '') {
        this.$http.post(process.env.IPFLASK + '/createuserapi', {username: this.username, password: this.password}).then((response) => {
          alert('finish!!')
        }, (response) => {
          console.log('error!!')
          alert('error')
        })
        // this.$router.push('/finish')
        // console.log(this.fullName !== '' && this.phone !== '' && this.mail !== '' && this.username !== '' && this.password !== '')
      } else if (this.fullName === '' || this.phone === '' || this.mail === '' || this.username === '' || this.password === '') {
        alert('there are empty fields')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
