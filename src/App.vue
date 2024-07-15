<template>
  <h1>📚 Libralies 📚</h1>
  <p>Welcome to Libraries! plaese search text!</p>
  <form>
    <laber>ディレクトリ：</laber>
    <input type="text" />
    <laber>ファイル名：</laber>
    <input type="text" />
    <input type="button" value="検索" />
  </form>
  <p>ファイル名を入力してください</p>
  <h2>検索結果：</h2>
  <ul>
    <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気1.pdf</li>
    <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気2.pdf</li>
    <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気3.pdf</li>
    <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気4.pdf</li>
    <li>/HOGE/FUGA/ほげほげ/フガフガ/保気保気5.pdf</li>
  </ul>
  <p>指定したファイルは存在しません</p>
</template>

<script setup></script>

<style lang="scss">
@import '~/assets/css/reset.scss';
</style>
