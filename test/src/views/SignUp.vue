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
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        username: user.value,
        password: pass.value,
})
if (error) {
    console.log(error)
} else {
    insertData(data)
};
console.log(data, error)
};


async function insertData() {
    const { data: insertData, error: insertError } = await supabase
    .from('login')
    .insert([
      {user_id: userData.id, email: email.value, username: username.value, user_id: signUpData.user.id },
    ])
    if (insertError) {
    console.error(insertError);
  } else {
    console.log('User data inserted successfully:', insertData);
  }
};


</script>

<style lang="scss" scoped>

</style>