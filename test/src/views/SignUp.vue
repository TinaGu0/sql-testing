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
    <Button label="Submit" @click="submit()"/>
</form>
<Dialog v-model:visible="visible" modal header="error" :style="{ width: '25rem' }">
    <div class="flex align-items-center gap-3 mb-3">
        <p>Your password is too short. (at least 6 numbers)</p>
    </div>
</Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

import { supabase } from '../supabase.js';

const visible = ref(false);

const email = ref(null);
const user = ref(null);
const pass = ref(null);

function submit() {
    if (pass.value.length < 6) {
        visible.value = true
    } else {
        //pass.value = null 
        signUp()
    }
}


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
    return userData
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