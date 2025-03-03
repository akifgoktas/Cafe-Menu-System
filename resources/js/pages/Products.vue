<script setup>
  import AreaRightTop from "@/components/arearighttop.vue";
  import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    title: "Bu ürünü silmek istediğinizden emin misiniz?",
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
        text: "Ürün silinmiştir.",
        icon: "success",
      });
    }
  });
};
</script>

<template>
    <AreaRightTop />
    <div class="table-top">
        <p class="m-0">Sistemdeki tüm ürünleri görüntülüyorsunuz.</p>
        <RouterLink :to="{ name: 'ProductUpdate'}" class="btn btn-new">Yeni Ürün Ekle</RouterLink>
      </div>
    <table class="table caption-top products-table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Resim</th>
        <th scope="col">Başlık</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="align-middle">3</th>
        <td><img src="../img/product.jpg" class="product-list-img" alt=""></td>
        <td class="align-middle">Soğuk İçecekler</td>
        <td class="button-group align-middle">
          <button type="button" class="btn btn-edit">Düzenle</button>
          <button @click="showAlert" type="button" class="btn btn-delete">Sil</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>