<script setup>
import { onMounted, ref } from 'vue';
import { formStore } from '../stores/formStore.js';
import Swal from "sweetalert2";
import { userStore } from '../stores/userStore.js';

const form = formStore();
const csrf = ref('');
const auth = userStore();
const passwordCode = ref('');

onMounted(async () => {
  await form.csrfToken();
  csrf.value = form.csrf;
  console.log(form.csrf);
});

const mail_input = ref('');

const passwordReset = async () => {
    const mail = mail_input.value;
    if (mail != "") {
        try {
            const response = await auth.resetPassword(mail);
            console.log(response.status);
            if(response.status === true) {
                Swal.fire({
                    title: "Mailinize gelen kodu griniz.",
                    input: "text",
                    inputAttributes: {
                    autocapitalize: "off"
                    },
                    showCancelButton: true,
                    cancelButtonText: "Kapat",
                    confirmButtonText: "Onayla",
                    showLoaderOnConfirm: true,
                    preConfirm: async (code) => {
                        try {
                            const response = await auth.confirmationCode(code);
                            console.log(response.message)
                            if (response.status === false) {
                                return Swal.showValidationMessage(await response.message);
                            }
                            return response.message;
                        } catch (error) {
                            Swal.showValidationMessage(`Hata: ${error}`);
                        }
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Onay Başarılı!",
                            text: result.value,
                            icon: "success"
                        });
                    }
                });
            }
        } catch (error) {
            console.error("Reset Password Hatası: ", error);
        }   
    } else {
        Swal.fire("Mail alanını boş bırakamazsınız");
    }
};

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box">
          <h4 class="mb-5">Şifrenizi mi Unuttunuz</h4>

            <input type="hidden" name="_token" :value="csrf">
            <label for="">E-Posta adresinizi giriniz.</label>
            <input type="email" v-model="mail_input" placeholder="E-Posta" required>
            <button @click="passwordReset" class="btn btn-new">Kod Gönder</button>
        </div>
      </div>
    </div>
  </div>
</template>