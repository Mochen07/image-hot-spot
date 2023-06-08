<template>
  <div class="emoji-container" :style="`width: ${width}; height: ${height}`">
    <div class="emoji-content">
      <span
        v-for="item in emojiData"
        :key="item"
        class="emoji-item"
        @click="skinChange(item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import EmojiData from './native-emoji'
export default {
  name: 'EmojiContainer',
  props: {
    width: {
      type: String,
      default: '19em'
    },
    height: {
      type: String,
      default: '270px'
    }
  },
  data() {
    return {
      emojiData: EmojiData
    }
  },
  methods: {
    skinChange(item) {
      this.$emit('skinChange', item)
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.emoji-container {
	background-color: #fff;
	overflow-y: scroll;
	border: 1px solid #d9d9d9;
	border-radius: 5px;

	.emoji-content {
		user-select:none;
		.emoji-item {
			display: inline-block;
			padding: .2em;
			font-size: 1.3em;
			cursor: pointer;
			&:hover {
				opacity: 0.8;
				background-color: #eeeeee;
			}
		}
	}

	/*滚动条样式设置*/
	&::-webkit-scrollbar {
		width: 0.4em;
		height: 0.4em;
	}
	&:hover::-webkit-scrollbar-thumb {
		background-color: rgba(0,0,0,.2);
		border-radius: 0.5em;
		-webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
	}
	/*滑块*/
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0,0,0,.05);
		border-radius: 0.5em;
		-webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
	}
	/*滑块轨道*/
	&::-webkit-scrollbar-track {
		border-radius: 0.5em;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
	}
}
</style>
