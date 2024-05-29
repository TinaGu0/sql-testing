<template>
<form>
    <div class="card flex justify-content-center">
        <FloatLabel>
            <InputText id="email" v-model="email" />
            <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel>
            <InputText id="username" v-model="user" />
            <label for="username">Username</label>
        </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
        <FloatLabel>
            <Password v-model="pass" toggleMask />
            <label for="password">Password</label>
        </FloatLabel>
    </div>
    <Button label="Submit" @click="signUp()"/>
</form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import { supabase } from '../supabase.js';

const email = ref(null);
const user = ref(null);
const pass = ref(null);

async function signUp() {
    const { data: userData, error } = await supabase.auth.signUp({
        email: email.value,
        username: user.value,
        password: pass.value,
})
console.log(userData)
if (error) {
    console.log(error)
} else {
    insertData(userData)
}
};


async function insertData(userData) {
    const { data: insertData, error: insertError } = await supabase
    .from('login')
    .insert([
      { id: userData.user.id ,email: email.value, username: user.value, password: pass.value},
    ])
    if (insertError) {
    console.error(insertError);

  } else {
    console.log('Yay it works', insertData);
  }
};


</script>

<style lang="scss" scoped>

</style>