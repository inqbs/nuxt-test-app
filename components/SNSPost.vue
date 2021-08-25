<template>
  <b-list-group-item>
    <p>
      <strong>@{{ msgObj.author }}</strong>
    </p>
    <p>{{ msgObj.msg }}</p>
    <p class="d-flex justify-content-between">
      <time :datetime="$moment(msgObj.date).format('YYYY-MM-DD HH:mm:ss')">
        {{ $moment(msgObj.date).format('YYYY-MM-DD HH:mm:ss') }}
      </time>
      <b-button v-if="isMine" variant="danger" @click="$emit('delete', msgObj)">
        <b-icon-trash2-fill />
      </b-button>
    </p>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    msgObj: {
      type: Object,
      required: true,
    },
    isMine: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
