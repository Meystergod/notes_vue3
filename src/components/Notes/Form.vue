<template>
    <div class="note-form-wrapper">
        <form class="note-form" @submit.prevent="submitForm">
            <textarea v-model="value" placeholder="Type your note" required />
            <TagsList
                @onItemClick="handleTagClick"
                :items="tags"
            />
            <button class="btn btnPrimary" type="submit">Add new note</button>
        </form>
    </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
    components: {
        TagsList
    },
    data() {
        return {
            value: '',
            tags: ['work', 'home', 'travel'],
            activeTags: []
        }
    },
    methods: {
        submitForm() {
            this.$emit('submitForm', this.value, this.activeTags)
            this.value = ''
            this.activeTags = []
            Array.from(document.getElementsByClassName('tag-item isActive')).forEach(el => el.classList.remove('isActive'))
        },
        handleTagClick(tag) {
            event.target.classList.toggle('isActive')
            const index = this.activeTags.indexOf(tag)
            index === -1 ? this.activeTags.push(tag) : this.activeTags.splice(index, 1)
        }
    }
}
</script>

<style lang="scss">
.note-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.note-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    textarea {
        margin-bottom: 0;
    }
}
</style>
