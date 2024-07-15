<template>
  <main>
    <h1 class="title">📚 Libralies 📚</h1>
    <p class="description">Welcome to Libraries! plaese search text!</p>
    <form class="form">
      <div class="textform-box">
        <label class="label">ディレクトリ：</label>
        <input class="textform" type="text" />
      </div>
      <div class="textform-box">
        <label class="label">ファイル名：</label>
        <input class="textform" type="text" />
      </div>
      <input class="button" type="button" value="検索" />
    </form>
    <div class="result-box">
      <p>ファイル名を入力してください</p>
      <h2>検索結果：</h2>
      <ul>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気1.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気2.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気3.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気4.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気5.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気6.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気7.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気8.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気9.pdf</li>
        <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気10.pdf</li>
      </ul>
      <p class="error-message">指定したファイルは存在しません</p>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss">
@import '~/assets/css/reset.scss';

main {
  padding: 12px 24px;
}

.title {
  margin: 12px 0px;
}
.description {
  margin: 24px;
}
.form {
  display: flex;
  flex-direction: column;

  > .textform-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    > .label {
      margin-bottom: 8px;
    }
    > .textform {
      padding: 4px;
      width: 80%;
    }
  }
  > .button {
    margin: 24px 0;
    height: 35px;
    width: 200px;
  }
}
.result-box {
  > .error-message {
    color: red;
  }
}
</style>
