<template>
  <main>
    <h1 class="title">📚 Libraries 📚</h1>
    <p class="description">Welcome to Libraries! plaese search text!</p>
    <form class="form">
      <div class="textform-box">
        <label class="label">ディレクトリ：</label>
        <input class="textform" type="text" v-model="directoryPath" />
      </div>
      <div class="textform-box">
        <label class="label">ファイル名：</label>
        <input class="textform" type="text" v-model="searchWord" />
      </div>
      <input class="button" type="button" value="検索" @click="onClickSearch" />
    </form>
    <div class="result-box">
      <p v-if="directoryPath === '' || result === undefined">
        ディレクトリを入力してください
      </p>
      <template v-if="result?.length > 0">
        <h2>検索結果：</h2>
        <ul v-for="filePath in result">
          <li @click="onClickList(filePath.address)">
            {{ filePath.path }}
          </li>
        </ul>
      </template>
      <p class="error-message" v-if="result?.length === 0">
        指定したファイルは存在しません
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Dirent } from 'fs';

const LOCAL_STORAGE = {
  DIRECTORY_PATH: 'directoryPath',
};

interface IResult {
  address: string;
  path: string;
}

const path = ref('');
const searchWord = ref('');
const result = ref<IResult[]>();

const directoryPath = computed<string>({
  get: () => loadDirectoryPath() || path.value,
  set: (newValue: string) => {
    saveDirectoryPath(newValue);
    path.value = newValue;
  },
});
function saveDirectoryPath(newDirectoryPath: string) {
  localStorage.setItem(LOCAL_STORAGE.DIRECTORY_PATH, newDirectoryPath);
}
function loadDirectoryPath() {
  return localStorage.getItem(LOCAL_STORAGE.DIRECTORY_PATH);
}

async function searchFiles(directoryPath: string, searchWord: string) {
  try {
    const files: Dirent[] = await (window as any).electron.getFiles(
      directoryPath,
    );
    const pdfFiles = files.filter((file) => {
      const fileExtension = file.name.split('.').pop();
      return fileExtension === 'pdf';
    });

    return pdfFiles.filter((file) => {
      const fileName = file.name;
      const regex = new RegExp(searchWord);

      return fileName.search(regex) > -1;
    });
  } catch (error) {}
}
async function onClickSearch() {
  const files = await searchFiles(directoryPath.value, searchWord.value);
  result.value = files.map((file) => {
    return {
      address: file.parentPath,
      path: `${file.parentPath}/${file.name}`,
    };
  });
}

async function onClickList(listText: string) {
  await (window as any).electron.setClipboard(listText);
}
</script>

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
