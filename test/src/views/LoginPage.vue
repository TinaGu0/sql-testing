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
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const email = ref(null);
const user = ref(null);
const pass = ref(null);

</script>

<style lang="scss" scoped>

</style>