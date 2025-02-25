<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import { useUserStore } from '../stores/userStore.js';

const auth = useUserStore();
const mail_input = ref('');

const passwordReset = async () => {
    const email = mail_input.value.trim();

    if (!email) {
        return Swal.fire("Hata!", "E-posta adresi boş bırakılamaz.", "error");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Swal.fire("Hata!", "Geçerli bir e-posta adresi giriniz.", "error");
    }

    try {
        const response = await auth.resetPassword(email);
        if (response.status === true) {
            Swal.fire({
                title: "Mailinize gelen kodu giriniz.",
                input: "text",
                inputAttributes: { autocapitalize: "off" },
                showCancelButton: true,
                cancelButtonText: "Kapat",
                confirmButtonText: "Onayla",
                showLoaderOnConfirm: true,
                preConfirm: async (code) => {
                    try {
                        const confirmResponse = await auth.confirmationCode(code);
                        if (confirmResponse.status === false) {
                            return Swal.showValidationMessage(confirmResponse.message);
                        }
                        return confirmResponse.message;
                    } catch (error) {
                        Swal.showValidationMessage(`Hata: ${error}`);
                    }
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Başarılı!", result.value, "success");
                }
            });
        }
    } catch (error) {
        Swal.fire("Hata!", "Bir hata oluştu, lütfen tekrar deneyin.", "error");
    }
};

const handleEnter = (event) => {
    if (event.key === "Enter") {
        passwordReset();
    }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box">
          <h4 class="mb-5">Şifrenizi mi Unuttunuz?</h4>
          <label for="email">E-Posta adresinizi giriniz.</label>
          <input id="email" type="email" v-model="mail_input" placeholder="E-Posta" required autocomplete="email" @keypress="handleEnter" />
          <button @click="passwordReset" class="btn btn-new">Kod Gönder</button>
        </div>
      </div>
    </div>
  </div>
</template>
