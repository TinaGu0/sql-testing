<template>
    <h1>Sign Up</h1>
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
<Dialog v-model:visible="visible" modal header="error" :style="{ width: '25rem', height:'50rem' }">
    <div class="flex align-items-center gap-3 mb-3">
        <p>{{ msg }}</p>
    </div>
</Dialog>
<button @click="signOut()">Sign out</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

import { supabase } from '../lib/supabase.js';

import { useCartStore } from '@/stores/ShoppingCart.ts';

const visible = ref(false);

const email = ref(null);
const user = ref(null);
const pass = ref(null);

const cartStore = useCartStore();

const msg = ref('')

function submit() {
    if (pass.value.length < 6) {
        visible.value = true
        msg.value ='Your password is too short. (at least 6 numbers)'
    } else {
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
cartStore.insertId(userData.user.id)
if (error) {
    console.log(error)
} else {
    insertData(userData)
    insertCartData(userData)
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

async function signOut() {
    const { error } = supabase.auth.signOut()
    if (error) {
        console.log(error)
    } else {
        console.log("signed oUT")
        const { data, error } = await supabase.auth.getSession()
        console.log(data, error);
        //revise
    }
};

async function insertCartData(userData) {
    const { data: insertData, error: insertError } = await supabase
    .from('userCart')
    .insert([
      { id: userData.user.id , cartItems: JSON.stringify([])},
    ])
    if (insertError) {
    console.error(insertError);

  } else {
    console.log('cart created', insertData);
  }
};

</script>

<style lang="scss" scoped>

</style>