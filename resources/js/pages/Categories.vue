<script setup>
import AreaRightTop from "@/components/arearighttop.vue";
import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    title: "Bu kategoriyi silmek istediğinizden emin misiniz?",
    text: "Silmek istemiyorsanız -Hayır- tuşuna tıklayınız.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Hayır",
    confirmButtonText: "Evet Sil",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Başarılı",
        text: "Kategori silinmiştir.",
        icon: "success",
      });
    }
  });
};
</script>

<template>
  <AreaRightTop />
  <button type="button" class="btn btn-new">Yeni Ekle</button>
  <table class="table caption-top category-table">
    <caption>Menünüzdeki kategorileri görüntülüyorsuuz.</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Başlık</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Tatlılar</td>
        <td class="button-group">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Sıcak İçecekler</td>
        <td class="button-group">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Soğuk İçecekler</td>
        <td class="button-group">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
    </tbody>
  </table>
  </template>