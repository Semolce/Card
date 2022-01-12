<template>

  <el-dialog v-model="Visible" title="Warning" width="30%" center class = 'dialog' modal=true>
    <span
      >It should be noted that the content will not be aligned in center by
      default</span
    >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="Visible = false">Cancel</el-button>
        <el-button type="primary" @click="Visible = false">
        Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


export default {
  name: 'popupWindow',
  props: {
    Visible: Boolean,
    // isBot: Boolean,
    // rawHtml: String
  },
  data() {
    return {
    };
  },
}

</script>

<style type="text/css">
.dialog{
    width:30%;
    float:left
}
</style>