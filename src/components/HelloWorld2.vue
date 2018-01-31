<template>
  <div class="hello">
    <div class="ui three column grid">
      <div class="column"></div>
        <div class="column">
          <div class="ui segment">
            <h2 class="ui icon header">
              <i class="settings icon"></i>
                <div class="content">
                Enter OTP Code
                  <div class="sub header">We will send the OTP Code to you via Telephone.</div>
                </div>
            </h2>
              <div class="field">
                <label>OTP Code</label>
                  <input name="Password" type="password" placeholder="" value="" v-model="Password" >
                    <input class="ui button" type="button" onclick="location.href='https://vdicpsm.inet.co.th';" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

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
