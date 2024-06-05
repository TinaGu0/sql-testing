<template>
    <h1>Log In</h1>
    <form>
        <div class="card flex justify-content-center">
            <FloatLabel>
                <InputText id="email" v-model="email" />
                <label for="email">Email</label>
            </FloatLabel>
        </div>
        <div class="card flex justify-content-center">
            <FloatLabel>
                <Password v-model="password" toggleMask />
                <label for="password">Password</label>
            </FloatLabel>
        </div>
        <Button label="Submit" @click="signIn()"/>
    </form>
    <Dialog v-model:visible="visible" :style="{ width: '25rem' }">
    <div class="flex align-items-center gap-3 mb-3">
        <p>{{ note }}</p>
    </div>
</Dialog>
<button @click="getSession()">Get current session</button>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

import { supabase } from '../supabase.js';

const email = ref(null);
const password = ref(null);

const visible = ref(false);
const note = ref('')


async function signIn() {
    const { data: session, error } = await supabase.auth.signInWithPassword({
        email: email.value, 
        password: password.value,
    })
    if (error) {
        note.value = 'error logging in. please check your credentials'
        visible.value = true;
    } else {
        note.value = 'successfully logged in'
        visible.value = true;
        console.log(session)
    }
    return session
};

async function getSession() {
    const { data, error } = await supabase.auth.getSession()
    console.log(data)
    if (error) {
        console.log(error)
    }
    return data.session.user
}



</script>

<style lang="scss" scoped>

</style>